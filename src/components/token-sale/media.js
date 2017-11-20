import React from "react"
import presets from "../../utils/presets"
import Container from "../container"
import IcoAlertPic from "../../assets/token-sale/media/ico-alert.png"
import IcoCountdownPic from "../../assets/token-sale/media/icocountdown.png"
import CryptoCoinNewsPic from "../../assets/token-sale/media/cryptocoinnews.png"

const Source = ({ pic, link, title }) => (
  <div onClick={() => window.open(link, "_blank")} css={{
    display: 'inline-block',
    margin: '25px',
    cursor: 'pointer'
  }}>
    <img css={{
      width: 'auto',
      height: '60px'
    }} alt={title} src={pic} />
  </div>
)

const Team = () => {
  return (
    <div css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '150px 0px'
    }}>
      <h1>Media channels</h1>
      <Source
        title="ICO Alert"
        link="https://www.icoalert.com/"
        pic={IcoAlertPic} />
      <Source
        title="ICO COUNTDOWN"
        link="https://www.icocountdown.com/"
        pic={IcoCountdownPic} />
      <Source
        title="CryptoCoin News"
        link="https://www.cryptocoinsnews.com/squeezer-connects-blockchain-world-class-clouds/"
        pic={CryptoCoinNewsPic} />                  
    </div>
  )
}

export default Team
