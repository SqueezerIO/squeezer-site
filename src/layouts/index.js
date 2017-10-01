import React from "react"
import Helmet from "react-helmet"

import Navigation from "../components/navigation"
import MobileNavigation from "../components/navigation-mobile"
import SidebarBody from "../components/sidebar-body"
import docsSidebar from "../../content/docs/doc-links.yaml"
import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import colors from "../utils/colors"
import createReactClass from "create-react-class"

import "../css/prism-coy.css"

// Import Futura PT typeface
import "../fonts/Webfonts/futurapt_book_macroman/stylesheet.css"
import "../fonts/Webfonts/futurapt_bookitalic_macroman/stylesheet.css"
import "../fonts/Webfonts/futurapt_demi_macroman/stylesheet.css"
import "../fonts/Webfonts/futurapt_demiitalic_macroman/stylesheet.css"

// Other fonts
import "typeface-spectral"
import "typeface-space-mono"

module.exports = createReactClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    const isHomepage = this.props.location.pathname == `/`
    const hasSidebar =
      this.props.location.pathname.slice(0, 6) === `/docs/` ||
      this.props.location.pathname.slice(0, 10) === `/packages/` ||
      this.props.location.pathname.slice(0, 10) === `/enterprise/`
    const sidebarStyles = {
      borderRight: `1px solid ${colors.b[0]}`,
      backgroundColor: presets.sidebar,
      float: `left`,
      width: rhythm(10),
      display: `none`,
      position: `fixed`,
      overflowY: `auto`,
      height: `calc(100vh - ${presets.headerHeight})`,
      WebkitOverflowScrolling: `touch`,
      "::-webkit-scrollbar": {
        width: `6px`,
        height: `6px`,
      },
      "::-webkit-scrollbar-thumb": {
        background: presets.lightBlue,
      },
      "::-webkit-scrollbar-track": {
        background: presets.brandLighter,
      },
    }

    return (
      <div>
        <Helmet defaultTitle={`Squeezer Framework`} titleTemplate={`%s | Squeezer Framework`}>
          <meta name="twitter:site" content="@squeezerio" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Squeezer.IO" />
        </Helmet>
        <Navigation pathname={this.props.location.pathname} />
        <div
          className={hasSidebar ? `main-body has-sidebar` : `main-body`}
          css={{
            paddingTop: 0,
            [presets.Tablet]: {
              margin: `0 auto`,
              paddingTop: isHomepage ? 0 : presets.headerHeight,
            },
          }}
        >
          {/* TODO Move this under docs/index.js once Gatsby supports multiple levels
               of layouts */}
          <div
            css={{
              ...sidebarStyles,
              [presets.Tablet]: {
                display:
                  this.props.location.pathname.slice(0, 6) === `/docs/` ||
                  this.props.location.pathname.slice(0, 10) === `/packages/`
                    ? `block`
                    : `none`,
              },
            }}
          >
            <SidebarBody yaml={docsSidebar} />
          </div>
          {/* TODO Move this under docs/tutorial/index.js once Gatsby supports multiple levels
               of layouts */}
          <div
            css={{
              ...sidebarStyles,
              [presets.Tablet]: {
                display:
                  this.props.location.pathname.slice(0, 10) === `/enterprise/`
                    ? `block`
                    : `none`,
              },
            }}
          >
            {/*<SidebarBody yaml={tutorialSidebar} />*/}
          </div>
          <div
            css={{
              [presets.Tablet]: {
                paddingLeft: hasSidebar ? rhythm(10) : 0,
              },
            }}
          >
            {this.props.children()}
          </div>
        </div>
        <MobileNavigation />
      </div>
    )
  },
})
