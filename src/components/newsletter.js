import React from "react"
import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import CtaButton from "../components/cta-button"
import Input from "../components/input"
import SubscribeFrom from "../components/subscribe-form"

export default ({ overrideCss }) => {
  return (
    <div css={{
      background        : presets.brand,
      marginTop         : rhythm(2),
      padding           : rhythm(2),
      [presets.Mobile]  : {
        padding : rhythm(1)
      },
      [presets.Desktop] : {
        padding : rhythm(3)
      },
      ...overrideCss
    }}>
      <div css={{
        [presets.Desktop] : {
          margin : '0 auto',
          width: rhythm(20)
        }
      }}>
        <h2 css={{
          color  : '#fff',
          margin : 0
        }}>
          Get the latest framework updates and news
        </h2>
        <div css={{
          marginTop : rhythm(1)
        }}>
          <SubscribeFrom {...{
            action: '//squeezer.us17.list-manage.com/subscribe/post?u=c85492cf3a6e8f0992fe01e4e&id=4e87ea6b3c',
          }} />
        </div>
      </div>
    </div>
  )
}
