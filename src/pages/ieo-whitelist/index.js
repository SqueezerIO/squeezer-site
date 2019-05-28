import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../../layouts";
import axios from "axios";

import StartBuildingSection from "../../components/home/StartBuildingSection";
import presets from "../../utils/presets";

const Button = ({label}) => (
  <button
    css={{
      border: '1px solid #1890FF',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 #B2B2B2',
        backgroundColor: '#1890FF',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '15px',
        fontFamily: 'Khula',
        lineHeight: '38px',
        fontWeight: 'bold',
        letterSpacing: '.1px',
        padding: '0px 15px'
    }}
  >{label}</button>
)

const Input = ({ overrideCss, placeholder, type, name, id, required, value, onChange }) => (
  <input id={id} name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange}
    css={{
      // width: '100%',
      // minWidth:'100%',
      width: '100%',
      color: '#808080',
      padding: '5px',
      fontFamily: 'sans-serif',
      border: '1px solid #d9d9d9',
      marginBottom: '15px',
      display: 'block',
      ...overrideCss
    }}
  />
)

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const validateWallet = (address) => {
  return (/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));
}

const SubInfo = ({ text }) => (
  <div css={{
    marginTop: '25px',
    marginBottom: '5px',
    fontSize: '15px',
    color: '#808080',
    // marginLeft: '5px',
    fontWeight: 'bold'
  }}>
    {text}
  </div>
)

export default class WhiteListPage extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      form: {
        email: '',
        walletAddress: '',
        amount: '',
        whitelistCode: '',
      },
      captcha: null,
      showActivationLink: false,
      activationLinkLoading: false
    }
  }

  handleChange(event) {
    this.state.form[event.target.name] = event.target.value;
    this.setState({ form: this.state.form });
  }

  onCaptchaChange(value) {
    this.setState({
      captcha: value
    })
  }

  sendActivationLink() {
    this.setState({
      activationLinkLoading: true
    })

    api.post('/rest/v1/token-sale/account/send-activation-link', {
      email: this.state.form.email,
      base_url: window.location.origin
    }).then(() => {
      this.setState({
        activationLinkLoading: false
      })
    });
  }

  onFormSubmit(event) {
    event.preventDefault()

    const { t } = this.props

    this.setState({
      error: null
    })

    const email = this.state.form.email;
    const walletAddress = this.state.form.walletAddress;
    const amount = this.state.form.amount;
    const whitelistCode = this.state.form.whitelistCode;
    const captcha = this.state.captcha;

    let isError = false

    const setError = (error) => {
      if (!isError) {
        this.setState({ error: error })
        isError = true
      }
    }

    if (!email || !validateEmail(email)) {
      setError('Invalid email address');
    }

    if (!walletAddress || !validateWallet(walletAddress)) {
      setError('Invalid wallet address');
    }

    if (!amount) {
      setError('Invalid amount')
    }

    if (!whitelistCode) {
      setError('Invalid whitelist code')
    }

    if (!isError) {
      this.setState({ status: 'sending' })

      const submitObj = {
        email: email.toLowerCase(),
        walletAddress: walletAddress,
        amount: amount,
        whitelistCode: whitelistCode,
        captcha: captcha
      }

      axios.post('https://platform.api.squeezer.io/prod/rest/v1/project/ieo-whitelist', submitObj).then((res) => {
        const { message } = res.data
        console.log(res);

        setError(message)
      })
    }
  }

  render() {
    return (
      <Layout color="#F8FCFF">
        <div css={{
          // padding: '50px',
          padding: '15px',
          maxWidth: '330px',
          fontFamily: 'Khula',
          margin: '0 auto'
        }}>
          <h1 css={{
            marginTop: '75px',
            fontSize: '35px'
          }}>
            IEO whitelist bonus
          </h1>
          <p css={{
              color: 'red',
              fontSize: '15px',
              marginTop: '20px'
            }}>
              Note: Number of IEO whitelist participants is limited.
          </p>
          <form onSubmit={this.onFormSubmit.bind(this)} autoComplete="off">
            <SubInfo text="Email address used on the IEO" />
            <Input name="email" placeholder="Email Address" onChange={this.handleChange.bind(this)} value={this.state.form.email} />
            <SubInfo text="Wallet address where to get the bonus" />
            <Input name="walletAddress" placeholder="Wallet Address (ERC20)" onChange={this.handleChange.bind(this)} value={this.state.form.walletAddress} />
            <SubInfo text="Estimated amount you want to contribute (USD)" />
            <Input name="amount" placeholder="Amount (USD)" onChange={this.handleChange.bind(this)} value={this.state.form.amount} />
            <SubInfo text="Whitelist code" />
            <Input name="whitelistCode" placeholder="Whitelist Code" onChange={this.handleChange.bind(this)} value={this.state.form.whitelistCode} />
            <div css={{ color: 'red', marginTop: '10px', marginBottom: '10px' }}>{this.state.error}</div>
            <ReCAPTCHA
              ref="recaptcha"
              sitekey="6LfB91UUAAAAAB_a9k6JZhtfEAc5udzRoxFoWfud"
              onChange={this.onCaptchaChange.bind(this)}
            />
            <div css={{
              textAlign: 'center',
              marginTop: '40px'
            }}>
              <Button label="Submit Application" type="submit" onClick={this.onSubmit} status={this.state.status}/>
            </div>
          </form>
        </div>
        <StartBuildingSection />
      </Layout>
    );
  }
}
