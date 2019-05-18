import React, { Component } from 'react';
import presets from '../../utils/presets';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonSecondary from '../button/ButtonSecondary';
import mainImage from '../../../static/images/homeSVG/Background-image-stock.svg';
import gitImage from '../../../static/images/footer/github-footer.svg';

export default class MainSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: 0,
          padding: 0,
          marginTop: '3rem',
          minHeight: '40vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          [presets.Desktop]: {
            marginTop: '1rem',
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
            ACCESS BLOCKCHAIN AS A SERVICE (BaaS)
          </h1>
          <h3 css={{color: '#092D5D', fontFamily: 'Khula', fontSize: '18px', lineHeight: '24px', fontWeight: '400'}}>
            Agnostic solution for two-way payment systems & smart contracts
          </h3>

          <div css={{left: 'auto', right: 'auto', marginTop: '4rem'}}>
            <ButtonPrimary
              title='get free account'
              onClick={() => location.href = 'https://platform.squeezer.io' }
              style={{ width: '163px', height: '39px', lineHeight: '38px', border: '1px solid #1890FF', boxShadow: '0 0 0 0 rgba(0,0,0,0.0)'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', width: '9rem !important'
                }}}
              mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
            />
            <ButtonSecondary
              title='check the docs'
              onClick={() => location.href = 'https://docs.squeezer.io'}
              style={{ marginLeft: '17px', width: '163px', height: '39px', lineHeight: '38px', border: '1px solid #979797', boxShadow: '0 0 0 0 rgba(0,0,0,0.0)'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                }}}
              mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
            />
            <div onClick={() => window.open('https://github.com/SqueezerIO/squeezer', '_blank')} css={{
              fontFamily: 'Khula',
              // fontWeight: 'bold',
              color: '#404040',
              // border: '1px solid #bfbfbf',
              paddingTop: '5px',
              margin: '0 auto',
              height: '40px',
              width: '225px',
              marginTop: '50px',
              cursor: 'pointer'
            }}>
              <img css={{ display: 'inline-block', verticalAlign: 'middle', width: '25px', height: '25px' }} src={gitImage} alt={gitImage} />
              <div css={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '10px', marginTop: '-15px' }}>
                <b>3,164</b> GitHub stars
              </div>
            </div>
            <div css={{marginTop: '25px'}}>
              <ButtonSecondary
                title='read whitepaper'
                onClick={() => location.href = '/docs/Squeezer_White_Paper.pdf'}
                style={{ width: '163px', height: '39px', lineHeight: '38px', border: 0 }}
                mediaquery={{
                  [presets.Desktop]: {
                    display: 'block', margin: 'auto', width: '9rem !important'
                  }
                }}
                mediaqueryPhablet={{ [presets.Phablet]: { fontSize: '12px !important' } }}
              />
              <ButtonSecondary
                title='token economics'
                onClick={() => location.href = '/docs/Squeezer_Token_Economics_website.pdf'}
                style={{ marginLeft: '17px', width: '163px', height: '39px', lineHeight: '38px', border: 0 }}
                mediaquery={{
                  [presets.Desktop]: {
                    display: 'block', margin: 'auto', width: '9rem !important'
                  }
                }}
                mediaqueryPhablet={{ [presets.Phablet]: { fontSize: '12px !important' } }}
              />
            </div>
          </div>
        </div>

        <img
          src={mainImage}
          css={{
            height: 'auto', width: 'auto'
          }}
        />
      </div>
    );
  }
}
