import Link from "gatsby-link"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"
import Countdown from 'react-countdown-now'

import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import CtaButton from "../cta-button"
import FuturaParagraph from "../futura-paragraph"
import { vP, vPHd, vPVHd, vPVVHd } from "../../components/gutters"
import CloudWithLogo from "../../components/cloud-with-logo"
import AwsLogo from "../../assets/clouds/aws-logo.png"
import MicrosoftAzureLogo from "../../assets/clouds/microsoft-azure.png"
import GoogleCloudLogo from "../../assets/clouds/google-cloud-logo.png"
import IbmOpenwhiskLogo from "../../assets/clouds/ibm-openwhisk.png"
import PlayIcon from "../../assets/token-sale/play.png"
import SubscribeFrom from "../../components/subscribe-form"

const saleStage = `pre-sale`;

const countDownTime = () => {
  const toDate = '2017-11-23T00:00:00.000Z'

  // return new Date().getTime() + 5000;
  return new Date(toDate).getTime();
};

const CountdownCompletion = () => (
  <CtaButton to="/token-sale/participate" overrideCSS={{
    color: '#fff !important',
    border: '1px solid #fff !important'
  }}>
    <span css={{ verticalAlign: `middle` }}>Participate</span>
    {` `}
    <ArrowForwardIcon
      css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
    />
  </CtaButton>);

const pl = (name, val) => {
  if (val === 1) {
    return `${val} ${name}`;
  } else {
    return `${val} ${name}s`;
  }
};

const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <CountdownCompletion />;
  } else {
    return (
      <div>
        <h1 css={{ color: presets.brandLighter }}>
          Token {saleStage} starts in :
       </h1>
        <span css={{
          color: presets.brandLighter,
          [presets.Mobile]: {
            lineHeight: 1.2,
            fontSize: scale(0.6).fontSize            
          },
          [presets.Desktop]: {
            fontSize: scale(1.2).fontSize,            
            lineHeight: 0
          }         
        }}>{pl('day', days)}  {pl('hour', hours)} {pl('min', minutes)} {pl('sec', seconds)}</span>
      </div>
    );
  }
};

const MastheadContent = () => (
  <div
    className="masthead-content"
    css={{
      width: '100%',
      background: presets.brand,
      paddingTop: rhythm(2),
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
        paddingTop: rhythm(4)
      },
      [presets.Desktop]: {
        height: rhythm(32),
        paddingTop: rhythm(5),
      },
      [presets.Hd]: {
        paddingTop: rhythm(3),
        paddingLeft: vPHd,
        paddingBottom: rhythm(3),
      },
      [presets.VHd]: {
        paddingTop: rhythm(4),
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
        Get <b>25%</b> discount on token {saleStage}
      </FuturaParagraph>

      <div css={{ paddingTop: rhythm(1.3) }}>
        <SubscribeFrom {...{
          action: '//squeezer.us17.list-manage.com/subscribe/post?u=c85492cf3a6e8f0992fe01e4e&id=d23e505112',
        }} />
      </div>
      <div css={{
        marginTop: rhythm(2)
      }}>
        <Countdown
          date={countDownTime()}
          renderer={CountdownRender}
        />
      </div>
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
      <div css={{ cursor: 'pointer' }} onClick={() => window.open("someLink", "_blank")}>
        <img css={{
          width: '200px',
          height: 'auto'
        }}
          src={PlayIcon} alt="play video" />
        <h1 css={{
          color: presets.brandLighter,
          margin: '0'
        }}>Watch video</h1>
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
