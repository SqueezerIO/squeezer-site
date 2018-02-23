import React from "react"
import { rhythm, scale, options } from "../../../utils/typography"
import presets from "../../../utils/presets"
import { apiResetPassword } from "../../../utils/api"
import Input from "../../../components/input"
import Button from "../../../components/button"
import Footer from "../../../components/footer"
import { validateEmail } from "../../../utils/validate"
import queryString from "query-string";

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

    const password = this.state.form.password;
    const passwordConfirm = this.state.form.passwordConfirm;
    const queryParams = queryString.parse(this.props.location.search)

    let isError = false

    const setError = (error) => {
      if (!isError) {
        this.setState({ error: error })
        isError = true
      }
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

      const resetObj = {
        id: queryParams.id,
        password: password
      }

      apiResetPassword(resetObj).then((res) => {
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
            <h1 css={{ textAlign: "center" }}>Reset Password</h1>
            <Input name="password" type="password" placeholder="Password" onChange={this.handleChange.bind(this)} value={this.state.form.password} />
            <Input name="passwordConfirm" type="password" placeholder="Password confirm" onChange={this.handleChange.bind(this)} value={this.state.form.passwordConfirm} />
            <div css={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{this.state.error}</div>
            <Button overrideCSS={{
              width: '285px', backgroundColor: this.state.status === "sending" ? '#CDCDCD !important' : `${presets.brandLight} !important`
            }} label="Submit" type="submit" onClick={this.onSubmit} disabled={this.state.status === "sending" || this.state.status === "success" || this.state.status === "disabled"} />
          </form>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Login