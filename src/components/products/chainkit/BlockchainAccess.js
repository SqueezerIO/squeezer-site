import React, { Component } from 'react';
import presets from "../../../utils/presets";
import chainKitImage from "../../../../static/images/Squeezer_Assets_chainkit_page/chainkit-icon-big.svg";
import blockchainImage from '../../../../static/images/Squeezer_Assets_chainkit_page/593994-128-blockchain-agnostic.svg';
import bidirectionalImage from '../../../../static/images/Squeezer_Assets_chainkit_page/1298360-256-bidirectional-payment.svg';
import smartContactImage from '../../../../static/images/Squeezer_Assets_chainkit_page/2647413-128-smart-contract.svg';
import walletSecurityImage from '../../../../static/images/Squeezer_Assets_chainkit_page/3453534-128-wallet-security.svg';

export default class BlockchainAccess extends Component {
  renderService = (title, image, description) => (
    <div css={{
      height: '150px',
      borderRadius: '3px',
      padding: '0 1rem 1rem 1rem',
      [presets.Phablet]: {
        height: '200px'
      },
      [presets.Mobile]: {
        padding: 0
      }
    }}>
      <div css={{ display: 'flex' }}>
        <img src={image} alt='image' css={{marginRight: '1rem', marginBottom: 0, height: '64px', width: '64px'}} />
        <h3 css={{
          width: '271px', color: '#023775',	fontFamily: 'DIN Condensed',	fontSize: '25px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '30px', marginTop: '-5px', whiteSpace: 'no-wrap',
          [presets.Phablet]: {marginTop: '20px'}
        }}>{title}</h3>
      </div>
      <p css={{color: '#023775', fontFamily: 'Khula', fontSize: '18px', letterSpacing: '.87px', lineHeight: '24px', height: '48px', width: '411px', fontWeight: 200, marginLeft: '80px', marginTop: '-25px',
        [presets.Phablet]: {width: '300px', marginTop: '20px', marginLeft: '-4px', textAlign: 'center'},
        [presets.Mobile]: {width: '280px'}
      }}>
        {description}
      </p>
    </div>
  );

  render() {
    return (
      <div css={{ minHeight: '90vh', marginTop: '20rem', [presets.Hd]: {minHeight: '30vh'}, [presets.Phablet]: {minHeight: '20vh'}}}>
        <div css={{margin: '0 auto', maxWidth: '1200px', position: 'relative'}}>
          <div css={{position: 'absolute', width: '100%', zIndex: '200', [presets.Hd]: { marginTop: '100px'}, [presets.Desktop]: { marginTop: '0px'},
            [presets.Desktop]: {position: 'relative'}
          }}>
            <div css={{height: '100%', width: '520px', position: 'relative',  marginLeft: '150px', marginTop: '-40px',[presets.Hd]:{width: 'auto'},
              [presets.Phablet]: {marginLeft: '0'}
            }}>
              <div css={{
                height: '279px', width: '514px', borderRadius: '1px', backgroundColor: 'transparent', border: '2px solid #06DD72',
                [presets.Hd]: {
                  display: 'none'
                },
              }} >
              </div>
              <div id='chainkit-features' css={{
                position: 'absolute',
                height: '279px',
                width: '514px',
                left: '-2%',
                top: '-4%',
                right: '2%',
                borderRadius: '1px',
                backgroundColor: '#06DD72',
                padding: '2rem 2rem 41px 2rem',
                color: '#FFF',
                fontSize: '45px',
                fontWeight: 'bold',
                letterSpacing: '.87px',
                lineHeight: '54px',
                fontFamily: 'DIN Condensed',
                [presets.Hd]: {
                  padding: '1rem',
                  display: 'block',
                  height: 'auto',
                  margin: 'auto',
                  top: 0,
                  right: 0,
                  left: '-60px',
                },
                [presets.Desktop]: {
                  marginTop: '0rem',
                  top: -250,
                },
                [presets.Phablet]: {
                  backgroundColor: 'transparent',
                  color: '#06DD72',
                  fontSize: '30px',
                  display: 'block',
                  padding: 0,
                  textAlign: 'center',
                  width: '100%',
                  margin: 'auto',
                  left: 0,
                  marginTop: '100px'
                }
              }}
              >
                VERSATILE ACCESS<br/>TO BLOCKCHAIN SERVICES
              </div>
            </div>
            <div css={{position: 'relative', width: '100%', display: 'flex', flexWrap: 'wrap', marginTop: '106px', paddingLeft: '68px',
              [presets.Hd]: {marginTop: '290px'}, [presets.Desktop]: {marginTop: '490px'}, [presets.Phablet]: {padding: 0, marginTop: '250px'}
            }}>
              <div css={{display: 'flex', flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                {this.renderService('Wallet Security', walletSecurityImage, 'Chainkit empowers the end user to manage and store his own private credentials.')}
                {this.renderService('Bidirectional Payment Channels', bidirectionalImage, 'Get integration for both inbound and outbound blockchain transactions.')}
              </div>

              <div css={{display: 'flex', flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center', [presets.Desktop]: {marginLeft: 0}}}>
                {this.renderService('Blockchain agnostic', blockchainImage, 'We help you access different blockchains or switch between them with only one line of code.')}
                {this.renderService('Smart contract secure access', smartContactImage, 'Squeezer adds an extra layer on the top of your smart contract to protect private methods and make it easier to access.')}
              </div>
            </div>
          </div>
        </div>

        <div
          css={{
            margin: '0 auto',
            padding: 0,
            maxWidth: '1200px',
            minHeight: '70vh',
            position: 'relative',
            zIndex: '1',
            opacity: '0.3',
            marginTop: '10rem',
            backgroundColor: '#E6F4FF',
            [presets.Hd]: {
              minHeight: '80vh',
              marginTop: '300px'
            },
            [presets.Desktop]: {
             display: 'none'
            }
          }}>
          {/*<img src={chainKitImage} alt="chainKitImage" css={{width: '510px', opacity: 1,height: '510px', marginLeft: '5px', marginTop: '30px', position: 'relative', zIndex: 200, [presets.Hd]: { display: 'none'}}}/>*/}

        </div>
        <img src={chainKitImage} alt="chainKitImage" css={{width: '510px', height: '510px', marginLeft: '775px', marginTop: '-630px', position: 'absolute', zIndex: 200, [presets.Hd]: { display: 'none'}}}/>
      </div>
    );
  }
}
