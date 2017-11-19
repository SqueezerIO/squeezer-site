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
import Info from "../../components/token-sale/info"
import Media from "../../components/token-sale/media"
import Chat from "../../components/token-sale/chat"
import ProblemSolution from "../../components/token-sale/problem-solution"

const Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

(function () {
  if (typeof window !== 'undefined') {    
    // if (window.location.pathname.indexOf("/token-sale") > -1) {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/5a1050e5bb0c3f433d4c9f31/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    // }
  }
})();



export default () => (
  <div>
    <Masthead/>
    <DownloadsCountUp/>
    <ProblemSolution/>    
    <TokenTerms/>
    <RoadMap/>
    <Team/>
    <Info/>
    <Media/>
    {/* <Chat/> */}
    <Footer/>
  </div>
)
