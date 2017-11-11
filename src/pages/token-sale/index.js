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
import Team from "../../components/token-sale/team"


export default () => (
  <div>
    <Masthead/>
    <DownloadsCountUp/>
    <TokenTerms/>
    <RoadMap/>
    <Team/>
    <Footer/>
  </div>
)
