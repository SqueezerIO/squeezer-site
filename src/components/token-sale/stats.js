import CountUp from 'react-countup';
import { rhythm, scale } from "../../utils/typography"
import TrackVisibility from 'react-on-screen';
import NpmIcon from "../../assets/npm.png"
import DeveloperIcon from "../../assets/developer.png"
import ExchangerIcon from "../../assets/exchanger.png"

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
    <div className="visible" css={{
      marginTop: `${rhythm(8)}`,
      marginBottom: `${rhythm(8)}`,
      width: '100%',
      fontWeight: 'bold',
      color: '#3385ff',
      textAlign: 'center',
      lineHeight: 1,
      fontSize: scale(1).fontSize,
    }} offset={300}>
      <div css={{ display: 'inline-block', margin: '25px', height: '300px', verticalAlign: 'middle' }}>
        + 75000 monthly downloads
        <div css={{ cursor: 'pointer', marginTop: rhythm(3) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
          <img css={{ width: '180px' }} src={NpmIcon} alt="play video" />
        </div>
      </div>
      <div css={{ display: 'inline-block', margin: '25px', height: '300px', verticalAlign: 'middle' }}>
        + 40 mil targeted developers
        <div css={{ cursor: 'pointer', marginTop: rhythm(3) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
          <img css={{ width: '180px' }} src={DeveloperIcon} alt="play video" />
        </div>
      </div>
      <div css={{ display: 'inline-block', margin: '25px', height: '300px', verticalAlign: 'middle' }}>
        + 7000 exchanges
        <div css={{ cursor: 'pointer', marginTop: rhythm(3) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>

          <img css={{ width: '180px' }} src={ExchangerIcon} alt="play video" />
        </div>
      </div>
    </div>
  );
}