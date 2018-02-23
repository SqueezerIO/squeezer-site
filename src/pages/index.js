import React from "react"
import createReactClass from "create-react-class"

const IndexRoute = createReactClass({
  render() {
    if (typeof window !== "undefined") {
      window.location = "/token-sale/"
    }

    return <div/>
  }
})

export default IndexRoute
