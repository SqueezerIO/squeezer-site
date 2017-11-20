import Link from "gatsby-link"
import { css } from 'glamor'

import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import FuturaParagraph from "../futura-paragraph"
import { vP, vPHd, vPVHd, vPVVHd } from "../../components/gutters"
import CloudWithLogo from "../../components/cloud-with-logo"
import AwsLogo from "../../assets/clouds/aws-logo.png"
import MicrosoftAzureLogo from "../../assets/clouds/microsoft-azure.png"
import GoogleCloudLogo from "../../assets/clouds/google-cloud-logo.png"
import IbmOpenwhiskLogo from "../../assets/clouds/ibm-openwhisk.png"
import PlayIcon from "../../assets/token-sale/play-video.png"
import SubscribeFrom from "../../components/subscribe-form"
import Countdown from "./countdown"
import { DefaultPlayer as Video } from 'react-html5video';
import BlockchainVideo from "../../assets/token-sale/blockchain.mp4"
import BlockchainPic from "../../assets/token-sale/blockchain.png"

const videoClass = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: rhythm(64),
  height: 'auto',
  zIndex: -1
})

const MastheadContent = () => (
  <div
    className="masthead-content"
    css={{
      width: '100%',
      background: presets.brand,
      background: 'rgba(61, 94, 236, 0.9)',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: rhythm(1),
      [presets.Mobile]: {
        paddingBottom: rhythm(2),
        height: rhythm(38),
        paddingLeft: vP
      },
      [presets.Tablet]: {
        height: rhythm(46),
        paddingTop: rhythm(2)
      },
      [presets.Desktop]: {
        height: rhythm(33),
        paddingTop: rhythm(1),
      }
    }}
  >
    <Video autoPlay loop muted
      controls={[]}
      poster={BlockchainPic}
      className={`${videoClass}`}
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        [presets.Mobile]: {
          width: rhythm(68)
        },
        [presets.Mobile]: {
          width: rhythm(82)
        },
        [presets.Destkop]: {
          width: rhythm(64)
        },
        height: 'auto',
        zIndex: -1
      }}>
      <source src={BlockchainVideo} type="video/mp4" />
    </Video>
    <div css={{
      display: 'inline-block',
      verticalAlign: 'top',
      [presets.Desktop]: {
        width: '50%'
      }
    }}>
      <h1
        css={{
          ...scale(0.7),
          color: '#FFF',
          lineHeight: 1.2,
          marginTop: '25px',
          marginBottom: `1.2em`,
          [presets.Mobile]: {
            width: '90%'
          },
          "@media (min-width: 650px)": {
            fontSize: scale(1).fontSize
          },
          [presets.Tablet]: {
            fontSize: scale(1.1).fontSize
          },
          [presets.Hd]: {
            fontSize: scale(1.4).fontSize
          },
          [presets.VHd]: {
            fontSize: scale(1.5).fontSize
          },
          [presets.VVHd]: {
            fontSize: scale(1.6).fontSize
          },
          [presets.Desktop]: {
            fontSize: scale(1.4).fontSize
          }
        }}
      >
        Squeezer connects blockchain to the world-class clouds
      </h1>
      <FuturaParagraph
        overrideCSS={{
          color: presets.brandLighter,
          fontSize: scale(0.5).fontSize,
          [presets.Mobile]: {
            width: '90%'
          }
        }}
      >
        Build auto-scalable serverless apps on top of the blockchain technology
        <br />
        <br />
      </FuturaParagraph>

      <Countdown />
    </div>
    <div
      css={{
        textAlign: 'center',
        verticalAlign: 'top',
        // opacity: 0.1,
        [presets.Mobile]: {
          width: '90%',
          height: rhythm(14.5),
          marginTop: rhythm(2)
        },
        [presets.Phablet]: {
          height: rhythm(12.5)
        },
        [presets.Tablet]: {
          width: '100%',
          margin: '15px auto',
          paddingRight: `${vP}`,
        },
        [presets.Desktop]: {
          height: rhythm(12),
          display: 'inline-block',
          margin: `${rhythm(4)} ${rhythm(0)} ${rhythm(0)} ${rhythm(2)}`,
          width: rhythm(18.5)
        }
      }}
    >
      <div css={{
        cursor: 'pointer',
        zIndex: 100,
        [presets.Tablet]: {
          paddingTop: rhythm(1)
        }
      }} onClick={() => window.open("https://www.youtube.com/watch?v=_pom9R7KqYQ", "_blank")}>
        <img css={{
          [presets.Desktop]: {
            maxWidth: '550px',
          },
          height: 'auto'
        }}
          src={PlayIcon} alt="play video" />
      </div>
    </div>
  </div>
)


export default MastheadContent
