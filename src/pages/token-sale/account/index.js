import React from "react"
import { rhythm, scale, options } from "../../../utils/typography"
import presets from "../../../utils/presets"
import Footer from "../../../components/footer"
import { apiGetSummary, apiGetAccountDetails } from "../../../utils/api"
import Input from "../../../components/input"
import Button from "../../../components/button"
import Tokens from "../../../components/token-sale/tokens"
import { css } from "glamor"

class TokenSale extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      withdrawalForm: {
        ethAddress: ''
      },
      withdrawDisabled: true,
      account: {},
      activePage: 'tokens',
      endDate: null,
      endDateTime: null
    }
  }

  componentWillMount() {
    apiGetAccountDetails()
      .then((res) => {
        if (res.message === "success") {
          this.setState({ account: res.data })
        }
      })
      .catch((err) => {
        window.location = "/token-sale/account/login/"
      })

    apiGetSummary()
      .then((res) => {
        this.setState({
          summary: res.data,
          endDate: new Date(res.data.dates.sale.end).toString()
        })

        if (new Date().getTime() >= new Date(res.data.dates.sale.end).getTime()) {
          this.setState({
            withdrawDisabled: false
          })
        }
      })
  }

  logout() {
    localStorage.token = null
    window.location = "/token-sale/account/login/"
  }

  onWithdrawalFormSubmit(event) {
  }

  handleWithdrawalChange(event) {
    this.state.withdrawalForm[event.target.name] = event.target.value;
    this.setState({ withdrawalForm: this.state.withdrawalForm });
  }

  changeActivePage(page) {
    this.setState({ activePage: page })
  }

  render() {
    if (this.state.summary && this.state.account.email) {
      return <div css={{
        width: '100%',
        display: this.state.account.email ? 'block' : 'none'
      }}>
        <div
          css={{
            backgroundColor: 'rgba(0, 153, 255, 0.7)',
            padding: '8px 25px',
            // position: 'fixed',
            width: '100%',
            height: '40px',
            ' a': {
              color: '#FFF !important',
              textDecoration: 'none',
              marginRight: '25px'
            }
          }}
        >
          <div css={{
            float: 'left',
            [presets.Mobile]: {
              display: 'block'
            },
            [presets.Table]: {
              display: 'block'
            },
            [presets.Desktop]: {
              display: 'block'
            }
          }}>
            <a onClick={() => this.setState({ activePage: 'tokens' })} href="#">Tokens</a>
            <a onClick={() => this.setState({ activePage: 'kyc' })} href="#">KYC</a>
            <a onClick={() => this.setState({ activePage: 'affiliate' })} href="#">Affiliate</a>
          </div>
          <div onClick={() => window.location.replace("/token-sale/account/")} css={{
            float: 'right',
            // position: 'absolute',
            // cursor: 'pointer',
            color: '#FFF',
            right: 0,
            // top: '67px',
            // right: '20px'
          }}>
            <span css={{ 
                          [presets.Mobile]: {
                            display : 'none'
                          },
                          [presets.Tablet]: {
                            display : 'initial'
                          },
              marginLeft: '5px', 
              verticalAlign: 'middle' }}>Welcome <i>{this.state.account.email} | </i></span>
            <div onClick={this.logout.bind(this)} css={{
              color: presets.brandLight,
              fontWeight: 'bold',
              display: 'inline-block',
              color: '#FFF',
              verticalAlign: 'middle',
              cursor: 'pointer'
            }}>
              Logout
          </div>
          </div>
        </div>
        <div css={{
          margin: '0 auto',
          padding: '20px 0',
          [presets.Mobile]: {
            width: '300px'
          },
          [presets.Desktop]: {
            width: '700px'
          }
        }}>
          <div css={{
            display: this.state.activePage === 'tokens' ? 'block' : 'none'
          }}>
            <h1>Tokens</h1>
            <Tokens summary={this.state.summary} account={this.state.account} />
          </div>
          <div css={{
            display: this.state.activePage === 'kyc' ? 'block' : 'none'
          }}>
            <h1>KYC</h1>
            <div css={{
              borderTop: `1px solid ${presets.veryLightBlue}`,
              marginBottom: '15px'
            }}>
              <div css={{
                marginTop: '15px'
              }}>
                KYC/AML verification will start on <b>3 March</b> .
                <br/><br/>
                <i>Note: Purchasing tokens without KYC/AML verification is enabled by default.
                KYC/AML is required in order to transfer tokens to another wallet. </i>
              </div>
            </div>
          </div>
          <div css={{
            display: this.state.activePage === 'affiliate' ? 'block' : 'none'
          }}>
            <h1>Affiliate</h1>
            <div css={{
              borderTop: `1px solid ${presets.veryLightBlue}`,
              fontFamily: 'sans-serif',
              fontSize: '14px'
            }}>
              <div css={{
                marginTop: '25px !important',
              }}>
                Your affiliate link:
              <b>https://squeezer.io/token-sale/?utm_medium=ref&utm_source={this.state.account.affiliateCode}</b>
              </div>
            </div>
            <table css={{
              margin: '45px 0px'
            }}>
              <tbody>
                <tr>
                  <td>Referrals</td>
                  <td>Commission (USD)</td>
                </tr>
                <tr>
                  <td><b>{this.state.account.referrals}</b></td>
                  <td><b>{this.state.account.affiliateCommission}</b></td>
                </tr>
              </tbody>
            </table>
            <h2>Commission Withdrawal</h2>
            <form onSubmit={this.onWithdrawalFormSubmit.bind(this)} autoComplete="off">
              <Input name="ethAddress" placeholder="ETH address" onChange={this.handleWithdrawalChange.bind(this)} value={this.state.withdrawalForm.ethAddress} />
              <div css={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{this.state.error}</div>
              <Button overrideCSS={{ backgroundColor: `${presets.brandLight} !important`, cursor: this.state.withdrawDisabled ? 'not-allowed' : 'pointer' }} label="Withdraw" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled" || this.state.withdrawDisabled} />
            </form>
            <div css={{
              color: 'red'
            }}>NOTE: Commission will be available for the withdraw at the end of token sale<b>{this.state.endDate}</b></div>
          </div>
        </div>
        <Footer />
      </div>;
    }
    return <div />;
  }
}

export default TokenSale