import colors from "./colors"

module.exports = {
  mobile: `(min-width: 320px)`,
  Mobile: `@media (min-width: 320px)`,
  phablet: `(min-width: 550px)`,
  Phablet: `@media (min-width: 550px)`,
  tablet: `(min-width: 750px)`,
  Tablet: `@media (min-width: 750px)`,
  desktop: `(min-width: 1000px)`,
  Desktop: `@media (min-width: 1000px)`,
  hd: `(min-width: 1200px)`,
  Hd: `@media (min-width: 1200px)`,
  VHd: `@media (min-width: 1450px)`,
  VVHd: `@media (min-width: 1650px)`,
  maxWidth: 35,
  maxWidthWithSidebar: 26,
  lightBlue: `#86c3f9`,
  veryLightBlue: `#cfe7fc`,
  sidebar: `#fbfafc`,
  calm: `rgba(38, 32, 44, .5)`,
  // palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  brand: `#1C90F3`,
  brandLight: `#3d9ff5`,
  brandLighter: `#F5F3F7`,
  // bolder palette by @ArchieHicklin
  // @see https://github.com/gatsbyjs/gatsby/issues/1173#issuecomment-309415650
  accent: `#42B983`, // "Mustard"
  accentDark : `#111C30`,
  radius: 2,
  radiusLg: 4,
  gutters: {
    default: 1.25,
    HdR: 2.5,
    VHdR: 3,
    VVHdR: 4.5,
  },
  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    speedDefault: `250ms`,
    speedFast: `100ms`,
  },
  logoOffset: 1.7,
  headerHeight: `3.5rem`,
}
