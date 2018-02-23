import Link from "gatsby-link"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"

import { rhythm, scale, options } from "../utils/typography"
import presets from "../utils/presets"
import CtaButton from "./cta-button"
import FuturaParagraph from "./futura-paragraph"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import CloudWithLogo from "../components/cloud-with-logo"
import AwsLogo from "../assets/clouds/aws-logo.png"
import MicrosoftAzureLogo from "../assets/clouds/microsoft-azure.png"
import GoogleCloudLogo from "../assets/clouds/google-cloud-logo.png"
import IbmOpenwhiskLogo from "../assets/clouds/ibm-openwhisk.png"
import Terminal from "../components/terminal"

const MastheadContent = () => (
  <div
    className="masthead-content"
    css={{
      width         : '100%',
      background    : `linear-gradient(to right,${presets.brand} 0,#55abf6  100%)`,
      paddingTop    : rhythm(4),
      paddingBottom : rhythm(1),
      paddingBottom : rhythm(1),

      [presets.Mobile]  : {
        paddingBottom : rhythm(2),
        height        : rhythm(40),
        paddingLeft   : vP
      },
      [presets.Phablet] : {
        paddingRight : 0,
      },
      [presets.Tablet]  : {
        paddingTop : rhythm(4)
      },
      [presets.Desktop] : {
        height     : rhythm(32),
        paddingTop : rhythm(5),
      },
      [presets.Hd]      : {
        paddingTop    : rhythm(5),
        paddingLeft   : vPHd,
        paddingBottom : rhythm(3),
      },
      [presets.VHd]     : {
        paddingTop : rhythm(6),
        paddingLeft : vPVHd,
      },
      [presets.VVHd]    : {
        paddingLeft : vPVVHd,
      },
    }}
  >
    <div css={{
      display           : 'inline-block',
      verticalAlign     : 'top',
      [presets.Desktop] : {
        width : '42%'
      }
    }}>
      <h1
        css={{
          ...scale(0.7),
          color                       : '#FFF',
          lineHeight                  : 1,
          marginTop                   : '25px',
          marginBottom                : `1.2em`,
          [presets.Mobile]            : {
            width       : '90%'
          },
          "@media (min-width: 650px)" : {
            fontSize    : scale(1).fontSize
          },
          [presets.Tablet]            : {
            fontSize : scale(1.1).fontSize
          },
          [presets.Hd]                : {
            fontSize : scale(1.4).fontSize
          },
          [presets.VHd]               : {
            fontSize : scale(1.5).fontSize
          },
          [presets.VVHd]              : {
            fontSize : scale(1.6).fontSize
          },
          [presets.Desktop]           : {
            fontSize : scale(1.3).fontSize
          }
        }}
      >
        Serverless, auto-scalable api & web apps
      </h1>
      <FuturaParagraph
        overrideCSS={{
          color             : presets.brandLighter,
          [presets.Mobile]  : {
            width       : '90%'
          }
        }}
      >
        Build muscle apps powered by event-driven functions like AWS Lambda, Azure Functions,
        GoogleCloud Functions and more .
      </FuturaParagraph>

      <div>
        <CtaButton to="/docs/" overrideCSS={{
          margin : '50px 0px 0px 0px',
          color  : '#fff !important',
          border : '1px solid #fff !important'
        }}>
          <span css={{ verticalAlign : `middle` }}>Get Started</span>
          {` `}
          <ArrowForwardIcon
            css={{ verticalAlign : `baseline`, marginLeft : `.2em` }}
          />
        </CtaButton>
        <CtaButton to="/token-sale/" overrideCSS={{
          margin : '50px 0px 0px 50px',
          color  : '#fff !important',          
          border : '1px solid #fff !important'
        }}>
          <span css={{ verticalAlign : `middle` }}>Token Sale</span>
          {` `}
          <ArrowForwardIcon
            css={{ verticalAlign : `baseline`, marginLeft : `.2em` }}
          />
        </CtaButton>
      </div>
      <div css={{
        marginLeft        : 0,
        marginTop         : rhythm(5)
      }}>
        <CloudWithLogo icon={AwsLogo} height="45px">Amazon Web Services</CloudWithLogo>
        <CloudWithLogo icon={MicrosoftAzureLogo}>Microsoft Azure</CloudWithLogo>
        <CloudWithLogo icon={GoogleCloudLogo}>Google Cloud</CloudWithLogo>
        <CloudWithLogo icon={IbmOpenwhiskLogo}>IBM Openwhisk</CloudWithLogo>
      </div>
    </div>
    <Terminal
      overrideCSS={{
        verticalAlign     : 'top',
        [presets.Mobile]  : {
          width  : '90%',
          height : rhythm(14.5)
        },
        [presets.Phablet] : {
          height : rhythm(12.5)
        },
        [presets.Tablet]  : {
          width: '90%',
          margin : '15px auto',
          paddingRight : `${vP}`,
        },
        [presets.Desktop] : {
          height : rhythm(12),
          float  : 'right',
          margin : `${rhythm(1.5)} ${rhythm(1)} ${rhythm(0)} ${rhythm(2)}`,
          width  : rhythm(19.5)
        }
      }}
      commands={[
        {
          type : 'comment',
          text : 'Install Squeezer globally',
        },
        {
          type : 'command',
          text : 'npm i squeezer-cli -g'
        },
        {
          type : 'comment',
          text : 'Create a project',
        },
        {
          type : 'command',
          text : 'sqz create --template api-nodejs'
        },
        {
          type : 'comment',
          text : 'Switch to the project\'s directory',
        },
        {
          type : 'command',
          text : 'cd my-first-project'
        },
        {
          type : 'comment',
          text : 'Install packages',
        },
        {
          type : 'command',
          text : 'sqz install'
        },
        {
          type : 'comment',
          text : 'Compile functions',
        },
        {
          type : 'command',
          text : 'sqz compile --cloud --stage dev'
        },
        {
          type : 'comment',
          text : 'Deploy functions',
        },
        {
          type : 'command',
          text : 'sqz deploy'
        },
        {
          type : 'comment',
          text : 'https://your-app-id.execute-api.com/dev',
        }
      ]}
    >
    </Terminal>
  </div>
)

const Masthead = () => <MastheadContent />

export default Masthead
