import React from "react"
import logo from "../icon-positive.png"
import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"


const UlElement = ({ title, children }) => (
  <div css={{
    paddingTop : rhythm(1),
    display    : 'inline-block',
    [presets.Mobile]: {
      width : '50%',
    },
    [presets.Desktop]: {
      width : '16.5%'
    }
  }}>
    <h5 css={{
      margin : 0
    }}>{title}</h5>
    <ul css={{
      listStyle : 'none',
      margin    : 0,
      padding   : 0
    }}>
      {children}
    </ul>
  </div>
)

const LiElement = ({ children }) => (
  <li css={{
    float    : 'left',
    color    : presets.calm,
    fontSize : '15px'
  }}>
    {children}
  </li>
)

const HrefElement = ({ link, title }) => {
  return (
    <div>
      <a
        css={{
          textDecoration : 'none',
          borderBottom   : '0 !important'
        }}
        href={link}>
        {title}
      </a>
    </div>
  )
}

const Footer = () => (
  <div css={{
    fontFamily : 'sans-serif'
  }}>
    <div css={{
      background : presets.brandLighter,
      marginTop  : rhythm(5),
      minHeight  : rhythm(8),
      paddingLeft   : vPHd,
      paddingRight   : vPHd,
      // borderTop : `1px solid ${presets.brandLight}`,
      width      : '100%',
      [presets.Mobile]: {
        paddingBottom : rhythm(3)
      },
      [presets.Desktop]: {
        paddingBottom : 0
      }

    }}>
      <UlElement title="Resources">
        <LiElement>
          <HrefElement link="/blog" title="Blog"/>
          <HrefElement link="/docs" title="Docs"/>
          <HrefElement link="/enterprise" title="Enterprise"/>
        </LiElement>
      </UlElement>
      <UlElement title="Connect">
        <LiElement>
          <HrefElement link="https://twitter.com/SqueezerIO" title="Twitter"/>
          <HrefElement link="https://www.facebook.com/Squeezer.IO/" title="Facebook"/>
          <HrefElement link="http://chat.squeezer.io/" title="Chat"/>
          <HrefElement link="https://www.youtube.com/channel/UC4oipFLgQW7e98Gei-7NEIQ" title="Youtube"/>
        </LiElement>
      </UlElement>
      <UlElement title="Contribute">
        <LiElement>
          <HrefElement link="https://github.com/SqueezerIO/squeezer" title="Github"/>
          <HrefElement link="https://github.com/SqueezerIO/squeezer/issues" title="Issues"/>
        </LiElement>
      </UlElement>
      <img
        src={logo}
        alt="logo"
        css={{
          display: `inline-block`,
          height: rhythm(2),
          width: 'auto',
          marginTop: rhythm(1),
          marginRight: rhythm(2 / 4),
          verticalAlign: `middle`,
          float : 'right',
          [presets.Mobile]: {
            display : 'none',
          },
          [presets.Desktop]: {
            display : 'block'
          }
        }}
      />
    </div>
    <div css={{
      background    : presets.accentDark,
      // borderTop : `1px solid ${presets.brandLight}`,
      boxShadow     : '0 5px 5px rgba(25, 17, 34 , 0.1)',
      width         : '100%',
      display : 'block',
      verticalAlign : 'bottom',
      color         : presets.brandLighter,
      padding       : rhythm(0.5),
      fontSize      : '14px',
      paddingLeft   : vPHd,
      [presets.Mobile]: {
        display : 'none',
      },
      [presets.Desktop]: {
        display : 'block'
      }
    }}>
      &copy; { new Date().getFullYear()} Squeezer Framework
    </div>
  </div>
)

export default Footer

