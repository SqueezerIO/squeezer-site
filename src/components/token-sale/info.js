import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import GithubIcon from "react-icons/lib/go/mark-github"
import CertificateIcon from "react-icons/lib/fa/certificate"

const InfoButton = ({ to, text, children, header }) => (
  <div css={{
    background: header ? 'transparent' : presets.brand,
    border : header ? '1px solid #FFF' : 0,
    color: presets.brandLighter,
    height: '67px',
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

export default ({ summary , header }) => (
  <div css={{
    borderTop: header ? 0 : `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: header ? '50px' : '150px 0px',
    textAlign: 'center'
  }}>
    <InfoButton header={header} to="/docs/Squeezer.IO-White-Paper-January-2018.pdf" icon={DocsIcon} text="White paper">
      <DocsIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em`, cursor: 'pointer' }}
      />
    </InfoButton>
    <InfoButton header={header} to="https://github.com/SqueezerIO" icon={GithubIcon} text="GitHub Org">
      <GithubIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
      />
    </InfoButton>
    <InfoButton header={header} to="https://github.com/SqueezerIO/squeezer-token-smartcontract" icon={CertificateIcon} text="Smart Contract">
      <CertificateIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
      />
    </InfoButton>
    <h3 css={{
      marginTop: rhythm(1),
      lineHeight: 1.4,
      fontSize: '15px'
    }}>
      <a css={{color : header ? '#fff !important' : ''}} target="_blank" href={'https://etherscan.io/address/' + summary.contract.contractAddress}>
      Contract : {summary.contract.contractAddress}
      </a>
    </h3>
  </div >
)