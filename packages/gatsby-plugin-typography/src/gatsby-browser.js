import typography from "gatsby-plugin-typography/.cache/typography.js"

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}
