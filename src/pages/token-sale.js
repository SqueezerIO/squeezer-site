import React from "react"
import createReactClass from "create-react-class"

const IndexRoute = createReactClass({
  render() {
    if (typeof window !== "undefined") {
      document.getElementsByTagName("BODY")[0].style.display = "none";
      window.location = window.location.href.replace(/.*\/token-sale/, "https://tokensale.squeezer.io")
    }

    return <div />
  }
})

export default IndexRoute
