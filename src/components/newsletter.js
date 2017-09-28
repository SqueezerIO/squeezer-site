import React from "react"
import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import CtaButton from "../components/cta-button"
import Input from "../components/input"

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
          <Input name="subscriber" type="email" placeholder="Enter your email address"
                 overrideCss={{
                   display           : 'inline-block',
                   margin            : 0,
                   marginTop         : rhythm(1),
                   marginRight       : rhythm(1),
                   height            : rhythm(2.2),
                   padding           : rhythm(1),
                   border            : 0,
                   width        : '100%',
                   marginBottom : rhythm(1),
                     [presets.Mobile]  : {
                     // width        : '100%',
                     // marginBottom : rhythm(1)
                   },
                   [presets.Desktop] : {
                     // width        : rhythm(20),
                     // marginBottom : 0
                   }
                 }}
          />
          <CtaButton to="/docs/" overrideCSS={{
            color         : '#fff !important',
            border        : '1px solid #fff !important',
            // width: '29%',
            verticalAlign : 'bottom'
          }}>
            <span css={{ verticalAlign : `middle` }}>Subscribe for updates</span>
          </CtaButton>
        </div>
      </div>
    </div>
  )
}
