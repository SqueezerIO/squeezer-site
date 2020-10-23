import React, { Component } from 'react';
import { Link } from 'gatsby';

import presets from '../../utils/presets';
import assetImage from '../../../static/images/homeSVG/green.svg';
import arrow from '../../../static/images/homeSVG/icon_arrowGreen.svg';

export default class DeveloperSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: '0 auto',
          marginTop: '12rem',
          maxWidth: '1200px',
          minHeight: '20vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          [presets.Desktop]: {
            marginTop: '5rem',
            flexDirection: 'column',
            alignItems: 'center',
          },
          [presets.Phablet]: { marginTop: '12rem'}
        }}
      >
        <div css={{display: 'flex', marginRight: '122px', [presets.Desktop]: {
            display: 'block', height: '260px', marginRight: 0
          }}}>
          <div css={{width: '50px', height: '80px', display: 'inline-block',float: 'left'}}>
            <img src={assetImage} alt='assetImage' css={{width: '50px', height: '40px'}} />
          </div>
          <div css={{marginLeft: '20px', width: '250px', [presets.Hd]: { width: 'auto', height: 'auto'}}}>
            <p css={{
              color: '#004CA5',	fontFamily: 'DIN Condensed',	fontSize: '45px',	letterSpacing: '1px',
              lineHeight: '54px', textTransform: 'uppercase',
            }}>tuned for <br></br> developers</p>

            <div>
              <Link to='' css={{display: 'flex', alignContent: 'center', width: '100%', ':link': {textDecoration: 'none'}, ':hover': {
                  cursor: 'pointer'
                }}}>
                <div css={{color: '#00DE72', fontSize: '22px', fontWeight: '600', width: '189px', textTransform: 'uppercase', fontFamily: 'Nunito', letterSpacing: '1px', whiteSpace: 'no-wrap'}}>check the docs</div>
                <img src={arrow} alt='arrow' css={{width: '40px', height: '23px', marginLeft: '10px'}} />
              </Link>
            </div>
          </div>
        </div>

        <div css={{display: 'flex',
          height: '263px',
          width: '798px',
          padding: '29px 47px 47px 26px',
          color: '#004CA5',
          fontFamily: 'Nunito',
          borderRadius: '3px',
          backgroundColor: '#E6F4FF',
          boxShadow: '0 2px 10px 0 rgba(89,89,89,0.5)',
          fontSize: '20px',
          letterSpacing: '1px',
          lineHeight: '27px',
          fontWeight: 200,
          [presets.Hd]: { width: 'auto', height: 'auto'},
          [presets.Desktop]: {
            display: 'block',
            marginTop: 0,
            height: 'auto',
            width: 'auto'
          }
        }}>
          Squeezer is the ultimate tool for creating scalable dApps and integrate them
          into existent business infrastructures.
          <br/> <br/>
          A payment system through blockchain, a voting platform, frictionless login,
          Squeezer has it all. We provide all the tools you need to create serverless
          dApps, attach smart contracts and deploy them with one click.
        </div>
      </div>
    );
  }
}
