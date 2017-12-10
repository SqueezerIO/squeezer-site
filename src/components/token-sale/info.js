import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import GithubIcon from "react-icons/lib/go/mark-github"
import CertificateIcon from "react-icons/lib/fa/certificate"

const InfoButton = ({ to, text, children }) => (
  <div css={{
    background: presets.brand,
    color: presets.brandLighter,
    margin: '0 auto',
    padding: '20px 40px',
    marginLeft: '25px',
    fontSize: '20px',
    marginTop: '15px',
    display: 'inline-block',
    cursor: 'pointer'
  }} onClick={() => window.open(to, "_blank")}>
    {children}
    <div css={{
      cursor: 'pointer',
      verticalAlign: `middle`,
      display: 'inline-block',
      marginLeft: '5px'
    }}>{text}</div>
  </div>
)

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '150px 0px',
    textAlign: 'center'
  }}>
    <InfoButton to="/docs/Squeezer.IO-White-Paper-November-2017.pdf" icon={DocsIcon} text="White paper">
      <DocsIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em`,     cursor: 'pointer'      }}
      />
    </InfoButton>
    <InfoButton to="https://github.com/SqueezerIO" icon={GithubIcon} text="GitHub Organization">
      <GithubIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
      />
    </InfoButton>
    <InfoButton to="https://github.com/SqueezerIO/squeezer-token-smartcontract" icon={CertificateIcon} text="Smart Contract">
      <CertificateIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
      />
    </InfoButton>
    <h3 css={{
      marginTop: rhythm(3)
    }}>
      <a target="_blank" href="https://etherscan.io/address/0xfc7cffb8a6d645cbeb11d939dbd851228d087461">
      Contract address : 0xfc7cffb8a6d645cbeb11d939dbd851228d087461
      </a>
    </h3>
  </div>
)