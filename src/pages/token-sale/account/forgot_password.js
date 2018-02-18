import React from "react"
import { rhythm, scale, options } from "../../../utils/typography"
import presets from "../../../utils/presets"
import { apiLoginUser, apiForgotPassword } from "../../../utils/api"
import Input from "../../../components/input"
import Button from "../../../components/button"
import Footer from "../../../components/footer"
import { validateEmail } from "../../../utils/validate"

class Login extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      form: {
        email: '',
        password: ''
      }
    }
  }

  handleChange(event) {
    this.state.form[event.target.name] = event.target.value;
    this.setState({ form: this.state.form });
  }

  onFormSubmit(event) {
    event.preventDefault()

    const email = this.state.form.email;

    if (!email || !validateEmail(email)) {
      this.setState({ message: "Invalid email address", status: null })
    } else {

      this.setState({ status: 'sending' })

      const resetObj = {
        email: email,
        base_url: window.location.origin
      }

      apiForgotPassword(resetObj).then((res) => {
        console.log(res)
        if (res.message === "success") {
          this.setState({ message: "Reset link successfully sent !" })
        }
      }).catch((error) => {
        this.setState({ message: error.message })
      });
    }
  }

  render() {
    return (
      <div>
        <div css={{
          width: '300px',
          padding: '75px 0px',
          margin: '0 auto'
        }}>
          <form onSubmit={this.onFormSubmit.bind(this)} autoComplete="off">
            <h1 css={{ textAlign: "center" }}>Recover password</h1>
            <Input name="email" placeholder="Email address" onChange={this.handleChange.bind(this)} value={this.state.form.email} />

            <Button overrideCSS={{
              width: '285px',
              backgroundColor: this.state.status === "sending" ? '#CDCDCD !important' : `${presets.brandLight} !important`
            }} label="Send reset link" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled"}
            />
            <div css={{ color: 'blue', marginTop: '10px', marginBottom: '10px' }}>{this.state.message}</div>
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Login