import React from "react"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import PayAsYouGoIcon from "../assets/headline-features/pay-as-you-go.svg"
import IntuitiveDeploymentsIcon from "../assets/headline-features/intuitive-deployments.svg"
import SmartTestingIcon from "../assets/headline-features/smart-testing.svg"
import FuturaParagraph from "./futura-paragraph"

const Feature = ({ icon, height, title, description, cssOverride }) => {
  let h = height ? height : '120px'

  return (
    <div css={{
      display           : 'inline-block',
      verticalAlign     : 'top',
      paddingTop : rhythm(2),
      [presets.Mobile]  : {
        width  : '100%',
        height : 'auto'
      },
      [presets.Phablet] : {
        width: '33%'
      },
      [presets.Desktop] : {
        width  : '33%'
      }
    }}>
      <div css={{ whiteSpace : 'nowrap' }}>
        <img alt={title}
             src={icon}
             css={{
               marginTop         : rhythm(2),
               [presets.Mobile]  : {
                 width  : '30%',
                 height : 'auto'
               },
               [presets.Phablet] : {
                 height : 'auto',
                 width  : '30%'
               },
               [presets.Desktop] : {
                 height : h,
                 width  : 'auto'
               }
             }}
        />
      </div>
      <h3 css={{
        display : 'inline-block',
      }}>{title}</h3>
      <FuturaParagraph
        overrideCSS={{
          width : '70%',
          margin: '0 auto'
        }}
      >
        {description}
      </FuturaParagraph>
    </div>
  )
}

const HeadlineFeatures = () => {
  return (
    <div css={{
      paddingTop        : rhythm(6),
      paddingBottom     : rhythm(8),
      borderBottom      : '1px solid #cfe7fc',
      [presets.Mobile]  : {
        textAlign : 'center'
      }
    }}>
      <h1 css={{
        [presets.Mobile]  : {
          fontSize : scale(0.4).fontSize
        },
        [presets.Desktop] : {
          fontSize : scale(1.2).fontSize
        }
      }}>
        Build apps like a pro !

      </h1>
      <FuturaParagraph
        overrideCSS={{
          textAlign         : 'center',
          margin            : '0 auto',
          [presets.Mobile]  : {
            width : '80%'
          },
          [presets.Desktop] : {
            width : '70%'
          },
        }}
      >
        The framework offers you the support to get a progressive, enthusiastic, blazing fast development cycle.
      </FuturaParagraph>
      <div>
        <Feature
          title="Pay as you go"
          description="Enjoy developing your projects for any preferred time frame without the pressure of monthly costs ."
          icon={PayAsYouGoIcon}
        />
        <Feature
          title="Intuitive deployments"
          description="Deploy only the newly added infrastructure, forget the traditional builds that takes forever ."
          icon={IntuitiveDeploymentsIcon}
        />
        <Feature
          title="Smart testing"
          description="Test the new features , skip the already tested ones . Your QA team will love this ."
          icon={SmartTestingIcon}
        />
      </div>
    </div>
  )
}

export default HeadlineFeatures
