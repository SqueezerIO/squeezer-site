import React, { Component } from 'react';
import presets from "../../utils/presets";

import squeezerIcon from '../../../static/images/Squeezer_Assets_framework_page/Squeezer-Logo-Icon.svg';
import paymentImage from '../../../static/images/Squeezer_Assets_framework_page/payment.2c49c711.svg';
import bankingImage from '../../../static/images/Squeezer_Assets_framework_page/banking.svg';
import votingImage from '../../../static/images/Squeezer_Assets_framework_page/voting-icon.svg';

export default class ProductsMultipleApproaches extends Component {
  renderApproach = (title, image, description) => {
    return (
      <div css={{
        height: '200px',
        borderRadius: '3px',
        padding: '1.5rem',
      }}>
        <div css={{ display: 'flex' }}>
          <img src={image} alt='image' css={{marginRight: '1rem', marginBottom: 0, height: '64px', width: '64px'}} />
          <h3 css={{
            color: '#023775',	fontFamily: "DIN Condensed",	fontSize: '23px',	fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '.33px', lineHeight: '28px', marginTop: '5px', whiteSpace: 'no-wrap'
          }}>{title}</h3>
        </div>
        <p css={{color: '#023775', fontFamily: 'Khula', fontSize: '16px', letterSpacing: '.7px', lineHeight: '22px', height: '120px', width: '225px', fontWeight: 200, marginLeft: '80px'}}>
          {description}
        </p>
      </div>
    );
  };
  
  render() {
    return (
      <div css={{ minHeight: `50vh`}}>
        <div css={{margin: '0 auto', maxWidth: '1200px', position: 'relative'}}>
          <div css={{position: 'absolute', zIndex: '200'}}>
            <div css={{display: 'flex', width: '900px'}}>
              <h2 css={{
                fontSize: '45px',
                color: '#023775',
                fontFamily: 'DIN Condensed',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '0.65px',
                lineHeight: '54px',
                width: '200px',
                marginLeft: '70px',
                marginTop: '100px'
              }}>
                Multiple approaches
              </h2>
              <img src={squeezerIcon} alt="squeezerIcon" css={{ marginLeft: '250px', marginTop: '25px'}}/>
            </div>
  
            <div css={{display: 'flex', width: '900px'}}>
              <div css={{display: 'flex', flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                {this.renderApproach('blockchain payments', paymentImage, 'Easy integration for crypto payments on retail businesses.')}
                {this.renderApproach('voting systems', votingImage, 'Blockchain based for top-level safety and voting process decentralization.')}
              </div>
              <div css={{display: 'flex', flex: 1, flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                {this.renderApproach('secure authentication', bankingImage, 'Decentralized identity is the next evolution step from the traditional login systems.')}
                {this.renderApproach('banking', bankingImage, 'Implementing the security and transparency aspects of blockchain technology into their transaction processes.')}
              </div>
            </div>
            </div>
        </div>
        <div
            css={{
              margin: '0',
              padding: 0,
              maxWidth: '100vw',
              minHeight: `80vh`,
              position: 'relative',
              zIndex: '1',
              opacity: '0.3',
              clipPath: 'polygon(0 9%, 100% 0, 100% 90%, 0 100%)',
              backgroundColor: '#E6F4FF',
              [presets.Hd]: {
                minHeight: `80vh`,
              },
              [presets.Desktop]: {
                width: 0,
                height: 0,
                minHeight: `0vh`,
              }
            }}>
        </div>
      </div>
    );
  }
}