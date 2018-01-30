import CountUp from 'react-countup';
import { rhythm, scale } from "../../utils/typography"
import TrackVisibility from 'react-on-screen';
import NpmIcon from "../../assets/npm.png"
import DeveloperIcon from "../../assets/developer.png"
import ExchangerIcon from "../../assets/exchanger.png"
import { vP, vPHd, vPVHd, vPVVHd } from "../../components/gutters"
import presets from "../../utils/presets"
import Terminal from "../../components/terminal"

const DownloadsCounter = ({ isVisible }) => {
  return (
    <div >
      &gt; <CountUp duration={1.5} start={0} end={75000} redraw={true} /> monthly downloads
      <div css={{ cursor: 'pointer', marginTop: rhythm(3) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
        <img css={{ width: '180px' }} src={NpmIcon} alt="play video" />
      </div>
    </div>
  );
}

export default () => {
  return (
    <div css={{
      borderTop: `1px solid ${presets.veryLightBlue}`
    }}>
      <div className="visible" css={{
        marginTop: `${rhythm(8)}`,
        marginBottom: `${rhythm(8)}`,
        width: '50%',
        fontWeight: 'bold',
        color: '#3385ff',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 1,
        fontSize: scale(0.6).fontSize,
        [presets.Mobile]: {
          width: '100%'
        },
        [presets.Tablet]: {
          width: '50%'
        }
      }} offset={300}>
        <div css={{ display: 'block', margin: '25px', verticalAlign: 'middle' }}>
          + 75000 monthly downloads
        <div css={{ cursor: 'pointer', marginTop: rhythm(1) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
            <img css={{ width: '140px' }} src={NpmIcon} alt="play video" />
          </div>
        </div>
        <div css={{ display: 'block', margin: '25px', verticalAlign: 'middle' }}>
          + 40 mil targeted developers
        <div css={{ cursor: 'pointer', marginTop: rhythm(1) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
            <img css={{ width: '140px' }} src={DeveloperIcon} alt="play video" />
          </div>
        </div>
        <div css={{ display: 'block', margin: '25px', verticalAlign: 'middle' }}>
          + 7000 exchanges
        <div css={{ cursor: 'pointer', marginTop: rhythm(1) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>

            <img css={{ width: '140px' }} src={ExchangerIcon} alt="play video" />
          </div>
        </div>
      </div>
      <div className="visible" css={{
        marginTop: `${rhythm(8)}`,
        marginBottom: `${rhythm(8)}`,
        [presets.Mobile]: {
          width: '100%'
        },
        [presets.Tablet]: {
          width: '50%'
        },
        color: '#3385ff',
        display: 'inline-block',
      }}>
        <Terminal
          overrideCSS={{
            verticalAlign: 'top',
            lineHeight: 1.8,
            [presets.Mobile]: {
              width: '100%',
              height: rhythm(14.5)
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
              float: 'left',
              margin: `${rhythm(1.5)} ${rhythm(1)} ${rhythm(0)} ${rhythm(2)}`,
              width: rhythm(19.5)
            }
          }}
          commands={[
            {
              type: 'comment',
              text: 'Install Squeezer globally',
            },
            {
              type: 'command',
              text: 'npm i squeezer-cli -g'
            },
            {
              type: 'comment',
              text: 'Create a project',
            },
            {
              type: 'command',
              text: 'sqz create --template api-nodejs'
            },
            {
              type: 'comment',
              text: 'Switch to the project\'s directory',
            },
            {
              type: 'command',
              text: 'cd my-first-project'
            },
            {
              type: 'comment',
              text: 'Install packages',
            },
            {
              type: 'command',
              text: 'sqz install'
            },
            {
              type: 'comment',
              text: 'Compile functions',
            },
            {
              type: 'command',
              text: 'sqz compile --cloud --stage dev'
            },
            {
              type: 'comment',
              text: 'Deploy functions',
            },
            {
              type: 'command',
              text: 'sqz deploy'
            },
            {
              type: 'comment',
              text: 'https://your-app-id.execute-api.com/dev',
            }
          ]}
        />
      </div>
    </div>
  );
}