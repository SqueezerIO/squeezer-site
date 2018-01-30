import React from "react"
import { rhythm, scale, options } from "../../../utils/typography"
import presets from "../../../utils/presets"
import Footer from "../../../components/footer"
import { apiGetSummary, apiGetAccountDetails } from "../../../utils/api"
import Input from "../../../components/input"
import Button from "../../../components/button"

class TokenSale extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      withdrawalForm: {
        btcAddress: ''
      },
      withdrawDisabled : true,
      account: {},
      endDate: null,
      endDateTime: null
    }
  }

  componentWillMount() {
    apiGetAccountDetails()
      .then((res) => {
        this.setState({ account: res.data })
      })

    apiGetSummary()
      .then((res) => {
        this.setState({ 
          endDate: new Date(res.data.dates.sale.end).toString()
        })

        if (new Date().getTime() >= new Date(res.data.dates.sale.end).getTime()) {
          this.setState({
            withdrawDisabled : false
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

  render() {
    return <div css={{
      width: '100%',
      display: this.state.account.email ? 'block' : 'none'
    }}>
      <div css={{
        margin: '0 auto',
        padding: '75px 0',
        [presets.Mobile]: {
          width: '300px'
        },
        [presets.Desktop]: {
          width: '700px'
        }
      }}>
        Welcome <i>{this.state.account.email}</i>
        <div onClick={this.logout.bind(this)} css={{
          color: presets.brandLight,
          fontWeight: 'bold',
          float: 'right',
          cursor: 'pointer'
        }}>
          Logout
        </div>
        <div>
          <h1>Affiliate</h1>
          <div css={{
            fontFamily: 'sans-serif',
            fontSize: '14px'
          }}>
            Your affiliate link:
            <br/>
            <b>https://squeezer.io/token-sale/?utm_medium=ref&utm_source={this.state.account.affiliateCode}</b>
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
            <Input name="btcAddress" placeholder="BTC address" onChange={this.handleWithdrawalChange.bind(this)} value={this.state.withdrawalForm.btcAddress} />
            <div css={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{this.state.error}</div>
            <Button overrideCSS={{ backgroundColor: `${presets.brandLight} !important` , cursor : this.state.withdrawDisabled ? 'not-allowed' : 'pointer' }} label="Withdraw" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled" || this.state.withdrawDisabled} />
          </form>
          <div css={{
            color: 'red'
          }}>NOTE: Commission will be available for the withdraw at the end of token sale (ICO) <b>{this.state.endDate}</b></div>
        </div>
      </div>
      <Footer />
    </div>;
  }
}

export default TokenSale