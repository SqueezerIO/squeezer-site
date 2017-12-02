import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import GithubIcon from "react-icons/lib/go/mark-github"
import BTCPic from "./payment/BTC.png"
import ETHPic from "./payment/ETH.png"
import BCHPic from "./payment/BCH.png"
import LTCPic from "./payment/LTC.png"
import DASHPic from "./payment/DASH.png"
import XEMPic from "./payment/XEM.png"
import XMRPic from "./payment/XMR.png"

const Payment = ({ title, pic, overrideCss }) => (
  <div css={{
    display: 'inline-block',
    width: '36px',
    marginRight: '5px',
    height: '36px',
    ...overrideCss
  }}>
    <img title={title} src={pic} />
  </div>
)

export default () => (
  <div css={{
    height: '36px'
  }}>
    <Payment title="BTC" pic={BTCPic} />
    <Payment title="ETH" pic={ETHPic} />
    <Payment title="LTC" pic={LTCPic} />
    <Payment title="DASH" pic={DASHPic} />
    <Payment title="XEM" pic={XEMPic} />
    <Payment title="XMR" pic={XMRPic} />
    <Payment title="BCH" pic={BCHPic} />
  </div>
)