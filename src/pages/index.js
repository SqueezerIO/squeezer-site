import React from "react"
import createReactClass from "create-react-class"

const IndexRoute = createReactClass({
  render() {
    if (typeof window !== "undefined") {

      if (window.location.pathname === "/token-sale/") {
        window.location = window.location.href.replace("squeezer.io/token-sale", "tokensale.squeezer.io")
      } else if (!(/bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i
        .test(navigator.userAgent))) {
        window.location = "https://tokensale.squeezer.io"
      }
    }

    return <div />
  }
})

export default IndexRoute
