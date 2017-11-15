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
import Chat from "../../components/token-sale/chat"
import ProblemSolution from "../../components/token-sale/problem-solution"


export default () => (
  <div>
    <Masthead/>
    <DownloadsCountUp/>
    <ProblemSolution/>    
    <TokenTerms/>
    <RoadMap/>
    <Team/>
    <Chat/>
    <Footer/>
  </div>
)
