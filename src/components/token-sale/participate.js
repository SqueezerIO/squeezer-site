import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import Button from "../../components/button"
import Input from "../../components/input"
import FlagsPic from "../../assets/flags.png"
import React from "react"
import { validateEmail, validateWallet } from "../../utils/validate"
import { apiAddNewTokenSalePurchase , apiGetTokenSaleWhitelisted, apiGetSecurityCode } from "../../utils/api"
import QuestionCircle from "react-icons/lib/fa/question-circle"
import WindowClose from "react-icons/lib/fa/close"
import RefreshPic from "react-icons/lib/fa/refresh"
import Payment from '../../components/token-sale/payment'
import Status from '../../components/token-sale/status'
import PercentageCircle from '../../components/percentage-circle'
import ReactTelInput from 'react-telephone-input'
import { css } from 'glamor'

import "../../css/react-tel-input.css"

// const PhoneInputStyle = css({
//   height: '300px',
//   'input[type=text]' : {
//     border : '1px solid black !important'
//   }
// })
// import Modal from 'react-modal';

// const WalletHelpModal = ({self}) => {
//   const customStyles = {
//     overlay : {
//       position          : 'fixed',
//       top               : 0,
//       left              : 0,
//       right             : 0,
//       bottom            : 0,
//       backgroundColor   : 'rgba(0, 0, 0, 0.90)'
//     },
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)'
//     }
//   };

//   return (
//     <Modal
//     isOpen={self.state.walletHelpModalIsOpen}
//     // onAfterOpen={this.afterOpenModal}
//     onRequestClose={self.closeModal.bind(self)}
//     style={customStyles}
//     contentLabel="Example Modal"
//   >
//     <h2 ref={subtitle => self.subtitle = subtitle}>Hello</h2>
//     <WindowClose css={{
//       cursor: 'pointer',
//       position: 'absolute',
//       top: '15px',
//       right: '15px'
//     }} onClick={self.closeModal.bind(self)} />
//     <div>I am a modal</div>
//     <form>
//       <input />
//       <button>tab navigation</button>
//       <button>stays</button>
//       <button>inside</button>
//       <button>the modal</button>
//     </form>
//   </Modal>
//   )
// }

class ParticipateForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props
    this.summary = this.props.summary;
    this.tier = this.summary.tiers[this.summary.activeTier];
    this.state = {
      form: {
        email: '',
        phone: '',
        walletAddress: '',
        amount: '',
        securityCode: '',
        citizenshipCertification: false,
        isReady : false
      },
      // walletHelpModalIsOpen: false,
      whitelisted: false,
      error: null,
      status: null
    }
    this.totalTokens = 0    
  }

  // openModal() {
  //   this.setState({ walletHelpModalIsOpen: true });
  // }

  // closeModal() {
  //   this.setState({ walletHelpModalIsOpen: false });
  // }

  componentDidMount() {
    const self = this
    let walletProvider = false

    if (typeof web3 !== "undefined") {
      walletProvider = web3
    }

    if (walletProvider) {
      walletProvider.eth.getAccounts(function (err, accounts) {
        if (accounts.length > 0) {
          // console.log(accounts[0])
          const account = accounts[0];
          if (self.state.form.walletAddress !== account) {
            self.state.form.walletAddress = accounts[0]
            self.setState({ form: self.state.form });
          }
        }
      })
    }
  }

  handleChange(event) {
    this.state.form[event.target.name] = event.target.value;

    if (event.target.name === "email" && validateEmail(event.target.value)) {
      apiGetTokenSaleWhitelisted(event.target.value).then((res) => {
        if (res && res.message === 'success') {
          this.setState({ whitelisted: true })
        }
      });

    }

    this.setState({ form: this.state.form });
  }

  handlePhoneChange(val) {
    this.state.form['phone'] = val;

    this.setState({ form: this.state.form });
  }

  calculateTokens() {
    let totalTokens = this.state.form.amount / this.tier.value

    if (this.state.whitelisted) {
      const whitelistBonus = totalTokens * (this.summary.bonuses.whitelist / 100)
      totalTokens += whitelistBonus
    }

    this.totalTokens = totalTokens
    
    return (totalTokens).toFixed(2)
  }

  onFormSubmit(event) {
    event.preventDefault()

    this.setState({
      error: null
    })

    const email = this.state.form.email;
    const phone = this.state.form.phone;
    const securityCode = this.state.form.securityCode;
    const walletAddress = this.state.form.walletAddress;
    const amount = Number(this.state.form.amount);
    const citizenshipCertification = this.state.form.citizenshipCertification;
    const minAmount = 50;

    let isError = false

    const setError = (error) => {
      if (!isError) {
        this.setState({ error: error })
        isError = true
      }
    }

    if (!email || !validateEmail(email)) {
      setError("Invalid email address")
    }

    if (!walletAddress || !validateWallet(walletAddress)) {
      setError("Invalid wallet address")
    }

    if (!amount || isNaN(amount)) {
      setError("Invalid amount")
    }

    // if (phone.length === 0) {
    //   setError("Missing phone number")
    // }

    if (amount && amount < minAmount) {
      setError(`Minimum amount is ${minAmount} USD`)
    }

    if (this.totalTokens > this.summary.balance) {
      setError(`Requested tokens amount exceed ${this.summary.balance}`)
    }

    // if (!citizenshipCertification) {
    //   setError("Please select your citizenship certification")
    // }

    // if (securityCode.length === 0 && !isError) {
    //   this.state.form.isReady = true;
    //   this.setState({ form: this.state.form });      
    //   apiGetSecurityCode(phone);
    // }

    // if (securityCode.length === 0) {
    //   setError('Please enter the security code received on your phone')
    // }

    if (!isError) {
      this.setState({ status: 'sending' })

      const purchaseObj = {
        email: email,
        phone: phone,
        securityCode: securityCode,
        walletAddress: walletAddress,
        utm_campaign: localStorage.utm_campaign,
        utm_medium: localStorage.utm_medium,
        utm_source: localStorage.utm_source
      }

      apiAddNewTokenSalePurchase(purchaseObj).then((res) => {
        const merchantId = this.summary.coinpayments.merchantId;
        const successUrl = this.summary.coinpayments.successUrl;
        const ipnUrl = this.summary.coinpayments.ipnUrl;
        const invoice = res.data.invoice;
        const amountf = amount.toFixed(8);
        
        const paymentUrl = `https://www.coinpayments.net/index.php?cmd=_pay_simple&reset=1&merchant=${merchantId}` + 
        `&amountf=${encodeURIComponent(amountf)}&want_shipping=0&currency=USD&item_name=Tokens&email=${encodeURIComponent(email)}&invoice=${invoice}` +
        `&success_url=${encodeURIComponent(successUrl)}&ipn_url=${encodeURIComponent(ipnUrl)}`

        if (typeof window !== "undefined") {
          window.location.href = paymentUrl;          
        }
      }).catch((error) => {
        this.setState({ status: null})
        setError(error)        
      });
    }
  }

  resendSecurityCode() {
    const phone = this.state.form.phone;    
    apiGetSecurityCode(phone);
  }

  render() {
    const distributionPercent = (100 - (this.summary.balance / this.summary.saleSupply * 100)).toFixed(2)
    return (
      <div css={{
        borderTop: `1px solid ${presets.veryLightBlue}`,
        width: '100%',
        padding: '75px 0px'
      }}>
        <div css={{
          [presets.Mobile]: {
            width: rhythm(16),
            margin: '0 auto'
          },
          [presets.Desktop]: {
            display: 'inline-block',            
            width: rhythm(38)
          },
          verticalAlign: 'top'
        }}>
          <div css={{ width: '280px', margin: '0 auto' }}>
            <PercentageCircle radius={140} borderWidth={4} percent={Number(distributionPercent)} color={"#2ecc71"}>
              <h1 css={{ margin: 0 }}>{distributionPercent}%</h1>
              Token distribution
            </PercentageCircle>
          </div>
          <Status summary={this.summary} overrideCss={{
            color : '#3385ff'
          }} />
        </div>
        <div css={{
          margin: '0 auto',
          paddingTop: '25px',
          width : rhythm(13),
          [presets.Mobile]: {
            marginTop: '50px',
          },
          [presets.Desktop]: {
            marginTop: '0px',            
            display: 'inline-block'            
          },
          verticalAlign: 'top'
        }}>
          {/* <h1 css={{
            textAlign: 'center',
            [presets.Mobile]: {
              marginTop: '50px'         
            },
            [presets.Desktop]: {
              marginTop: 0              
            }
          }}>Participate</h1> */}
          <form onSubmit={this.onFormSubmit.bind(this)} autoComplete="off">
          <Input name="email" placeholder="Email" onChange={this.handleChange.bind(this)} value={this.state.form.email} />
          {/* <ReactTelInput
            // name="phone"
            // classNames={`${PhoneInputStyle}`}
            defaultCountry={this.summary.clientCountry.toLowerCase()}
            flagsImagePath={FlagsPic}
            onBlur={this.handlePhoneChange.bind(this)}
            onChange={this.handlePhoneChange.bind(this)} /> */}
                
          <Input overrideCss={{
              display: 'inline-block',
              verticalAlign: 'center'
            }} name="walletAddress" placeholder="Wallet address" onChange={this.handleChange.bind(this)} value={this.state.form.walletAddress} />
            <QuestionCircle onClick={() => window.open("/token-sale/create-wallet/", "_blank")} css={{
              display: 'inline-block',
              verticalAlign: 'center',
              marginLeft: '5px',
              cursor: 'pointer'
            }} />
            {/* <WalletHelpModal self={this}/> */}
            <Input name="amount" placeholder="Amount (USD)" onChange={this.handleChange.bind(this)} value={this.state.form.amount} />
            <div css={{
              display: this.state.form.isReady ? 'block' : 'none'
            }}>
              <Input name="securityCode" placeholder="Security code" onChange={this.handleChange.bind(this)} value={this.state.form.securityCode} />
              <div onClick={this.resendSecurityCode.bind(this)} css={{
                cursor : 'pointer',
                color : '#3385ff',
                marginTop : '-15px',
                marginBottom : '10px'
              }}><RefreshPic/> resend the code</div>
            </div>
            <div css={{
              height: rhythm(1),
              marginBottom: '30px',
              // display: this.state.form.amount > 0 ? 'block' : 'none'
            }}>
              <b>{this.calculateTokens()} {this.summary.token}</b> - <i>1 {this.summary.token} = {this.tier.value}$</i>
              <div css={{
                display: this.state.whitelisted ? 'block' : 'none',
                marginBottom: '5px'
              }}>
                <b>{this.summary.bonuses.whitelist}%</b> whitelist bonus
              </div>
            </div>
            {/* <div css={{
              marginBottom : '15px'
            }}>
              <b>Payment&nbsp;&nbsp;</b>
              <input type="radio" id="p-crypto" name="selector" />
              <label for="p-crypto">&nbsp;Cryptocurrency</label>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="radio" id="p-paypal" name="selector" />
              <label for="p-paypal">&nbsp;PayPal</label>
            </div> */}
            {/* <div>
              <input
                name="citizenshipCertification"
                type="checkbox"
                checked={this.state.citizenshipCertification}
                onChange={this.handleChange.bind(this)} /> I certify that the beneficial owner is not a citizen of <b>USA , China or South Korea</b>
            </div> */}
            <div css={{ color: 'red', marginTop: '10px' }}>{this.state.error}</div>
            <div css={{
              background: presets.brand,
              width: '285px',
              // margin: '0 auto',
              marginTop: '25px'
            }}>
              <Button overrideCSS={{ width: '285px' }} label="Purchase tokens" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled"} />
            </div>
            <br/>
            <Payment/>
          </form>
        </div>
      </div>
    )
  }
}

export default ParticipateForm