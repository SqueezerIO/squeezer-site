import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts"
import api from "../utils/api"
import { withNamespaces } from "react-i18next"

class HomePage extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)

    this.state = {
      message: null
    }
  }

  render() {
    const { t } = this.props

    api.get('/rest/v1/hello/test?name=james').then((res) => {
      this.setState({
        message: res.data.message
      })
    }).catch((error) => {
      console.log(error)
    });

    return (
      <Layout>
        <div
          css={{
            margin: `0 auto`,
            marginTop: `3rem`,
            padding: `1.5rem`,
            maxWidth: 800,
            color: `red`,
          }}
        >
          <h1>{t("welcomeMsg")}</h1>
          <h2>API response: {this.state.message}</h2>
          <Link to="/other-page/">Go exploring</Link>
        </div>
      </Layout>
    )
  }
}

export default withNamespaces("Home")(HomePage)
