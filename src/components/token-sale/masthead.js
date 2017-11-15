import Link from "gatsby-link"

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

const MastheadContent = () => (
  <div
    className="masthead-content"
    css={{
      width: '100%',
      background: presets.brand,
      paddingTop: rhythm(1),
      paddingBottom: rhythm(1),
      paddingBottom: rhythm(1),
      [presets.Mobile]: {
        paddingBottom: rhythm(2),
        height: rhythm(48),
        paddingLeft: vP
      },
      [presets.Phablet]: {
        paddingRight: 0,
      },
      [presets.Tablet]: {
        paddingTop: rhythm(2)
      },
      [presets.Desktop]: {
        height: rhythm(32),
        paddingTop: rhythm(1),
      },
      [presets.Hd]: {
        paddingTop: rhythm(1),
        paddingLeft: vPHd,
        paddingBottom: rhythm(3),
      },
      [presets.VHd]: {
        paddingTop: rhythm(1),
        paddingLeft: vPVHd,
      },
      [presets.VVHd]: {
        paddingLeft: vPVVHd,
      },
    }}
  >
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
        Get <b>25%</b> discount on token sale
      </FuturaParagraph>

      <div css={{ paddingTop: rhythm(1.3) }}>
        <SubscribeFrom {...{
          action: '//squeezer.us17.list-manage.com/subscribe/post?u=c85492cf3a6e8f0992fe01e4e&id=d23e505112',
        }} />
      </div>
      <Countdown/>
    </div>
    <div
      css={{
        textAlign: 'center',
        verticalAlign: 'top',
        [presets.Mobile]: {
          width: '90%',
          height: rhythm(14.5),
          marginTop: rhythm(2)
        },
        [presets.Phablet]: {
          height: rhythm(12.5)
        },
        [presets.Tablet]: {
          width: '90%',
          margin: '15px auto',
          paddingRight: `${vP}`,
        },
        [presets.Desktop]: {
          height: rhythm(12),
          display: 'inline-block',
          margin: `${rhythm(4)} ${rhythm(0)} ${rhythm(0)} ${rhythm(2)}`,
          width: rhythm(19.5)
        }
      }}
    >
      <div css={{ cursor: 'pointer' }} onClick={() => window.open("https://www.youtube.com/watch?v=_pom9R7KqYQ", "_blank")}>
        <img css={{
          width: '350px',
          height: 'auto'
        }}
          src={PlayIcon} alt="play video" />
      </div>
      <div css={{
        [presets.Mobile]: {
          marginTop: rhythm(3)          
        },
        [presets.Desktop]: {
          marginTop: rhythm(5)          
        }
      }}>
        <CloudWithLogo icon={AwsLogo} height="45px">Amazon Web Services</CloudWithLogo>
        <CloudWithLogo icon={MicrosoftAzureLogo}>Microsoft Azure</CloudWithLogo>
        <CloudWithLogo icon={GoogleCloudLogo}>Google Cloud</CloudWithLogo>
        <CloudWithLogo icon={IbmOpenwhiskLogo}>IBM Openwhisk</CloudWithLogo>
      </div>
    </div>
  </div>
)

const Masthead = () => <MastheadContent />

export default Masthead
