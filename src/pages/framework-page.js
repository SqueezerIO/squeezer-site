import React, { Component } from 'react';
import Layout from '../layouts';
import presets from '../utils/presets';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from '../components/button/ButtonSecondary';
import StartBuildingSection from '../components/home/StartBuildingSection';
import frameworkIcon from '../../static/images/homeSVG/framework.svg';
import frameworkIStock from '../../static/images/products/iStock-910860194-background.svg';

const subtitles = ['use cases'];

export default class FrameworkPage extends Component {
  render() {
    return (
      <Layout>
        <div
          css={{
            margin: '0',
            padding: 0,
            maxWidth: '100vw',
            minHeight: `50vh`,
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            opacity: '0.3',
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
            backgroundColor: '#E6F4FF',
            [presets.Desktop]: {
              marginTop: `1rem`,
              padding: 0,
            }
          }}
        >
        </div>
        <div css={{position: 'absolute', top: '10%', left: '20%'}}>
          <div css={{display: 'flex', width: '100%', flexWrap: 'wrap'}}>
            <div css={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: '80px'}}>
              <h1 css={{
                fontSize: '60px',
                color: '#023775',
                fontFamily: 'DIN Condensed',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '0.87px',
                lineHeight: '72px'
              }}>one tool to<br/>build and deploy</h1>
              
              <p css={{
                height: '93px',
                width: '400px',
                color: '#023775',
                fontFamily: 'Khula',
                fontSize: '23px',
                letterSpacing: '1px',
                lineHeight: '31px',
              }}>The Squeezer Framework is an open source CLI for building and deploying decentralized applications.</p>
  
              <div css={{left: 'auto', right: 'auto', marginTop: '3rem'}}>
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
            <div css={{display: 'flex', flex: 1, marginLeft: '100px', flexWrap: 'wrap', width: '500px', backgroundColor: 'red'}}>
              <div css={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '500px', flexWrap: 'wrap'}}>
                {subtitles.map(item => <h2 key={item} css={{
                  height: '24px',
                  width: '97px',
                  color: '#023775',
                  fontFamily: 'Khula',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  letterSpacing: '0.87px',
                  lineHeight: '24px',
                  textTransform: 'uppercase',
                  marginTop: '12px'
                }}>{item}</h2>)}
                <div css={{ display: 'inline-flex', alignItems: 'start' }}>
                  <img src={frameworkIcon} alt='image' css={{marginRight: '.5rem', height: '40px', width: '40px'}} />
                  <h3 css={{
                    height: '35px', width: '165px', color: '#023775',	fontFamily: 'Khula', fontSize: '26px',	fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '.78px', lineHeight: '35px', marginTop: '7px'
                  }}>FRAMEWORK</h3>
                </div>
              </div>
              
              <img src={frameworkIStock} alt='frameworkIStock' css={{height: '526px', width: '559px'}} />
            </div>
          </div>
        </div>
        
        <StartBuildingSection />
      </Layout>
    );
  }
}
