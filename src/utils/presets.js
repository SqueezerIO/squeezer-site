// import colors from "./colors"

module.exports = {
  mobile: `(max-width: 320px)`,
  Mobile: `@media (max-width: 320px)`,
  phablet: `(max-width: 550px)`,
  Phablet: `@media (max-width: 550px)`,
  tablet: `(max-width: 750px)`,
  Tablet: `@media (max-width: 750px)`,
  desktop: `(max-width: 1000px)`,
  Desktop: `@media (max-width: 1000px)`,
  hd: `(max-width: 1200px)`,
  Hd: `@media (max-width: 1200px)`,
  VHd: `@media (max-width: 1450px)`,
  VVHd: `@media (max-width: 1650px)`,
  maxWidth: 35,
  maxWidthWithSidebar: 26,
  lightBlue: `#86c3f9`,
  darkBlue: `#062f4f`,
  veryLightBlue: `#cfe7fc`,
  sidebar: `#fbfafc`,
  calm: `rgba(38, 32, 44, .5)`,
  // palette by @SachaG
  // @see https://www.figma.com/file/J6IYJEtdRmwJQOrcZ2DfvxDD/Gatsby
  brand: `#1C90F3`,
  brandLight: `#3d9ff5`,
  brandLighter: `#eff3f6`,
  // bolder palette by @ArchieHicklin
  // @see https://github.com/gatsbyjs/gatsby/issues/1173#issuecomment-309415650
  accent: `#12d47d`, // "Mustard"
  warning: `#f3554a`,
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
  headerHeight: `60px`,
}
