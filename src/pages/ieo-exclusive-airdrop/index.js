import React, { Component } from 'react';
import ReCAPTCHA from "react-google-recaptcha"
import Layout from "../../layouts";
import axios from "axios";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Helmet } from "react-helmet"
import ieoBanner from '../../../static/images/ieo/sqrxbitforex.jpg';
import sqrTable from '../../../static/images/ieo/SQRtable.png';
import IeoReferral from '../../../static/images/ieo/referral.png';
import CopyImg from '../../../static/images/copy.png';

import StartBuildingSection from "../../components/home/StartBuildingSection";
import presets from "../../utils/presets";

const Button = ({ label }) => (
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

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const makeid = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
      ref: makeid(6),
      copied: false,
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
    const ref = getParameterByName('ref');

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

    // if (!whitelistCode) {
    //   setError('Invalid whitelist code')
    // }

    if (!isError) {
      this.setState({ status: 'sending' })

      const submitObj = {
        email: email.toLowerCase(),
        walletAddress: walletAddress,
        amount: amount,
        whitelistCode: whitelistCode,
        ref,
        affId: makeid(6),
        captcha: captcha
      }

      axios.post('https://platform.api.squeezer.io/prod/rest/v1/project/ieo-whitelist', submitObj).then((res) => {
        // axios.post('http://localhost:4001/rest/v1/project/ieo-whitelist', submitObj).then((res) => {
        const { message } = res.data
        console.log(res);

        setError(message)
      })
    }
  }

  render() {
    let origin = 'https:/squeezer.io/'
    if (typeof window !== 'undefined') {
      origin = window.location.origin
    }

    const affiliateUrl = `${origin}/ieo-exclusive-airdrop/?ref=${this.state.ref}`

    return (
      <Layout color="#F8FCFF">
        <Helmet>
          <title>IEO Exclusive Airdrop</title>
          <meta property="og:title" content="Squeezer - IEO Exclusive Airdrop" />
          <meta property="og:description" content="Offering tour packages for individuals or groups." />
          <meta property="og:image" content={ieoBanner} />
          <meta property="og:url" content="https://squeezer.io/ieo-exclusive-airdrop/" />
          <meta name="twitter:title" content="Squeezer - IEO Exclusive Airdrop" />
          <meta name="twitter:description" content="EVERY IEO WHITELISTED PARTICIPANT GETS $75 IN SQR TOKENS. FOR EVERY 3 FRIENDS YOU INVITE TO PARTICIPATE IN THE IEO YOU GET $50 IN ETH." />
          <meta name="twitter:image" content={ieoBanner} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div css={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '75px 0 0 0'
        }}>
          <h1 css={{ fontFamily: 'DIN Condensed', fontSize: '45px', fontWeight: 'bold', textAlign: 'center' }}>SQUEEZER IEO EXCLUSIVE AIRDROP</h1>
          <img src={ieoBanner} alt="ieoBanner" css={{ width: '800px', height: 'auto', position: 'relative' }} />
          <h2 css={{ fontFamily: 'DIN Condensed', fontSize: '38px', fontWeight: 'bold', textAlign: 'center' }}>
            - EVERY <span css={{ color: '#3399ff' }}>IEO</span> WHITELISTED PARTICIPANT GETS <span css={{ color: '#3399ff' }}>$75</span> IN SQR TOKENS<p></p>
            - FOR EVERY <span css={{ color: '#ff9933' }}>3 FRIENDS</span> YOU INVITE TO PARTICIPATE IN THE IEO YOU GET <span css={{ color: '#ff9933' }}>$50</span> IN ETH<br></br><br></br>
          </h2>
          <h4 css={{ textAlign: 'center' }}>
            Use the link bellow and share with your friends: <br />
            <a href={affiliateUrl}>{affiliateUrl}</a>
            &nbsp;
            <CopyToClipboard text={affiliateUrl}
              onCopy={() => this.setState({ copied: true })}>
              {/* <span style={{
                fontSize:'12px',
                color: '#1990ff',
                display: 'inline-block',
                verticalAlign: 'middle',
                cursor: 'pointer'
              }}> */}
              <img
                src={CopyImg} alt="copy" css={{
                  width: 'auto', height: '14px', border: 0, position: 'relative',
                  fontSize: '12px',
                  paddingLeft: '5px',
                  marginTop: '15px',
                  color: '#1990ff',
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  cursor: 'pointer'
                }} />
              {/* </span> */}
            </CopyToClipboard>
          </h4>
          <img src={IeoReferral} alt="ieoReferral" css={{ width: '800px', height: 'auto', position: 'relative' }} />
          <h2 css={{ fontFamily: 'Khula', fontSize: '26px', fontWeight: 'bold', textAlign: 'center' }}>...</h2><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '26px', fontWeight: 'bold', textAlign: 'center' }}>Step-By-Step Instructions For IEO Participants</h2><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>1. Whitelist for the IEO Aidrop</h2>
          <h3 css={{ fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular' }}>In order to be able to participate on the IEO Exclusive Airdrop you need to submit the form at the bottom of the page <a href="#whitelist-form">Whitelist Form</a>.</h3><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>2. Signup for Bitforex and verify your account.</h2>
          <h3 css={{ fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular' }}>We recommend to do this in advance not to rush off on the day of the token sale start. Only the verified user accounts are allowed to participate in the IEO.</h3><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>3. Exchange crypto for ETH</h2>
          <h3 css={{ fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular' }}>You can buy SQR only with ETH during the IEO, so don’t forget to make the exchange in advance on Bitforex.</h3><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>4. Set a reminder with 10 minutes before the token sale start</h2>
          <h3 css={{ fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular' }}>Set you alarm clock at 4:50 PM (GMT +8) on June 10th - 10 minutes before the token sale start. Receive 25% bonus from your initial contribution if you are in the first 100 buyers.</h3><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>5. Click the “Buy Tokens” button</h2>
          <h3 css={{ fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular' }}>For every IEO participant we give out $75 in SQR tokens, all you need to do is buy SQR tokens worth minimum the individual cap ($50). Also for every 3 friends you invite to contribute in the IEO you receive $50 in ETH.</h3><br></br>
          <h2 css={{ fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold' }}>6. Enjoy your exclusive 3 days of trading just for the IEO participants</h2>
          <img src={sqrTable} alt="sqrTable" css={{ width: '800px', height: 'auto', position: 'relative' }} />
        </div>
        <div id="whitelist-form" css={{
          width: '300px',
          margin: '0 auto',
          fontFamily: 'Khula',
          paddingTop: '50px'
        }}>
          <h1 css={{
            marginTop: '45px',
            fontSize: '35px'
          }}>
            IEO whitelist form
          </h1>
          <form onSubmit={this.onFormSubmit.bind(this)} autoComplete="off">
            <SubInfo text="Email address used on the IEO" />
            <Input name="email" placeholder="Email Address" onChange={this.handleChange.bind(this)} value={this.state.form.email} />
            <SubInfo text="Wallet address where to get the bonuses" />
            <Input name="walletAddress" placeholder="Wallet Address (ERC20)" onChange={this.handleChange.bind(this)} value={this.state.form.walletAddress} />
            <SubInfo text="Estimated amount you want to contribute (min 50 USD)" />
            <Input name="amount" placeholder="Amount (USD)" onChange={this.handleChange.bind(this)} value={this.state.form.amount} />
            {/* <SubInfo text="Whitelist code" />
            <Input name="whitelistCode" placeholder="Whitelist Code" onChange={this.handleChange.bind(this)} value={this.state.form.whitelistCode} /> */}
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
              <Button label="Submit Application" type="submit" onClick={this.onSubmit} status={this.state.status} />
            </div>
          </form>
        </div>
        <StartBuildingSection />
      </Layout >
    );
  }
}
