import React from "react"
import { rhythm, scale, options } from "../../../utils/typography"
import presets from "../../../utils/presets"
import { apiLoginUser, apiRegisterUser, apiAddNewReferral } from "../../../utils/api"
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

    this.setState({
      error: null
    })

    const email = this.state.form.email;
    const password = this.state.form.password;
    const passwordConfirm = this.state.form.passwordConfirm;

    let isError = false

    const setError = (error) => {
      if (!isError) {
        this.setState({ error: error })
        isError = true
      }
    }

    if (!email || !validateEmail(email)) {
      setError("Invalid email address")
    }

    if (!password) {
      setError("Invalid password")
    }

    if (!passwordConfirm) {
      setError("Invalid confirm password")
    }

    if (password !== passwordConfirm) {
      setError("Confirm password doesn't match")
    }

    if (!isError) {
      this.setState({ status: 'sending' })

      if (localStorage.utm_medium === "ref") {
        apiAddNewReferral({
          email: email,
          affiliateCode: localStorage.utm_source
        })
      }

      const loginObj = {
        email: email,
        password: password
      }

      apiRegisterUser(loginObj).then((res) => {
        localStorage.token = res.data.token

        if (typeof window !== "undefined") {
          window.location = "/token-sale/account/";
        }
      }).catch((error) => {
        this.setState({ status: null })
        setError(error.message)
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
            <h1 css={{ textAlign: "center" }}>Account Register</h1>
            <Input name="email" placeholder="Email address" onChange={this.handleChange.bind(this)} value={this.state.form.email} />
            <Input name="password" type="password" placeholder="Password" onChange={this.handleChange.bind(this)} value={this.state.form.password} />
            <Input name="passwordConfirm" type="password" placeholder="Password confirm" onChange={this.handleChange.bind(this)} value={this.state.form.passwordConfirm} />
            <div css={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{this.state.error}</div>
            <Button overrideCSS={{
              width: '285px', backgroundColor: this.state.status === "sending" ? '#CDCDCD !important' : `${presets.brandLight} !important`
            }} label="Submit" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled"} />
          </form>
          <div css={{ textAlign: 'center' }}>
            <a href="/token-sale/account/login/">Go to account login</a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Login