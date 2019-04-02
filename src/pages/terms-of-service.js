import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import Layout from '../layouts';
import StartBuildingSection from '../components/home/StartBuildingSection';


export default class TermsOfService extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <Helmet>
          <title>Terms of Service</title>
        </Helmet>
        <div css={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '75px 0'
        }}>
          <h1 css={{fontFamily: 'DIN Condensed', fontSize: '45px',	fontWeight: 'bold', textAlign: 'center'}}>TERMS OF SERVICE</h1>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>1. Agreement Between You and Squeezer</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            1.1. These Terms of Service (the “Terms”) govern your acquisition and use of services on our website squeezer.io. By accepting these Terms, either by clicking a box indicating your acceptance or by executing an order form or other document referring to these Terms, you agree that these Terms form part of the agreement between you and Golden Data Inc. (“Squeezer”) (the “Agreement”).<br></br>
            1.2. These Terms were last updated on March 31st, 2019 and are effective between you and Squeezer as of the date when you place an order or set up an account at squeezer.io. Squeezer reserves the right to change these Terms from time to time. If such changes are considered material, Squeezer will inform registered customers about the changes by email, and the changes will take effect immediately after such emails have been sent. Your continued use of our website or services after such changes will constitute acknowledgment and acceptance of the modified Terms.<br></br>
            1.3. In case of any discrepancies between the wording of our website and these Terms, these Terms prevail.<br></br>
            1.4. These Terms as well as all other texts throughout the website are translated from English to other languages. These are unofficial translations and are only provided as convenience translations. They should therefore be interpreted in accordance with their English language versions which will prevail in the event of any discrepancy between the English version and the translation. Squeezer assumes no liability for any errors, omissions or ambiguities in the translations. Any person or entity choosing to rely on the translated content does so at their own risk. When in doubt, please always refer to the official English language version.
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>2. The Services We Deliver – and What You Need to Do</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            2.1. Squeezer is designed as a service to build and deploy code in the cloud. Squeezer is only the service provider of the IT infrastructure, and it is your own responsibility to ensure correct implementation and provide relevant input to the system.<br></br>
            2.2. Squeezer automatically sets up to cookies in the user’s web browser when the user visits squeezer.io.<br></br>
          </h3>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>2. Prices</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '16px', fontWeight: 'Regular'}}>
            3.1. Squeezer Subscription<br></br>
            3.1.1. All Squeezer subscriptions will include monthly invoices and logs.<br></br>
            3.1.2. Current prices can be found on each of the product’s webpage.<br></br>
            3.1.3. The prices may be changed by Squeezer at any time with the prior notification to its users. The effects of the price changes will be immediate after the e-mail notification has been sent.<br></br>
            3.1.4. Squeezer offers a free credit of $25 for any new account opened.<br></br>

          </h3>
        </div>
        <StartBuildingSection />
      </Layout>
    );
  }
}
