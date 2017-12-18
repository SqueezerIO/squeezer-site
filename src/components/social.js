import React from "react"
import Link from "gatsby-link"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"
import FacebookIcon from "react-icons/lib/fa/facebook"
import InstagramIcon from "react-icons/lib/fa/instagram"
import TelegramIcon from "../assets/telegram.svg"
import logo from "../logo-negative.png"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"
import DocSearchInput from "../components/doc-search-input"
import { navItemStyles } from "./styles/navStyles"

const socialIconsStyles = {
  color: presets.brandLighter,
  [presets.Phablet]: {
    color: presets.brandLighter,
  },
}

export default ({ }) => {
  return (
    <div>
      <a
        href="https://github.com/SqueezerIO/squeezer"
        title="Github"
        css={{
          ...navItemStyles,
          ...socialIconsStyles,
        }}
      >
        <GithubIcon style={{ verticalAlign: `text-top` }} />
      </a>
      <a
        href="https://twitter.com/SqueezerIO"
        title="@squeezerio"
        css={{
          ...navItemStyles,
          ...socialIconsStyles,
        }}
      >
        <TwitterIcon style={{ verticalAlign: `text-top` }} />
      </a>
      <a
        href="https://www.facebook.com/Squeezer.IO"
        title="Facebook"
        css={{
          ...navItemStyles,
          ...socialIconsStyles
        }}
      >
        <FacebookIcon style={{ verticalAlign: `text-top` }} />
      </a>
      <a
        href="https://www.instagram.com/squeezer.io"
        title="Instagram"
        css={{
          ...navItemStyles,
          ...socialIconsStyles
        }}
      >
        <InstagramIcon style={{ verticalAlign: `text-top` }} />
      </a>
      <a
        href="https://telegram.me/squeezerio"
        title="Telegram"
        css={{
          ...navItemStyles,
          ...socialIconsStyles,
          paddingRight: 0
        }}
      ><img src={TelegramIcon} style={{ verticalAlign: `text-top`, height: '15px', width: 'auto' }} />
      </a>
    </div>
  )
}