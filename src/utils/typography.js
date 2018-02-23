import Typography from "typography"
import CodePlugin from "typography-plugin-code"
import presets from "./presets"
import colors from "./colors"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  MIN_DEFAULT_MEDIA_QUERY,
  MIN_LARGER_DISPLAY_MEDIA_QUERY,
} from "typography-breakpoint-constants"

const options = {
  headerFontFamily: [
    `Futura PT`,
    `-apple-system`,
    `BlinkMacSystemFont`,
    `Segoe UI`,
    `Roboto`,
    `Oxygen`,
    `Ubuntu`,
    `Cantarell`,
    `Fira Sans`,
    `Droid Sans`,
    `Helvetica Neue`,
    `Arial`,
    `sans-serif`,
  ],
  bodyFontFamily: [`Futura PT`, `Spectral`, `Georgia`, `Times New Roman`, `Times`, `serif`],
  monospaceFontFamily: [
    `Space Mono`,
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `Liberation Mono`,
    `Courier New`,
    `monospace`,
  ],
  baseFontSize: `17px`,
  baseLineHeight: 1.4,
  headerLineHeight: 1.075,
  headerColor: `#042949`,
  bodyColor: `#085191`,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      "input:focus, input:active, input:focus" : {
        outline: 0
      },
      "h1,h2,h4,h5,h6": {
        marginTop: rhythm(options.blockMarginBottom * 2),
        marginBottom: rhythm(options.blockMarginBottom),
        letterSpacing: `-0.0075em`,
      },
      "ul, ol": {
        marginTop: rhythm(options.blockMarginBottom),
      },
      h1: {
        ...scale(4 / 5),
      },
      h3: {
        ...scale(2 / 5),
        lineHeight: 1,
        marginTop: rhythm(options.blockMarginBottom),
        marginBottom: rhythm(options.blockMarginBottom / 2),
      },
      h4: {
        ...scale(1 / 5),
      },
      h5: {
        ...scale(0),
      },
      blockquote: {
        paddingLeft: rhythm(options.blockMarginBottom),
        marginLeft: 0,
        borderLeft: `${rhythm(
          options.blockMarginBottom / 4
        )} solid ${presets.brandLighter}`,
      },
      "tt,code": {
        // background: `hsla(23, 60%, 97%, 1)`,
        background: colors.a[0],
        fontFamily: options.monospaceFontFamily.join(`,`),
        fontSize: `80%`,
        // Disable ligatures as they look funny w/ Space Mono as code.
        fontVariant: `none`,
        WebkitFontFeatureSettings: `"clig" 0, "calt" 0`,
        fontFeatureSettings: `"clig" 0, "calt" 0`,
        paddingTop: `0.1em`,
        paddingBottom: `0.1em`,
      },
      ".gatsby-highlight": {
        //background: colors.a[0],
        backgroundColor: '#f6f8fa',
        //boxShadow: `inset 0 0 0 1px ${colors.a[1]}`,
        boxShadow: `inset 0 0 0 1px #cfe7fc`,
        borderRadius: `${presets.radius}px`,
        padding: rhythm(options.blockMarginBottom),
        marginBottom: rhythm(options.blockMarginBottom),
        overflow: `auto`,
        WebkitOverflowScrolling: `touch`,
        position: `relative`,
      },
      ".gatsby-highlight pre[class*='language-']": {
        padding: 0,
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: `transparent`,
        border: 0,
        float: `left`,
        minWidth: `100%`,
        overflow: `initial`,
      },
      ".gatsby-highlight pre code": {
        display: `block`,
        fontSize: `95%`,
        lineHeight: options.baseLineHeight,
        backgroundColor: '#f6f8fa'
      },
      ".gatsby-highlight-code-line": {
        //background: colors.a[1],
        background: `#cfe7fc`,
        marginRight: `${rhythm(-options.blockMarginBottom)}`,
        marginLeft: `${rhythm(-options.blockMarginBottom)}`,
        paddingRight: rhythm(options.blockMarginBottom),
        paddingLeft: `${rhythm(options.blockMarginBottom / 5 * 4)}`,
        borderLeft: `${rhythm(options.blockMarginBottom / 5 * 1)} solid ${colors
          .a[3]}`,
        display: `block`,
      },
      ".gatsby-highlight::-webkit-scrollbar": {
        width: `6px`,
        height: `6px`,
      },
      ".gatsby-highlight::-webkit-scrollbar-thumb": {
        background: colors.a[2],
      },
      ".gatsby-highlight::-webkit-scrollbar-track": {
        //background: colors.a[1],
        background: `#cfe7fc`,
        borderRadius: `0 0 ${presets.radiusLg}px ${presets.radiusLg}px`,
      },
      // Target image captions. This is kind of a fragile selector...
      ".gatsby-resp-image-link + em": {
        ...scale(-1 / 5),
        lineHeight: 1.3,
        paddingTop: rhythm(3 / 8),
        marginBottom: rhythm(options.blockMarginBottom * 2),
        display: `block`,
        textAlign: `center`,
        fontStyle: `normal`,
        color: presets.calm,
        position: `relative`,
      },
      ".gatsby-resp-image-link + em a": {
        fontWeight: `normal`,
        fontFamily: options.headerFontFamily.join(`,`),
        color: presets.brand,
      },
      ".main-body a": {
        color: `inherit`,
        textDecoration: `none`,
        transition: `all ${presets.animation.speedFast} ${presets.animation
          .curveDefault}`,
        borderBottom: `1px solid ${presets.lightBlue}`,
        boxShadow: `inset 0 -2px 0px 0px ${presets.lightBlue}`,
        fontWeight: `bold`,
      },
      ".post-body a": {
        fontSize: `102%`,
      },
      ".main-body a:hover": {
        background: presets.lightBlue,
      },
      ".main-body a.anchor": {
        color: `inherit`,
        fill: presets.brand,
        textDecoration: `none`,
        borderBottom: `none`,
        boxShadow: `none`,
      },
      ".main-body a.anchor:hover": {
        background: `none`,
      },
      ".main-body a.gatsby-resp-image-link": {
        boxShadow: `none`,
        borderBottom: `transparent`,
        marginTop: rhythm(options.blockMarginBottom * 2),
      },
      ".main-body a.gatsby-resp-image-link:hover": {
        background: `none`,
        boxShadow: `none`,
      },
      ".gatsby-highlight, .post .gatsby-resp-iframe-wrapper, .post .gatsby-resp-image-link": {
        marginLeft: rhythm(-options.blockMarginBottom),
        marginRight: rhythm(-options.blockMarginBottom),
      },
      ".gatsby-resp-image-link": {
        borderRadius: `${presets.radius}px`,
        overflow: `hidden`,
      },
      "@media (max-width:634px)": {
        ".gatsby-highlight, .gatsby-resp-image-link": {
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
        },
        ".gatsby-highlight": {
          //boxShadow: `inset 0 1px 0 0 ${colors.a[1]}, inset 0 -1px 0 0 ${colors.a[1]}`,
          boxShadow: `inset 0 1px 0 0 #cfe7fc, inset 0 -1px 0 0 #cfe7fc`,
        },
      },
      [`${presets.Tablet} and (max-width:980px)`]: {
        ".has-sidebar .gatsby-highlight": {
          marginLeft: 0,
          marginRight: 0,
        },
      },
      video: {
        width: `100%`,
        marginBottom: rhythm(options.blockMarginBottom),
      },
      ".twitter-tweet-rendered": {
        margin: `${rhythm(options.blockMarginBottom * 2)} auto !important`,
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${16 / 16 * 100}%`,
        },
      },
      [TABLET_MEDIA_QUERY]: {
        html: {
          fontSize: `${17 / 16 * 100}%`,
        },
      },
      [MIN_DEFAULT_MEDIA_QUERY]: {
        ".gatsby-highlight, .post .gatsby-resp-iframe-wrapper, .post .gatsby-resp-image-link": {
          marginLeft: 0,
          marginRight: 0,
        },
        ".gatsby-highlight": {
          padding: rhythm(options.blockMarginBottom * 1.5),
          marginBottom: rhythm(options.blockMarginBottom * 1.5),
        },
        ".gatsby-highlight-code-line": {
          marginRight: `${rhythm(-options.blockMarginBottom * 1.5)}`,
          marginLeft: `${rhythm(-options.blockMarginBottom * 1.5)}`,
          paddingRight: rhythm(options.blockMarginBottom * 1.5),
          paddingLeft: `${rhythm(options.blockMarginBottom * 1.5 / 5 * 4)}`,
          borderLeftWidth: `${rhythm(options.blockMarginBottom * 1.5 / 5 * 1)}`,
        },
      },
      [MIN_LARGER_DISPLAY_MEDIA_QUERY]: {
        html: {
          fontSize: `${21 / 16 * 100}%`,
        },
      },
      ".token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata": {
        // color: `#52ad9f`,
        //color: colors.c[8],
        color: '#b3b3b3'
      },
      ".token.punctuation": {
        // color: `#5F6364`,
        // color: `blue`,
        color: colors.c[12],
      },
      ".token.property,.token.tag,.token.attr-name,.token.function-name,.token.constant,.token.symbol,.token.deleted": {
        // color: `#a285d8`,
        color: colors.b[9],
      },
      ".token.boolean,.token.number": {
        // color: `#a285d8`,
        color: '#e96900',
      },
      ".token.selector,.token.string,.token.char,.token.function,.token.builtin,.token.inserted,.token.attr-value": {
        // color: `#a2466c`,
        // color: colors.a[9],
        color : colors.b[8]
      },
      ".token.operator, .token.entity, .token.url, .token.variable": {
        // color: `#c18b99`,
        // color: `blue`,
      },
      ".token.atrule, .token.keyword, .token.class-name": {
        // color: `#a285d8`,
        // color: `blue`,
        color: '#0b7ada',
      },
      // Fancy external links in posts, borrowed from
      // https://github.com/comfusion/after-dark/
      // @see https://github.com/comfusion/after-dark/blob/8fdbe2f480ac40315cf0e01cece785d2b5c4b0c3/layouts/partials/critical-theme.css#L36-L39
      ".gatsby-resp-image-link + em a[href*='//']:after": {
        content: `" " url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20class='i-external'%20viewBox='0%200%2032%2032'%20width='14'%20height='14'%20fill='none'%20stroke='%23744C9E'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='9.38%'%3E%3Cpath%20d='M14%209%20L3%209%203%2029%2023%2029%2023%2018%20M18%204%20L28%204%2028%2014%20M28%204%20L14%2018'/%3E%3C/svg%3E")`,
      },
    }
  },
}

const typography = new Typography(options)

export default typography
