import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import GitterIcon from "../../assets/gitter.jpg"

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '100px 0px'
  }}>
    <div css={{
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 css={{ textAlign: 'center' }}>Got questions ? Let's chat !</h1>
      <div css={{ cursor: 'pointer' }} onClick={() => window.open("http://chat.squeezer.io", "_blank")}>
        <img css={{
          width: '200px',
        }}
          src={GitterIcon} alt="gitter chat" />
      </div>
    </div>
  </div>
)
