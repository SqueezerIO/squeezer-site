import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
import GithubIcon from "react-icons/lib/go/mark-github"
import BTCPic from "../../assets/token-sale/payment/BTC.png"
import ETHPic from "../../assets/token-sale/payment/ETH.png"
import ETCPic from "../../assets/token-sale/payment/ETC.png"
import BCHPic from "../../assets/token-sale/payment/BCH.png"
import LTCPic from "../../assets/token-sale/payment/LTC.png"
import DASHPic from "../../assets/token-sale/payment/DASH.png"
import XEMPic from "../../assets/token-sale/payment/XEM.png"
import XMRPic from "../../assets/token-sale/payment/XMR.png"
import BNBPic from "../../assets/token-sale/payment/BNB.jpg"
import MastercardPic from "../../assets/token-sale/mastercard.svg"
import MastercardVisaPic from "../../assets/mc-visa-network-logos2.png"

const Payment = ({ title, pic, overrideCss }) => (
  <div css={{
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '36px',
    marginRight: '5px',
    height: '36px',
    ...overrideCss
  }}>
    <img title={title} src={pic} />
  </div>
)

export default () => (
  <div>
    <div css={{
      maxHeight: '72px'
    }}>
      <Payment title="BTC" pic={BTCPic} />
      {/* <Payment title="BCH" pic={BCHPic} /> */}
      <Payment title="ETH" pic={ETHPic} />
      {/* <Payment title="ETC" pic={ETCPic} /> */}
      <Payment title="LTC" pic={LTCPic} />
      {/* <Payment title="DASH" pic={DASHPic} /> */}
      {/* <Payment title="XEM" pic={XEMPic} /> */}
      {/* <Payment title="XMR" pic={XMRPic} /> */}
      {/* <Payment title="BNB" pic={BNBPic} /> */}
      <Payment overrideCss={{width: '98px', marginTop: '5px'}} title="MasterCard Visa" pic={MastercardVisaPic} />
    </div>
  </div>
)