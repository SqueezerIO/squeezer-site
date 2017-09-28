import React from "react"
import Link from "gatsby-link"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"
import FacebookIcon from "react-icons/lib/fa/facebook"
import logo from "../logo-negative.png"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"

const navItemStyles = {
  ...scale(-1 / 3),
  boxSizing: `border-box`,
  display: `inline-block`,
  color: '#fff',
  textDecoration: `none`,
  letterSpacing: `0.03em`,
  lineHeight: `calc(${presets.headerHeight} - 4px)`,
  padding: `0px ${rhythm(0.5)} 0`,
  position: `relative`,
  top: 0,
  transition: `color .15s ease-out`,
  "&:hover": {
    opacity: 0.8,
  },
}
const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: `inline-block`,
      margin: '0px 5px 0px 5px'
    }}
  >
    <Link to={linkTo} css={navItemStyles}>
      {children}
    </Link>
  </li>
)

export default ({ pathname }) => {
  const isHomepage = pathname == `/`
  const isBlog = pathname == `/blog/`
  let styles = {}
  if (isHomepage) {
    styles.backgroundColor = `rgba(255,255,255,0)`
    styles.borderBottomColor = `transparent`
    styles[presets.Tablet] = {
      position: isHomepage || isBlog ? `absolute` : `fixed`,
    }
  } else if (isBlog) {
    styles.backgroundColor = presets.accentDark
    styles[presets.Tablet] = {
      borderBottomColor: `transparent`,
      position: isHomepage || isBlog ? `absolute` : `fixed`,
    }
  }

  const socialIconsStyles = {
    color: presets.brandLighter,
    [presets.Phablet]: {
      color: presets.brandLighter,
    },
  }
  const gutters = isHomepage
    ? {
        paddingLeft: vP,
        paddingRight: vP,
        paddingTop: rhythm(1.5),
        [presets.Hd]: {
          paddingLeft: vPHd,
          paddingRight: vPHd,
        },
        [presets.VHd]: {
          paddingLeft: vPVHd,
          paddingRight: vPVHd,
        },
        [presets.VVHd]: {
          paddingLeft: vPVVHd,
          paddingRight: vPVVHd,
        },
      }
    : {}

  return (
    <div
      css={{
        // borderBottom: `1px solid ${presets.veryLightBlue}`,
        backgroundColor: presets.brand,
        position: isHomepage ? `absolute` : false,
        height: presets.headerHeight,
        zIndex: `1`,
        left: 0,
        right: 0,
        [presets.Tablet]: {
          position: isHomepage || isBlog ? `absolute` : `fixed`,
        },
        ...styles,
      }}
    >
      <div
        css={{
          //maxWidth: rhythm(presets.maxWidth),
          margin: `0 auto`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          ...gutters,
          transition: `padding .1s ease-out`,
          fontFamily: typography.options.headerFontFamily.join(`,`),
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <Link
          to="/"
          css={{
            color: `inherit`,
            display: `inline-block`,
            textDecoration: `none`,
            marginRight: rhythm(0.5),
          }}
        >
          <img
            src={logo}
            css={{
              display: `inline-block`,
              height: rhythm(1.2),
              width: 'auto',
              margin: 0,
              marginRight: rhythm(2 / 4),
              verticalAlign: `middle`,
            }}
          />
          <h1
            css={{
              ...scale(2 / 5),
              display: `inline-block`,
              margin: 0,
              verticalAlign: `middle`,
            }}
          >
          </h1>
        </Link>
        <ul
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `block`,
              margin: 0,
              padding: 0,
              listStyle: `none`,
            },
          }}
        >
          <NavItem linkTo="/docs/">Docs</NavItem>
          <NavItem linkTo="/community/">Community</NavItem>
          <NavItem linkTo="/blog/">Blog</NavItem>
          <NavItem linkTo="/enterprise/">Enterprise</NavItem>
        </ul>
        <div
          css={{
            marginLeft: isHomepage ? rhythm(1 / 2) : `auto`,
            [presets.Phablet]: {
              marginLeft: isHomepage ? `auto` : `auto`,
            },
          }}
        >
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
              ...socialIconsStyles,
              paddingRight: 0
            }}
          >
            <FacebookIcon style={{ verticalAlign: `text-top` }} />
          </a>
        </div>
      </div>
    </div>
  )
}
