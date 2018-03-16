import React from "react"
import createReactClass from "create-react-class"

const IndexRoute = createReactClass({
  render() {
    if (typeof window !== "undefined") {
      if (!(/bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex/i
        .test(navigator.userAgent))) {
        window.location = "https://tokensale.squeezer.io"
      }
    }

    return <div />
  }
})

export default IndexRoute
