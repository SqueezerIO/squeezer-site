import React, { Component } from 'react';
import presets from '../../utils/presets';
import assetWhiteImage from '../../../static/images/home/docs/asset_6@4x_white.png';
import ButtonSecondary from '../button/ButtonSecondary';

export default class StartBuildingSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: `0 auto`,
          maxWidth: `100vh`,
          minHeight: `20vh`,
          position: 'relative',
          display: 'flex',
          padding: '3rem 7rem',
          justifyContent: 'space-between',
          [presets.Desktop]: {
            padding: '0 3rem',
          },
          [presets.Phablet]: { marginTop: `5rem`}
        }}
      >
        <div css={{
          position: 'relative', height: '322px',	display: 'flex', flex: 1,borderRadius: '1px',	backgroundColor: '#e6f2ff',	boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
          [presets.Desktop]: {
            marginTop: 0,
            width: 0,
            height: 0
          },
        }}>
          <div css={{
            position: 'absolute',
            height: '317px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            left: '2%',
            top: '-5%',
            right: '-2%',
            borderRadius: '1px',
            backgroundColor: '#005499',
            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
            padding: '1.5rem 2.5rem',
            [presets.Desktop]: {
              display: 'block',
              marginTop: 0,
              height: 'auto',
              top: 0,
              right: 0,
              left: 0
            }
          }}>
            <div css={{display: 'flex'}}>
              <div css={{[presets.Desktop]: {display: 'flex', alignContent: 'center', justifyContent: 'center'}}}>
                <img
                  src={assetWhiteImage}
                  alt='assetWhiteImage'
                  css={{
                    width: '40px', height: '40px', position: 'absolute', left: '3%', [presets.Desktop]: {position: 'relative', left: '7%'
                    }
                  }}
                />
                <img
                  src={assetWhiteImage}
                  alt='assetWhiteImage'
                  css={{width: '40px', height: '40px'}}
                />
              </div>
              <p css={{
                color: '#FFFFFF',
                fontFamily: "DIN Condensed",
                fontSize: '2.3rem',
                letterSpacing: '.9px',
                marginLeft: '1rem',
                [presets.Mobile]: { marginLeft: 0 }
              }}>START BUILDING TOP-NOTCH DAPPS, IS FREE !</p>
            </div>
            <p css={{display: 'flex', padding: '2rem 6rem 2rem 3rem', color: '#fff', fontFamily: 'Khula', fontSize: '18px', letterSpacing: '1px',
              [presets.Desktop]: {padding: '0 1rem 0 0'}, [presets.Phablet]: {padding: '0 1rem 0 0', textAlign: 'center'}}}>
              Feel free to try our solution, we offer $25 credit to all new users.
              Setting up a new project is super easy and if you need help we’ll
              make sure that you will get it just in time.
            </p>
              <ButtonSecondary
                title='get free account'
                style={{
                  width: '12rem', height: '3rem',	fontWeight: 'bold', fontSize: '18px', color: '#004CA5', lineHeight: '50px', marginLeft: '3rem',
                }}
                mediaquery={{[presets.Desktop]: {
                    display: 'block', margin: 'auto !important', width: '100% !important', padding: '0 !important'
                  }}}
                mediaqueryPhablet={{[presets.Phablet]: { fontSize: '14px !important', height: '6rem !important', marginTop: '3rem !important' }}}
              />
          </div>
        </div>
      </div>
    );
  }
}
