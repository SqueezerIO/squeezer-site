import React from "react"
import { Link } from "gatsby"

import LanguageSwitcher from "../components/languageSwitcher"

import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"

import { I18nextProvider } from 'react-i18next'
import i18n from "../utils/i18n"

class Layout extends React.Component {
  componentDidMount() {
    // Create references to html/body elements
    // this.htmlElement = document.querySelector(`html`)
    // this.bodyElement = document.querySelector(`body`)
    // // Cache the window width.
    // windowWidth = window.innerWidth
  }
  componentWillReceiveProps(nextProps) {
    // if we're changing to a non-homepage page, put things in
    // a modal (unless we're on mobile).
    // if (windowWidth > 750) {
    // // Freeze the background from scrolling.
    // this.htmlElement.style.overflow = `hidden`
    // this.bodyElement.style.overflow = `hidden`
    // // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    // // weird jumping.
    // this.htmlElement.style.overflowY = `scroll`
    // } else {
    // // Otherwise we're navigating back home so delete old home so the
    // // modal can be destroyed.
    // delete this.modalBackgroundChildren
    // this.htmlElement.style.overflow = `visible`
    // this.bodyElement.style.overflow = `visible`
    // // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    // // weird jumping.
    // this.htmlElement.style.overflowY = `scroll`
    // }
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <div
          css={{
            background: `rgba(0,0,0,0.03)`,
            minHeight: `100vh`,
          }}
        >
          <div
            css={{
              background: `white`,
              borderBottom: `1px solid rgba(0,0,0,0.08)`,
            }}
          >
            <div
              css={{
                padding: rhythm(3 / 4),
                paddingBottom: `calc(${rhythm(3 / 4)} - 1px)`,
                maxWidth: 960,
                margin: `0 auto`,
                overflow: `hidden`,
              }}
            >
              <Link
                to="/"
                css={{
                  display: `inline-block`,
                  float: `left`,
                  textDecoration: `none`,
                }}
              >
                <h1
                  data-testid="site-title"
                  css={{
                    ...scale(4 / 5),
                    lineHeight: 1,
                    margin: 0,
                    overflow: `hidden`,
                  }}
                >
                  <span
                    css={{
                      paddingLeft: `calc(${rhythm(1)} - 1px)`,
                      borderLeft: `1px solid rgba(0,0,0,0.3)`,
                      lineHeight: 1,
                      marginLeft: rhythm(1),
                    }}
                  >
                    Squeezer Platform
                </span>
                </h1>
              </Link>
              <LanguageSwitcher />
            </div>
          </div>
          <div
            css={{
              maxWidth: 960,
              margin: `0 auto`,
              [presets.Tablet]: {
                padding: rhythm(3 / 4),
              },
            }}
          >
            {this.props.children}
          </div>
        </div>
      </I18nextProvider>
    )
  }
}

export default Layout