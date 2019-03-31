import React, { Component } from 'react';
import presets from "../../../utils/presets";
import branchImage from '../../../../static/images/Squeezer_Assets_platform_page/iconfinder_thin-1176_fork.svg';
import locationImage from '../../../../static/images/Squeezer_Assets_platform_page/iconfinder_thin-1176_international_location_1781157.svg';
import intuitiveImage from '../../../../static/images/Squeezer_Assets_platform_page/intuitive.svg';
import testingImage from '../../../../static/images/Squeezer_Assets_platform_page/testing.svg';
import asset from '../../../../static/images/Squeezer_Assets_framework_page/Asset1@30x.svg';

export default class FeaturesSection extends Component {
  renderFeature = (title, image, description) => (
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
          width: '184px', color: '#023775',	fontFamily: 'DIN Condensed',	fontSize: '25px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '30px', marginTop: '-5px', whiteSpace: 'no-wrap',
          [presets.Phablet]: {marginTop: '20px'}
        }}>{title}</h3>
      </div>
      <p css={{color: '#023775', fontFamily: 'Khula', fontSize: '18px', letterSpacing: '.87px', lineHeight: '24px', height: '48px', width: '423px', fontWeight: 200, marginLeft: '80px', marginTop: '-25px',
        [presets.Phablet]: {width: '300px', marginTop: '20px', marginLeft: '-4px', textAlign: 'center'},
        [presets.Mobile]: {width: '280px'}
      }}>
        {description}
      </p>
    </div>
  );

  render() {
    return (
      <div id='platform-features' css={{ minHeight: '50vh'}}>
        <div css={{margin: '0 auto', maxWidth: '1200px', position: 'relative'}}>
          <div css={{position: 'absolute', width: '100%', zIndex: '200', padding: '80px', display: 'flex', flexWrap: 'wrap', [presets.Desktop]: {position: 'relative', display: 'flex', justifyContent: 'center', padding: '0'}}}>
            <div css={{height: '100%', width: '520px', position: 'relative'}}>
              <div css={{
                height: '279px', width: '514px', borderRadius: '1px', backgroundColor: '#023775',
                [presets.Hd]: {
                  marginTop: 0,
                  width: 0,
                  height: 0
                },
              }} >
              </div>
              <div css={{
                position: 'absolute',
                height: '279px',
                width: '514px',
                left: '-2%',
                top: '-2%',
                right: '2%',
                borderRadius: '1px',
                backgroundColor: '#0075FE',
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
                  marginTop: 0,
                  height: 'auto',
                  width: '100%',
                  top: 0,
                  right: 0,
                  left: 0
                },
                [presets.Desktop]: {
                  marginTop: '5rem'
                },
                [presets.Phablet]: {
                  backgroundColor: 'transparent',
                  color: '#0075FE',
                  fontSize: '30px',
                  display: 'block',
                  padding: 0,
                  textAlign: 'center',
                }
              }}
              >
                POWERFUL FEATURES TO IMPROVE DEPLOYMENT
                WORKFLOW & SPEED
              </div>
              <div css={{display: 'flex', marginTop: '100px', [presets.Hd]: {width: 0, height: 0}}}>
                <img src={asset} alt="asset" css={{width: '359px', height: '300px', marginLeft: '-100px'}}/>
                <img src={asset} alt="asset" css={{width: '359px', height: '300px', marginLeft: '-230px', marginTop: '-20px'}}/>
                <img src={asset} alt="asset" css={{width: '359px', height: '300px', marginLeft: '-250px'}}/>
              </div>
            </div>
            <div css={{height: '100%', width: '520px', display: 'flex', flexDirection: 'column', [presets.Hd]: {marginTop: '15rem'},
              [presets.Phablet]: {marginTop: '10rem', alignItems: 'center'}}}>
              {this.renderFeature('Intuitive deployments', intuitiveImage, 'Our platform will ensure that only services where code was changed will be choosed for deploy.')}
              {this.renderFeature('Multi provider', locationImage, 'Select the provider and the region where you want to deploy your dApp.')}
              {this.renderFeature('Smart testing', testingImage, 'Run tests against new or modified services, your QA team will love this one.')}
              {this.renderFeature('Branches staging', branchImage, 'Boost project development cycle by allowing developers to work on multiple branches.')}
            </div>
          </div>
        </div>

        <div
          css={{
            margin: '0 auto',
            padding: 0,
            maxWidth: '1200px',
            minHeight: '71vh',
            position: 'relative',
            zIndex: '1',
            opacity: '0.3',
            marginTop: '20rem',
            backgroundColor: '#E6F4FF',
            [presets.Hd]: {
              minHeight: '80vh',
            },
            [presets.Desktop]: {
              width: 0,
              height: 0,
              minHeight: '0vh',
            }
          }}>
        </div>
      </div>
    );
  }
}
