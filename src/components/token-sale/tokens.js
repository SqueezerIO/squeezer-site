import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import Button from "../../components/button"
import Input from "../../components/input"
import FlagsPic from "../../assets/flags.png"
import React from "react"
import { validateEmail, validateWallet } from "../../utils/validate"
import { apiAddNewTokenSalePurchase, apiGetTokenSaleWhitelisted, apiGetSecurityCode } from "../../utils/api"
import QuestionCircle from "react-icons/lib/fa/question-circle"
import WindowClose from "react-icons/lib/fa/close"
import RefreshPic from "react-icons/lib/fa/refresh"
import Payment from '../../components/token-sale/payment'
import Status from '../../components/token-sale/status'
import PercentageCircle from '../../components/percentage-circle'
import ReactTelInput from 'react-telephone-input'
import { css } from 'glamor'

import "../../css/react-tel-input.css"

class ParticipateForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props
    this.summary = this.props.summary;
    this.account = this.props.account;
    this.tier = this.summary.tiers[this.summary.activeTier];
    this.state = {
      form: {
        email: '',
        phone: '',
        walletAddress: '',
        purchaseAmount: '',
        securityCode: '',
        termsOptIn: false,
        isReady: false
      },
      // walletHelpModalIsOpen: false,
      whitelisted: false,
      error: null,
      // purchaseStatus: 'disabled',
      transferStatus: 'disabled'
    }
    this.purchaseTokens = 0,
    this.availableTokens = this.account.tokens || 0
  }

  // openModal() {
  //   this.setState({ walletHelpModalIsOpen: true })
  // }

  // closeModal() {
  //   this.setState({ walletHelpModalIsOpen: false })
  // }

  componentWillMount() {
    apiGetTokenSaleWhitelisted(this.account.email).then((res) => {
      if (res && res.message === 'success') {
        this.setState({ whitelisted: true })
      }

      return null;
    }).catch((error) => {
      console.log(error)
    });
  }

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

    this.setState({ form: this.state.form });
  }

  handlePhoneChange(val) {
    this.state.form['phone'] = val;

    this.setState({ form: this.state.form });
  }

  calculateTokens() {
    let purchaseTokens = this.state.form.purchaseAmount / this.tier.value

    if (this.state.whitelisted) {
      const whitelistBonus = purchaseTokens * (this.summary.bonuses.whitelist / 100)
      purchaseTokens += whitelistBonus
    }

    this.purchaseTokens = purchaseTokens

    return (purchaseTokens).toFixed(2)
  }

  onPurchaseFormSubmit(event) {
    event.preventDefault()

    this.setState({
      error: null
    })

    const email = this.state.form.email;
    const phone = this.state.form.phone;
    // const securityCode = this.state.form.securityCode;
    // const walletAddress = this.state.form.walletAddress;
    const amount = Number(this.state.form.purchaseAmount);
    const termsOptIn = this.state.form.termsOptIn;
    const minAmount = 100;
    const maxAmount = 100000;

    let isError = false

    const setError = (error) => {
      if (!isError) {
        this.setState({ error: error })
        isError = true
      }
    }

    // if (!email || !validateEmail(email)) {
    //   setError("Invalid email address")
    // }

    // if (!walletAddress || !validateWallet(walletAddress)) {
    //   setError("Invalid wallet address")
    // }

    if (!amount || isNaN(amount)) {
      setError("Invalid amount")
    }

    // if (phone.length === 0) {
    //   setError("Missing phone number")
    // }

    if (amount && amount < minAmount) {
      setError(`Minimum allowed amount is ${minAmount} USD`)
    }

    if (amount && amount > maxAmount) {
      setError(`Maximum allowed amount is ${maxAmount} USD`)
    }

    if (this.purchaseTokens > this.summary.balance) {
      setError(`Requested tokens amount exceed ${this.summary.balance}`)
    }

    if (!termsOptIn) {
      setError("Please agree with terms & conditions")
    }

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
        email: this.account.email,
        amount: amount,
        // phone: phone,
        userId: this.account._id,
        // securityCode: securityCode,
        // walletAddress: walletAddress,
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

        const item_name = `${this.purchaseTokens} ${this.summary.token} (Tokens)`;
        const custom = 'Golden Data INC';

        const paymentUrl = `https://www.coinpayments.net/index.php?cmd=_pay_simple&reset=1&merchant=${merchantId}` +
          `&amountf=${encodeURIComponent(amountf)}&want_shipping=0&currency=USD&item_name=${encodeURIComponent(item_name)}&email=${encodeURIComponent(email)}&invoice=${invoice}` +
          `&success_url=${encodeURIComponent(successUrl)}&ipn_url=${encodeURIComponent(ipnUrl)}&custom=${encodeURIComponent(custom)}`

        if (res.message === "success" && typeof window !== "undefined") {
          window.location.href = paymentUrl;
        }
      }).catch((error) => {
        this.setState({ status: null })
        console.log(error.message)
        setError(error.message)
      });
    }
  }

  onTransferTokensFormSubmit(event) {
    event.preventDefault()

    this.setState({
      error: null
    })

    const walletAddress = this.state.form.walletAddress

    if (!walletAddress || !validateWallet(walletAddress)) {
      setError("Invalid wallet address")
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
        width: '100%'
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
        </div>
        <div css={{
          margin: '0 auto',
          paddingTop: '25px',
          width: rhythm(13),
          [presets.Mobile]: {
            marginTop: '50px',
          },
          [presets.Desktop]: {
            marginTop: '0px',
            display: 'inline-block'
          },
          verticalAlign: 'top'
        }}>
          <form onSubmit={this.onPurchaseFormSubmit.bind(this)} autoComplete="off">
            {/* <WalletHelpModal self={this}/> */}
            <Input name="purchaseAmount" placeholder="Amount (USD)" onChange={this.handleChange.bind(this)} value={this.state.form.purchaseAmount} />
            {/* <div css={{
              display: this.state.form.isReady ? 'block' : 'none'
            }}>
              <Input name="securityCode" placeholder="Security code" onChange={this.handleChange.bind(this)} value={this.state.form.securityCode} />
              <div onClick={this.resendSecurityCode.bind(this)} css={{
                cursor: 'pointer',
                color: '#3385ff',
                marginTop: '-15px',
                marginBottom: '10px'
              }}><RefreshPic /> resend the code</div>
            </div> */}
            <div css={{
              height: rhythm(1),
              marginBottom: '60px',
              // display: this.state.form.amount > 0 ? 'block' : 'none'
            }}>
              <b>{this.calculateTokens()} {this.summary.token}</b> ( <i>1 {this.summary.token} = ${this.tier.value}</i> )
              <div css={{
                display: this.state.whitelisted ? 'block' : 'none',
                marginBottom: '5px'
              }}>
                <b>+ {this.summary.bonuses.whitelist}%</b> whitelist bonus
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
            <div>
              <input
                name="termsOptIn"
                type="checkbox"
                checked={this.state.termsOptIn}
                onChange={this.handleChange.bind(this)} /> I agree with the above <a target="_blank" href="/docs/terms.pdf">terms and conditions</a>
            </div>
            <div css={{ color: 'red', marginTop: '10px' }}>{this.state.error}</div>
            <div css={{
              width: '285px',
              // margin: '0 auto',
              marginTop: '20px'
            }}>
              <div css={{
                color: 'red',
                marginBottom: '5px',
                display: this.summary.icoActive ? 'none' : 'block'
              }}>Purchasing tokens is available only on the pre-sale/sale period.</div>
              <Button
                overrideCSS={{
                  backgroundColor: this.state.status === "sending" ? '#CDCDCD !important' : `${presets.brandLight} !important`,
                  width: '285px',
                  cursor: this.state.purchaseStatus === 'disabled' ? 'not-allowed' : 'pointer'
                }}
                label="Purchase tokens" type="submit"
                onClick={this.onSubmit} disabled={this.state.purchaseStatus === "sending" || this.state.purchaseStatus === "success" || this.state.purchaseStatus === "disabled"}
              />
            </div>
            <br />
            <Payment overrideCss={{ textAlign: 'center !important', width: '100%' }} />
          </form>
        </div>
        <div css={{
          margin: '0 auto',
          paddingTop: '25px',
          width: rhythm(13),
          height: '365px',
          [presets.Mobile]: {
            marginTop: '50px',
          },
          [presets.Desktop]: {
            marginTop: '0px',
            display: 'inline-block',
            borderLeft: `1px solid ${presets.veryLightBlue}`,
            marginLeft: '42px',
            paddingLeft: '60px'
          },
          verticalAlign: 'top'
        }}>
          <form onSubmit={this.onTransferTokensFormSubmit.bind(this)} autoComplete="off">
            {/* <WalletHelpModal self={this}/> */}
            <Input overrideCss={{
              display: 'inline-block',
              verticalAlign: 'top'
            }} name="walletAddress" placeholder="Wallet address (ERC20)" onChange={this.handleChange.bind(this)} value={this.state.form.walletAddress} />
            <div css={{
              height: rhythm(1),
              marginBottom: '20px',
              // display: this.state.form.amount > 0 ? 'block' : 'none'
            }}>
              <b>Available tokens : {this.availableTokens} {this.summary.token}</b>
            </div>
            <div css={{
              marginBottom: '35px'
            }}>
              Token transfer options :<br />
              <br />* ERC20 Wallet
            </div>
            <div css={{
              color: 'red',
              marginBottom: '5px',
              display: this.account.verified ? 'none' : 'block'
            }}>Transferring tokens is available only for the KYC/AML users.</div>
            <Button
              overrideCSS={{
                backgroundColor: `${presets.brandLight} !important`,
                width: '285px',
                cursor: this.state.purchaseStatus === 'disabled' ? 'not-allowed' : 'pointer'
              }}
              label="Transfer tokens" type="submit"
              onClick={this.onSubmit} disabled={this.state.purchaseStatus === "sending" || this.state.purchaseStatus === "success" || this.state.purchaseStatus === "disabled"}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ParticipateForm