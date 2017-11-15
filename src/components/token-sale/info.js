import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import WhitePaper from "../../assets/token-sale/Squeezer.IO-White-Paper-November-2017.pdf"
import GithubIcon from "react-icons/lib/go/mark-github"

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '150px 0px',
    textAlign: 'center'
  }}>
    <div css={{
      background: presets.brand,
      width: rhythm(7.3),
      margin : '0 auto',
      display : 'inline-block'
    }} >
      <CtaButton to={'/static' + WhitePaper.split('static')[1]} overrideCSS={{
        color: '#fff !important'
      }}>
        <DocsIcon
          css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
        />
        {` `}
        <span css={{ verticalAlign: `middle` }}>White paper</span>
      </CtaButton>
    </div>
    <div  css={{
      background: presets.brand,
      width: rhythm(11),
      margin : '0 auto',
      marginLeft: '25px',
      marginTop: '15px',
      display : 'inline-block',
      cursor : 'pointer'
    }} onClick={() => window.open("https://github.com/SqueezerIO", "_blank")}>
      <CtaButton overrideCSS={{
        color: '#fff !important'
      }}>
        <GithubIcon
          css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
        />
        {` `}
        <span css={{ verticalAlign: `middle` }}>GitHub Organization</span>
      </CtaButton>
    </div>
  </div>
)
