import React, { Component } from 'react';
import presets from '../../utils/presets';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonSecondary from '../button/ButtonSecondary';
import mainImage from '../../../static/images/homeSVG/Background-image-stock.svg';

export default class MainSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: 0,
          padding: 0,
          marginTop: `3rem`,
          minHeight: `40vh`,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          [presets.Desktop]: {
            marginTop: `1rem`,
            padding: 0,
          }
        }}
      >
        <div css={{position: 'absolute', top: '12%', zIndex: 100}}>
          <h2 css={{textTransform: 'uppercase', fontWeight: 'normal',color: '#092D5D', fontFamily: 'Khula', fontSize: '26px', textShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
            lineHeight: '35px'
          }}>
            build serverless dapps
          </h2>
          <h1 css={{textTransform: 'uppercase', fontWeight: 'bold', color: '#092D5D', fontSize: '55px', lineHeight: '66px', fontFamily: "DIN Condensed"}}>
            ACCESS BLOCKCHAIN AS A SERVICE
          </h1>
          <h3 css={{color: '#092D5D', fontFamily: 'Khula', fontSize: '18px', lineHeight: '24px', fontWeight: '400'}}>
            Blockchain agnostic integration for payments & smart contracts
          </h3>
      
          <div css={{left: 'auto', right: 'auto', marginTop: '4rem'}}>
            <ButtonPrimary
              title='get free account'
              onClick={() => console.log('clicked free')}
              style={{ width: '163px', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', width: '9rem !important'
                }}}
            />
            <ButtonSecondary
              title='check the docs'
              onClick={() => console.log('clicked docs')}
              style={{ marginLeft: '17px', width: '163px', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                }}}
            />
          </div>
        </div>
    
        <img
          src={mainImage}
          css={{
            height: 'auto', width: 'auto\9'
          }}
        />
      </div>
    );
  }
}