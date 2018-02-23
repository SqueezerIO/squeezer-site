import React from "react"
import presets from "../../utils/presets"
import Container from "../container"
import BinancePic from "../../assets/token-sale/exchanges/Binance-ApplicationInProgress.png"

const Source = ({ pic, link, title }) => (
  <div onClick={() => window.open(link, "_blank")} css={{
    display: 'inline-block',
    // margin: '25px',
    cursor: 'pointer'
  }}>
    <img css={{
      width: 'auto',
      height: '120px'
    }} alt={title} src={pic} />
  </div>
)

const Exchanges = () => {
  return (
    <div id="media" css={{
      textAlign: 'center',
      // paddingTop: '75px',
      // borderTop: `1px solid ${presets.veryLightBlue}`,
      // padding: '25px 0px'
    }}>
      {/* <h1>Media channels</h1> */}
      <Source
        title="Binance"
        link="https://www.binance.com/"
        pic={BinancePic} />        
          
    </div>
  )
}

export default Exchanges
