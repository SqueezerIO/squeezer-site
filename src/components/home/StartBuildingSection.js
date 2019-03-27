import React, { Component } from 'react';
import presets from '../../utils/presets';
import assetWhiteImage from '../../../static/images/home/docs/redo.svg';
import ButtonSecondary from '../button/ButtonSecondary';

export default class StartBuildingSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: '5rem auto',
          maxWidth: '1200px',
          minHeight: '20vh',
          position: 'relative',
          display: 'flex',
          padding: '3rem 7rem',
          justifyContent: 'space-between',
          [presets.Desktop]: {
            padding: 0,
          },
          [presets.Phablet]: { marginTop: `5rem`}
        }}
      >
        <div css={{
          position: 'relative', width: '905px', height: '322px', borderRadius: '1px',
          [presets.Hd]: {
            marginTop: 0,
            width: '100%',
            height: 'auto'
          },
        }} >
          <div css={{
            height: '322px', borderRadius: '1px',	opacity: '0.24', backgroundColor: '#007EE6',
            [presets.Desktop]: {
              marginTop: 0,
              width: 0,
              height: 0
            },
          }} >
          </div>
          <div css={{
            position: 'absolute',
            height: '317px',
            width: '900px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            left: '2%',
            top: '-5%',
            right: '-2%',
            borderRadius: '1px',
            backgroundColor: '#005499',
            boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
            padding: '26px 205px 23px 40px',
            [presets.Hd]: {
              padding: '1rem',
              display: 'block',
              marginTop: 0,
              height: 'auto',
              width: '100%',
              top: 0,
              right: 0,
              left: 0
            },
          }}
          >
            <div css={{display: 'flex'}}>
              <div css={{width: '50px', height: '80px', display: 'flex'}}>
                <img
                  src={assetWhiteImage}
                  alt='assetWhiteImage'
                  css={{
                   width: '50px', height: '40px',
                  }}
                />
              </div>
              <p css={{
                color: '#FFFFFF',
                width: '537px',
                height: '35px',
                fontFamily: "DIN Condensed",
                fontSize: '35px',
                letterSpacing: '.9px',
                lineHeight: '42px',
                marginLeft: '.7rem',
                [presets.Phablet]: {marginLeft: '1.2rem'}
              }}>START BUILDING TOP-NOTCH DAPPS, IS FREE !</p>
            </div>
            <div css={{height: '187px', width: '603px', [presets.Phablet]: {width: 'auto', 'height': 'auto', marginTop: '5rem'}}}>
              <p css={{padding: '0rem 0rem 0rem 3.5rem', color: '#fff', fontFamily: 'Khula', fontSize: '20px', letterSpacing: '.9px', lineHeight: '27px', fontWeight: '200',
                [presets.Phablet]: {padding: '0 1rem 0 0', textAlign: 'center'}}}>
                Feel free to try our solution, we offer <b>$25</b> credit to all new users.
                Setting up a new project is super easy and if you need help we’ll
                make sure that you will get it just in time.
              </p>
              <ButtonSecondary
                title='get free account'
                style={{
                  width: '262px',
                  height: '56px',
                  fontWeight: 'bold',
                  fontSize: '22px',
                  color: '#004CA5',
                  marginLeft: '3.5rem',
                  borderRadius: '3px',
                  lineHeight: '53px',
                  boxShadow: '0 0 0 0 rgba(0,0,0,0.0)'
                }}
                mediaquery={{[presets.Desktop]: {
                    display: 'block', margin: 'auto !important', padding: '0 !important'
                  }}}
                mediaqueryPhablet={{[presets.Phablet]: { fontSize: '14px !important', height: '4rem !important', marginTop: '3rem !important', marginLeft: 'auto !important', width: '200px !important' }}}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
