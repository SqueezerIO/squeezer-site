import React, { Component } from 'react';
import { Link } from 'gatsby';

import presets from '../../utils/presets';
import assetImage from '../../../public/images/home/docs/asset_6@4x.png';
import checkDocs from '../../../public/images/home/docs/check_docs.png';
import arrow from '../../../public/images/home/products/icon_greenArrow.png';

export default class DeveloperSection extends Component {
  render() {
    return (
      <div
        css={{
          margin: `0 auto`,
          marginTop: `2rem`,
          maxWidth: `100vh`,
          minHeight: `20vh`,
          position: 'relative',
          display: 'flex',
          padding: '3rem',
          [presets.Desktop]: {
            marginTop: `20rem`,
            flexDirection: 'column',
            alignItems: 'center',
          },
          [presets.Phablet]: { marginTop: `12rem`}
        }}
      >
        <div css={{display: 'flex', flex: 1/3, marginRight: '5rem', [presets.Desktop]: {
            display: 'block', height: '260px', marginRight: 0
          }}}>
          <div css={{[presets.Desktop]: {display: 'flex', alignContent: 'center', justifyContent: 'center'}}}>
            <img src={assetImage} alt='assetImage' css={{width: '40px', height: '40px', position: 'absolute', left: '3%',
              [presets.Desktop]: {position: 'relative', left: '7%'}}} />
            <img src={assetImage} alt='assetImage' css={{width: '40px', height: '40px'}} />
          </div>
          <p css={{
            color: '#004CA5',	fontFamily: 'DIN Condensed',	fontSize: '45px',	letterSpacing: '1px',
            lineHeight: '54px', textTransform: 'uppercase', marginLeft: '20px'
          }}>tuned for <br></br> developers</p>
      
          <div css={{position: 'absolute', bottom: '7rem', left: '6.5rem', [presets.Desktop]: {
              position: 'relative', marginTop: '8rem', left: 0
            }}}>
            <Link to='' css={{display: 'flex', alignContent: 'center', ':hover': {
                cursor: 'pointer'
              }}}>
              <img src={checkDocs} alt='checkDocs' css={{height: '16px', marginTop: '.2rem'}} />
              <img src={arrow} alt='arrow' css={{marginLeft: '1rem'}} />
            </Link>
          </div>
        </div>
    
        <div css={{display: 'flex',
          flex: 2/3,
          padding: '2rem',
          color: '#004CA5',
          fontFamily: 'Khula',
          height: 'auto',//'243px',
          borderRadius: '3px',
          backgroundColor: '#E6F4FF',
          boxShadow: '0 2px 10px 0 rgba(89,89,89,0.5)',
          [presets.Desktop]: {
            display: 'block',
            marginTop: 0,
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
