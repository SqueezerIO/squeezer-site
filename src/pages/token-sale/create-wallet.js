import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import Footer from "../../components/footer"
import Step1Pic from "../../assets/token-sale/create-wallet/step-1.png"
import Step2Pic from "../../assets/token-sale/create-wallet/step-2.png"
import Step3Pic from "../../assets/token-sale/create-wallet/step-3.png"
import Step4Pic from "../../assets/token-sale/create-wallet/step-4.png"
import Step5Pic from "../../assets/token-sale/create-wallet/step-5.png"
import Step6Pic from "../../assets/token-sale/create-wallet/step-6.png"

class CreateWallet extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
  }

  render() {
    return (
      <div>
        <div css={{
          maxWidth: rhythm(30),
          margin: '0 auto',
          paddingTop: rhythm(2)
        }}>
          <h1>Create a new wallet</h1>
          <p>
            On this tutorial you will learn how to crate an ethereum wallet address using metamask .
          </p>
          <h2>Step 1 - Install the MetaMask extension</h2>
          <p>Visit the <a href="https://metamask.io">metamask.io</a> website and follow the instructions to add the plugin to your browser.</p>
          <img src={Step1Pic} alt="step 1" />
          <h2>Step 2 - Plugin setup</h2>
          <p>Click the extension icon on your browser and start the setup process</p>
          <img src={Step2Pic} alt="step 2" />
          <h2>Step 3 - Password setup</h2>
          <p>Add a secure password</p>
          <img src={Step3Pic} alt="step 3" />
          <h2>Step 4 - Create vault</h2>
          <p>Make sure that you save the words in a secure place for later access</p>
          <img src={Step4Pic} alt="step 4" />
          <h2>Step 5 - Wallet address</h2>
          <p>Copy your wallet address to the clipboard. Click "<b>...</b>" -> "<b>Copy Address to clipboard</b>"</p>
          <img src={Step5Pic} alt="step 5" />
          <p css={{
            marginTop: rhythm(2)
          }}>Paste your wallet address inside of the token sale form input "<b>Ethereum wallet address</b>"</p>
          <img css={{
            width: '300px',
            height: 'auto',
            marginTop: rhythm(2)
          }} src={Step6Pic} alt="step 6" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default CreateWallet