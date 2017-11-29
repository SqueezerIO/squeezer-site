import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import { apiGetSummary } from "../../utils/api"
import Footer from "../../components/footer"
import Input from "../../components/input"
import Participate from "../../components/token-sale/participate"
import TokenTerms from "../../components/token-sale/terms"

class TokenSale extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      summary: null
    }
  }

  componentWillMount() {
    apiGetSummary().then((res) => {
      this.setState({summary : res.data})
    })
  }

  render() {
    if (this.state.summary) {
      return (
        <div>
          <Participate summary={this.state.summary} />
          <TokenTerms summary={this.state.summary} />
          <Footer />
        </div>
      )
    }
    return <div/>;
  }
}

export default TokenSale