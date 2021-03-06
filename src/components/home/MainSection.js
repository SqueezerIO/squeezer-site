import React, { Component } from 'react';
import presets from '../../utils/presets';
import ButtonPrimary from '../button/ButtonPrimary';
import ButtonSecondary from '../button/ButtonSecondary';
import mainImage from '../../../static/images/homeSVG/Background-image-stock.svg';
import gitImage from '../../../static/images/footer/github-footer.svg';
import tradeOnBilaxy from '../../../static/images/trade-on-bilaxy.png';

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
        <div css={{position: 'absolute', top: '5%', zIndex: 100}}>
          {/* <h2 css={{textTransform: 'uppercase', fontWeight: 'normal',color: '#092D5D', fontFamily: 'Nunito', fontSize: '26px', textShadow: '0 1px 3px 0 rgba(0,0,0,0.5)',
            lineHeight: '35px'
          }}>
            build serverless dapps
          </h2> */}
          <h1 css={{fontWeight: 900, color: '#092D5D', fontSize: '48px', marginTop: '60px', lineHeight: '66px', fontFamily: "Nunito"}}>
            Agnostic DeFi Layer Aggregator
          </h1>
          <h3 css={{color: '#092D5D', fontFamily: 'Nunito', marginTop: '45px', fontSize: '18px', lineHeight: '24px', fontWeight: '400'}}>
            Secure and convenient way to access DeFi ecosystem across multiple protocols.
          </h3>

          <div css={{left: 'auto', right: 'auto', marginTop: '4rem'}}>
            {/* <div css={{marginTop: '25px'}}>
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
                mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                }}}
                mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
              />
            </div>
						<div css={{cursor: 'pointer'}} onClick={() => window.open('https://bilaxy.com/trade/SQR_ETH', '_blank')}>
							<img css={{ width: 'auto', height: '50px', marginTop: '25px' }} src={tradeOnBilaxy} alt={tradeOnBilaxy} />
						</div>
            <div onClick={() => window.open('https://github.com/SqueezerIO/squeezer', '_blank')} css={{
              fontFamily: 'Nunito',
              // fontWeight: 'bold',
              color: '#404040',
              // border: '1px solid #bfbfbf',
              paddingTop: '5px',
              margin: '0 auto',
              marginBottom: '35px',
              height: '40px',
              width: '225px',
              marginTop: '10px',
              cursor: 'pointer'
            }}>
              <img css={{ display: 'inline-block', verticalAlign: 'middle', width: '25px', height: '25px' }} src={gitImage} alt={gitImage} />
              <div css={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '10px', marginTop: '-15px' }}>
                <b>3,164</b> GitHub stars
              </div>
            </div> */}
            <ButtonPrimary
              title='Check Roadmap'
              onClick={() => location.href = '#roadmap' }
              style={{ width: '163px', border: '1px solid #1890FF', boxShadow: '0 0 0 0 rgba(0,0,0,0.0)'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', width: '9rem !important'
                }}}
              mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
            />
            {/* <ButtonSecondary
              title='check the docs'
              onClick={() => location.href = 'https://docs.squeezer.network'}
              style={{ marginLeft: '17px', width: '163px', height: '39px', lineHeight: '38px', border: '1px solid #979797', boxShadow: '0 0 0 0 rgba(0,0,0,0.0)'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                }}}
              mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
            /> */}
          </div>
        </div>
{/* 
        <img
          src={mainImage}
          css={{
            height: 'auto', width: 'auto'
          }}
        /> */}
      </div>
    );
  }
}
