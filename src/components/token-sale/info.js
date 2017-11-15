import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import WhitePaper from "../../assets/token-sale/Squeezer.IO-White-Paper-November-2017.pdf"
export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '100px 0px',
    textAlign: 'center'
  }}>
    <div css={{
      background: presets.brand,
      width: rhythm(7),
      margin : '0 auto',
      display : 'inline-block'
    }} >
      <CtaButton to={WhitePaper} overrideCSS={{
        color: '#fff !important'
      }}>
        <DocsIcon
          css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
        />
        {` `}
        <span css={{ verticalAlign: `middle` }}>Whitepaper</span>
      </CtaButton>
    </div>
  </div>
)
