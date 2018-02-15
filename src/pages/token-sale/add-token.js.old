import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import { apiGetSummary } from "../../utils/api"
import Footer from "../../components/footer"
import Input from "../../components/input"
import Participate from "../../components/token-sale/participate"
import TokenTerms from "../../components/token-sale/terms"
import AddTokenMetaMask from "../../assets/token-sale/add-token-metamask.png"
import { css } from "glamor"

const tableClass = css({
  border: '1px solid black',
  margin: '0 auto',

  "td": {
    wordBreak: 'break-all'
  }
})

class TokenSale extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      summary: null
    }
  }

  componentWillMount() {
    apiGetSummary().then((res) => {
      this.setState({ summary: res.data })
    })
  }

  render() {
    if (this.state.summary) {
      return (
        <div>
          <div css={{
            [presets.Mobile]: {
              width: rhythm(14)
            },
            [presets.Desktop]: {
              width: rhythm(24)
            },
            margin: '0 auto',
            paddingTop: rhythm(2)
          }}>
            <h1>Add token to your wallet</h1>
            <table>
              <tbody>
                <tr>
                  <td><b>Contract address</b></td>
                  <td>{this.state.summary.contract.contractAddress}</td>
                </tr>
                <tr>
                  <td><b>Token</b></td>
                  <td>{this.state.summary.token}</td>
                </tr>
                <tr>
                  <td><b>Decimals</b></td>
                  <td>{this.state.summary.decimal}</td>
                </tr>
              </tbody>
            </table>
            <h2>Add token to MetaMask</h2>
            <p>Click MetaMask extension -> "Add Token"</p>
            <img css={{ width: rhythm(15) }} src={AddTokenMetaMask} />
          </div>
          <Footer />
        </div>
      )
    }
    return <div css={{
      maxWidth: rhythm(9),
    }} />;
  }
}

export default TokenSale