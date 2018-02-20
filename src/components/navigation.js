import React from "react"
import Link from "gatsby-link"
import logo from "../logo-negative.png"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"
import DocSearchInput from "../components/doc-search-input"
import Social from "../components/social"
import AccountIcon from "react-icons/lib/fa/user"
import { css } from "glamor"

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

const subnavStyle = css({
  backgroundColor: 'rgba(0, 153, 255, 0.7)',
  padding: '8px 25px',
  height: '40px',
  ' a': {
    color: '#FFF !important',
    textDecoration: 'none',
    marginRight: '25px'
  }
})

export default ({ pathname }) => {
  const isHomepage = pathname == `/`
  const isBlog = pathname == `/blog/`
  const isTokenSale = pathname == `/token-sale/`
  const isDocs = pathname.slice(0, 6) === `/docs/`
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

  const DocsSearch = ({ css }) => {
    return (
      <div css={{
        [presets.Mobile]: {
          display: 'none'
        },
        [presets.Desktop]: {
          display: isDocs ? 'block' : 'none'
        }
      }}>
        <DocSearchInput />
      </div>
    )
  }

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
        <DocsSearch />
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
          <NavItem linkTo="/token-sale/">Token Sale</NavItem>
          <NavItem linkTo="/framework/">Framework</NavItem>
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
          {/* <a
            href="/token-sale/account/"
            title="account"
            css={{
              ...navItemStyles,
              color: presets.brandLighter,
              [presets.Phablet]: {
                color: presets.brandLighter,
              }
            }}
          >
            <AccountIcon style={{ verticalAlign: `text-top`, display: 'inline-block' }} />
          </a> */}
          <Social />
        </div>
      </div>
      <div className={`${subnavStyle}`}
        css={{
          display: isTokenSale ? 'block' : 'none'
        }}
      >
        <div css={{
          [presets.Mobile]: {
            display: 'none'
          },
          [presets.Table]: {
            display: 'block'
          },
          [presets.Desktop]: {
            display: 'block'
          }
        }}>
          <a href="#tokenterms">Token terms</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
          <a href="#telegram">Telegram</a>
          <a href="#affiliate">Affiliate</a>
          <a href="#media">Media</a>
        </div>
        <div onClick={() => window.location.replace("/token-sale/account/")} css={{
          position: 'absolute',
          cursor: 'pointer',
          color: '#FFF',
          zIndex: 2,
          right: 0,
          top: '67px',
          right: '20px'
        }}>
          <AccountIcon css={{verticalAlign: 'middle'}}/>
          <span css={{marginLeft: '5px', verticalAlign: 'middle'}}>My account</span>
        </div>  
      </div>
    </div>
  )
}
