import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"

class Affiliate extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const initLogin = () => {
      if (typeof OktaSignIn !== 'undefined') {
        this.widget = new OktaSignIn({
          baseUrl: 'https://dev-871948-admin.oktapreview.com',
          clientId: '0oadae8q6twwsEm7m0h7',
          redirectUri: 'http://localhost:8000',
          authParams: {
            responseType: 'id_token'
          },
          features: {
            selfServiceUnlock: true,
             registration: true
          }
        });

        this.widget.renderEl({ el: "#loginContainer" },
          (response) => {
            this.setState({ user: response.claims.email });
          },
          (err) => {
            console.log(err);
          });
      } else {
        setTimeout(() => {
          initLogin()
        }, 50)
      }
    }

    initLogin()
  }

  render() {
    return <div>
      <div id="loginContainer" />
    </div>;
  }
}

export default Affiliate