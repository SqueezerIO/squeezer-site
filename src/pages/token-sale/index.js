import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import Footer from "../../components/footer"
import Input from "../../components/input"
import CtaButton from "../../components/cta-button"
import DownloadsCountUp from "../../components/downloads-countup"
import Masthead from "../../components/token-sale/masthead"
import TokenTerms from "../../components/token-sale/terms"
import RoadMap from "../../components/token-sale/roadmap"
import Providers from "../../components/token-sale/providers"
import Team from "../../components/token-sale/team"
import Info from "../../components/token-sale/info"
import Media from "../../components/token-sale/media"
import ProblemSolution from "../../components/token-sale/problem-solution"
import Newsletter from "../../components/newsletter"

export default () => (
  <div>
    <Masthead/>
    <Providers/>
    <DownloadsCountUp/>
    <ProblemSolution/>    
    <TokenTerms/>
    <RoadMap/>
    <Team/>
    <Info/>
    <Media/>
    <Newsletter/>
    <Footer/>
  </div>
)
