import React, { Component } from 'react';
import presets from '../../utils/presets';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonSecondary from '../button/ButtonSecondary';
import mainImage from '../../../static/images/home/main.png';

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
        <div css={{position: 'absolute', top: '12%'}}>
          <h2 css={{textTransform: 'uppercase', fontWeight: 'normal',color: '#092D5D', fontFamily: 'Khula', fontSize: '2rem'}}>
            build serverless dapps
          </h2>
          <h1 css={{textTransform: 'uppercase', fontWeight: 'bold',color: '#092D5D', fontSize: '3.5rem', fontFamily: "DIN Condensed"}}>
            ACCESS BLOCKCHAIN AS A SERVICE
          </h1>
          <h3 css={{fontWeight: 'normal', color: '#092D5D', fontFamily: 'Khula', fontSize: '1.2rem'}}>
            Blockchain agnostic integration for payments & smart contracts
          </h3>
      
          <div css={{left: 'auto', right: 'auto', marginTop: '5rem'}}>
            <ButtonPrimary
              title='get free account'
              onClick={() => console.log('clicked free')}
              style={{ width: '9.3rem', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', width: '9rem !important'
                }}}
            />
            <ButtonSecondary
              title='check the docs'
              onClick={() => console.log('clicked docs')}
              style={{ marginLeft: '17px', width: '9.3rem', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                }}}
            />
          </div>
        </div>
    
        <img
          src={mainImage}
          css={{
            /*maxWidth: '100vh',*/ height: 'auto', width: 'auto\9'
          }}
        />
      </div>
    );
  }
}
