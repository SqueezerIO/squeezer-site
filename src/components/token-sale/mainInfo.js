import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import PlayIcon from "../../assets/token-sale/play-video.png"
import FuturaParagraph from "../futura-paragraph"
import YouTube from "react-youtube"

export default () => (
  <div css={{
    width: '100%',
    margin: '0 auto',
    textAlign: 'center',
    padding: '150px 0px',
    [presets.Desktop]: {
      width: '820px',
    },
  }}>
    <h1
      css={{
        ...scale(0.7),
        textAlign: 'center',
        lineHeight: 1.2,
        marginTop: '25px',
        marginBottom: `2.2em`,
        width: '100% !important',
        "@media (min-width: 650px)": {
          fontSize: scale(1).fontSize
        },
        [presets.Tablet]: {
          fontSize: scale(0.9).fontSize
        },
        [presets.Hd]: {
          fontSize: scale(1.2).fontSize
        },
        [presets.VHd]: {
          fontSize: scale(1.3).fontSize
        },
        [presets.VVHd]: {
          fontSize: scale(1.4).fontSize
        },
        [presets.Desktop]: {
          fontSize: scale(1.3).fontSize
        }
      }}
    >
      REVOLUTIONIZING APPS DEVELOPMENT WITH BLOCKCHAIN
      </h1>
    <FuturaParagraph
      overrideCSS={{
        fontSize: scale(0.6).fontSize,
        textAlign: 'left',
        [presets.Mobile]: {
          textAlign: 'center'          
        },
        [presets.Desktop]: {
          textAlign: 'left'          
        },
        lineHeight: 1.4
      }}
    >
      The world's first software development platform that's blockchain oriented.
      <br/>
      <br/>
      <b>Squeezer</b> is a platform that helps software developers to build apps easily without 
      tackling the entire blockchain infrastructure . It is also a powerful tool to provide
      high quality blockchain software components to the large enterprise organizations
      <br />
      <br />
    </FuturaParagraph>
    <YouTube
      className=" "
      css={{
        [presets.Mobile]: {
          width: '100%',
          height: '240px'
        },
        [presets.Tablet]: {
          width: '100%',
          height: '400px'
        },
        [presets.Desktop]: {
          height: '459',
          width: '816',
        }
      }}
      videoId="egtTeDTV-FM"
      suggestedQuality="large"
      opts={{
        height: '100%',
        width: 'auto',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          // autoplay: 1
          fs: 0,
          controls: 0,
          showinfo: false
        }
      }}
    />
    <YouTube
      className=" "
      css={{
        [presets.Mobile]: {
          width: '100%',
          height: '240px'
        },
        [presets.Tablet]: {
          width: '100%',
          height: '400px'
        },
        [presets.Desktop]: {
          height: '459',
          width: '816',
        }
      }}
      videoId="VPbS_lyrF9Q"
      suggestedQuality="large"
      opts={{
        height: '100%',
        width: 'auto',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          // autoplay: 1
          fs: 0,
          controls: 0,
          showinfo: false
        }
      }}
    />
  </div>
)