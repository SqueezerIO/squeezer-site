import CountUp from 'react-countup';
import { rhythm, scale } from "../utils/typography"
import TrackVisibility from 'react-on-screen';
import NpmIcon from "../assets/npm.png"

const DownloadsCounter = ({ isVisible }) => {
  return (
    <div >
      &gt; <CountUp duration={1.5} start={0} end={75000} redraw={true} /> monthly downloads
      <div css={{ cursor: 'pointer', marginTop : rhythm(3) }} onClick={() => window.open("https://www.npmjs.com/package/squeezer-cli", "_blank")}>
        <img css={{ width: '180px' }} src={NpmIcon} alt="play video" />
      </div>
    </div>
  );
}

export default () => {
  return (
    <TrackVisibility className="visible" css={{
      marginTop: `${rhythm(8)}`,
      marginBottom: `${rhythm(8)}`,
      width: '100%',
      textAlign: 'center',
      lineHeight: 1,      
      fontSize: scale(1.6).fontSize,
    }} offset={200}>
      <DownloadsCounter />
    </TrackVisibility>
  );
}