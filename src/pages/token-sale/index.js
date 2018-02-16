import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import Footer from "../../components/footer"
import Input from "../../components/input"
import CtaButton from "../../components/cta-button"
import Stats from "../../components/token-sale/stats"
import Masthead from "../../components/token-sale/masthead"
import MainInfo from "../../components/token-sale/mainInfo"
import TokenTerms from "../../components/token-sale/terms"
import RoadMap from "../../components/token-sale/roadmap"
import Providers from "../../components/token-sale/providers"
import Team from "../../components/token-sale/team"
import Info from "../../components/token-sale/info"
import Telegram from "../../components/token-sale/telegram"
import Affiliate from "../../components/token-sale/affiliate"
import Media from "../../components/token-sale/media"
import Exchanges from "../../components/token-sale/exchanges"
import ProblemSolution from "../../components/token-sale/problem-solution"
import Newsletter from "../../components/newsletter"
import { apiGetSummary } from "../../utils/api"

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
          <Masthead summary={this.state.summary} />
          <Exchanges/>
          <MainInfo summary={this.state.summary} />
          <Stats />
          <Providers />
          <ProblemSolution />
          <TokenTerms summary={this.state.summary} />
          <RoadMap />
          <Team />
          <Info summary={this.state.summary} />
          <Affiliate />
          <Media />
          <Telegram />
          <Newsletter />
          <Footer />
        </div>
      )
    }
    return <div/>;
  }
}

export default TokenSale