import React from "react"
import PropTypes from "prop-types"
import jsonp from "jsonp"
import presets from "../../utils/presets"
import CtaButton from "../../components/cta-button"
import Input from "../../components/input"
import { rhythm, scale, options } from "../../utils/typography"
import { css } from "glamor"

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

let stripeAnimation = css.keyframes({
  "0%": { backgroundPosition: `0 0` },
  "100%": { backgroundPosition: `30px 60px` },
})

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null,
      form: {
        email: '',
        amount: ''
      }
    }
  }
  handleChange(event) {
    this.state.form[event.target.name] = event.target.value;

    this.setState({ form: this.state.form });
  }
  onSubmit = e => {
    e.preventDefault()
    const emailVal = this.state.form.email;
    const amountVal = this.state.form.amount;
    const minAmount = 50;
    
    if (!emailVal || emailVal.length < 5 || emailVal.indexOf("@") === -1) {
      this.setState({
        status: "emailError"
      })
      return
    }
    if (!amountVal || !Number(amountVal) || amountVal < minAmount) {
      this.setState({
        status: "amountError"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(emailVal)}` +
    `&AMOUNT=${encodeURIComponent(amountVal)}` +  `&CAMPAIGN=${localStorage.utm_campaign}` +  
    `&MEDIUM=${localStorage.utm_medium}` + `&SOURCE=${localStorage.utm_source}`;

    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'emailError',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'emailError',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status } = this.state
    return (
      <div className={className} style={style}>
        <form action={action.bind} method="post" noValidate>
          <div>
            {/* <input
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={messages.inputPlaceholder}
            />
            <button
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
            >
              {messages.btnLabel}
            </button> */}
            <input
              css={{
                display: 'inline-block',
                margin: 0,
                marginTop: rhythm(1),
                marginRight: rhythm(1),
                height: rhythm(2.2),
                padding: '5px 15px',
                fontWeight: `normal`,
                border: 0,
                [presets.Mobile]: {
                  width: '90%'
                },
                [presets.Tablet]: {
                  width: '50%'
                },
                [presets.Desktop]: {
                  width: '50%'
                }
              }}
              // ref={node => (this.input = node)}
              type="email"
              name="email"
              required="true"
              placeholder={messages.inputPlaceholder}
              onChange={this.handleChange.bind(this)}               
              value={this.state.form.email}
            />
            <input
              css={{
                display: 'inline-block',
                margin: 0,
                marginTop: rhythm(1),
                marginRight: rhythm(1),
                height: rhythm(2.2),
                padding: '5px 15px',
                fontWeight: `normal`,
                border: 0,
                [presets.Mobile]: {
                  width: '90%'
                },
                [presets.Tablet]: {
                  width: '50%'
                },
                [presets.Desktop]: {
                  width: '50%'
                }
              }}
              // ref={node => (this.input = node)}
              name="amount"
              onChange={this.handleChange.bind(this)} 
              value={this.state.form.amount}
              placeholder="Amount (USD)"
            />
            <button
              css={{
                border: `1px solid #FFF`,
                borderRadius: 0,
                boxShadow: `none`,
                color: '#FFF',
                fontSize: '25px',
                verticalAlign: 'middle',
                fontWeight: `normal`,
                backgroundColor: `transparent`,
                backgroundSize: `30px 30px`,
                padding: '13px 15px',
                cursor: 'pointer',
                [presets.Mobile]: {
                  marginTop: rhythm(0.5)
                },
                [presets.Tablet]: {
                  marginTop: 0
                },
                [presets.Desktop]: {
                  marginTop: 0
                },
                "&&": {
                  boxShadow: `none`,
                  backgroundColor: `transparent`,
                  transiton: `all .15s ease-out`,
                  ":hover": {
                    backgroundSize: `30px 30px`,
                    backgroundColor: presets.brand,
                    backgroundImage: `linear-gradient(45deg, rgba(0,0,0, 0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0, 0.1) 50%, rgba(0,0,0, 0.1) 75%, transparent 75%, transparent)`,
                    color: `#fff`,
                    animation: `${stripeAnimation} 2.8s linear infinite`,
                  },
                  ":after": {
                    content: ``,
                    display: `block`,
                  },
                }
              }}
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
            >
              {messages.btnLabel}
            </button>
          </div>
          {status === "sending" && <p style={styles.sending} dangerouslySetInnerHTML={{ __html: messages.sending }} />}
          {status === "success" && <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success }} />}
          {status === "emailError" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.emailError }} />}
          {status === "amountError" && <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.amountError }} />}
          </form>
      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "Your email address",
    btnLabel: "Add me to whitelist",
    sending: "Sending...",
    success: "You've been successfully added to our whitelist!",
    emailError: "Oops, invalid email address",
    amountError: "Oops, invalid amount, minimum amount is 50 USD"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "white"
    },
    error: {
      fontSize: 18,
      color: "#ff9999"
    }
  }
}

export default SubscribeForm