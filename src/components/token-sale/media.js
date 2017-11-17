import React from "react"
import presets from "../../utils/presets"
import Container from "../container"
import IcoAlertPic from "../../assets/token-sale/media/ico-alert.png"
import IcoCountdownPic from "../../assets/token-sale/media/icocountdown.png"
import CryptoCoinNewsPic from "../../assets/token-sale/media/cryptocoinnews.png"

const Source = ({ pic, link, title }) => (
  <div css={{
    display: 'inline-block',
    margin: '25px'
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
        pic={IcoAlertPic} />
      <Source
        title="ICO COUNTDOWN"
        pic={IcoCountdownPic} />
      <Source
        title="CryptoCoin News"
        pic={CryptoCoinNewsPic} />                  
    </div>
  )
}

export default Team
