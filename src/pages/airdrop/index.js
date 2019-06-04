import React, { Component } from 'react';
import { Helmet } from "react-helmet"
import Layout from '../../layouts';
import StartBuildingSection from '../../components/home/StartBuildingSection';
import ieoBanner from '../../../static/images/ieo/sqrxbitforex.jpg';
import sqrTable from '../../../static/images/ieo/SQRtable.png';


export default class Airdrop extends Component {
  render() {
    return (
      <Layout color="#F8FCFF">
        <Helmet>
          <title>Squeezer Airdrop</title>
        </Helmet>
        <div css={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '75px 0'
        }}>
          <h1 css={{fontFamily: 'DIN Condensed', fontSize: '45px',	fontWeight: 'bold', textAlign: 'center'}}>SQUEEZER IEO EXCLUSIVE AIRDROP</h1>
          <img src={ieoBanner} alt="ieoBanner" css={{ width: '800px', height: 'auto', position: 'relative'}} />
          <h2 css={{fontFamily: 'DIN Condensed', fontSize: '38px', fontWeight: 'bold', textAlign: 'center'}}>
            - EVERY <span css={{color:'#3399ff'}}>IEO</span> PARTICIPANT GETS <span css={{color:'#3399ff'}}>$75</span> IN SQR TOKENS<p></p>
            - INVITE <span css={{color:'#ff9933'}}>3 FRIENDS</span> TO PARTICIPATE IN THE IEO AND GET <span css={{color:'#ff9933'}}>$50</span> IN BTC<br></br><br></br>
          </h2>
          <h2 css={{fontFamily: 'Khula', fontSize: '26px', fontWeight: 'bold', textAlign: 'center'}}>...</h2><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '26px', fontWeight: 'bold', textAlign: 'center'}}>Step-By-Step Instructions For IEO Participants</h2><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>1. Signup for Bitforex</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular'}}>We recommend to do this in advance not to rush off on the day of the token sale start.</h3><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>2. Exchange crypto for BTC</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular'}}>You can buy SQR only with BTC during the IEO, so don’t forget to make the exchange in advance on Bitforex.</h3><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>3. Set a reminder with 10 minutes before the token sale start</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular'}}>Set you alarm clock at 4:50 PM (GMT +8) on June 10th - 10 minutes before the token sale start. Receive 25% bonus from your initial contribution if you are in the first 100 buyers.</h3><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>4. Click the “Buy Tokens” button</h2>
          <h3 css={{fontFamily: 'Khula', fontSize: '18px', fontWeight: 'Regular'}}>For every IEO participant we give out $75 in SQR tokens, all you need to do is buy SQR tokens worth minimum the individual cap ($50). Also for every 3 friends you invite to contribute in the IEO you receive $50 in BTC.</h3><br></br>
          <h2 css={{fontFamily: 'Khula', fontSize: '24px', fontWeight: 'bold'}}>4. Enjoy your exclusive 3 days of trading just for IEO participants</h2>
          <img src={sqrTable} alt="sqrTable" css={{ width: '800px', height: 'auto', position: 'relative'}} />
        </div>
        <StartBuildingSection />
      </Layout>
    );
  }
}
