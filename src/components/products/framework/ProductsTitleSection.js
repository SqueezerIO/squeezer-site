import React, { Component } from 'react';
import ButtonPrimary from "../../button/ButtonPrimary";
import presets from "../../../utils/presets";
import ButtonSecondary from "../../button/ButtonSecondary";
import frameworkIcon from "../../../../static/images/homeSVG/framework.svg";
import platformIcon from '../../../../static/images/homeSVG/platform-icon.svg';
import chainkitIcon from '../../../../static/images/homeSVG/chainkit-icon.svg';

export default class ProductsTitleSection extends Component {
  renderIcon = (title) => {
    switch (title) {
      case 'Framework':
        return <img src={frameworkIcon} alt='image' css={{marginRight: '.5rem', height: '40px', width: '40px'}} />;
      case 'Platform':
        return <img src={platformIcon} alt='image' css={{marginRight: '.5rem', height: '40px', width: '40px'}} />;
      case 'Chainkit':
        return <img src={chainkitIcon} alt='image' css={{marginRight: '.5rem', height: '40px', width: '40px'}} />;
      default:
        return null;
    }
  };

  render() {
    const { product, image, title, description, subtitles } = this.props;

    return (
    <div css={{ minHeight: '50vh'}}>
      <div css={{margin: '0 auto', maxWidth: '1200px', position: 'relative'}}>
        <div css={{position: 'absolute', zIndex: '200', top: '20%', left: '2%',
          [presets.Desktop]: {position: 'relative'}}}>
          <div css={{display: 'flex', marginTop: '30px', width: '100%', flexWrap: 'wrap', justifyContent: 'center',
            [presets.Hd]: {}}}>
            <div css={{display: 'flex', flex: 1, width: '600px', flexDirection: 'column', marginTop: '80px',
              [presets.Hd]: {
                alignItems: 'center',
                textAlign: 'center',
                margin: '10px auto auto auto',
              },
              [presets.Desktop]: {
                margin: 'auto',
                padding: 0
              },
              [presets.Phablet]: {
                width: '380px'
              },
            }}>
              <h1 css={{
                fontSize: '60px',
                color: '#023775',
                fontFamily: 'DIN Condensed',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '0.87px',
                lineHeight: '72px',
                width: '550px',
                [presets.Phablet]: {
                  width: '380px'
                },
                [presets.Mobile]: {
                  width: '300px'
                },
              }} dangerouslySetInnerHTML={{ __html: title }}>
              </h1>

              <p css={{
                height: '93px',
                width: '400px',
                color: '#023775',
                fontFamily: 'Khula',
                fontSize: '23px',
                letterSpacing: '1px',
                lineHeight: '31px',
                fontWeight: '200',
                [presets.Phablet]: {
                  width: '360px'
                },
                [presets.Mobile]: {
                  width: '300px'
                },
              }}>{description}</p>

              <div css={{left: 'auto', right: 'auto', marginTop: '1rem'}}>
                <ButtonPrimary
                  title='get free account'
                  onClick={() => console.log('clicked free')}
                  style={{ width: '163px', height: '39px'}}
                  mediaquery={{[presets.Desktop]: {
                      display: 'block', margin: 'auto', width: '9rem !important'
                    }}}
                  mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
                />
                <ButtonSecondary
                  title='check the docs'
                  onClick={() => console.log('clicked docs')}
                  style={{ marginLeft: '17px', width: '163px', height: '39px'}}
                  mediaquery={{[presets.Desktop]: {
                      display: 'block', margin: 'auto !important', width: '9rem !important', marginTop: '1rem !important'
                    }}}
                  mediaqueryPhablet={{[presets.Phablet]: {fontSize: '12px !important'}}}
                />
              </div>
            </div>
            <div css={{display: 'flex', flex: 1, width: '500px', marginLeft: '100px', flexWrap: 'wrap',
              [presets.Hd]: {
                justifyContent: 'center',
                width: '100%',
                marginLeft: 0,
                marginTop: '40px'
              },}}>
              <div css={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '500px', flexWrap: 'wrap', marginLeft: '40px',
                [presets.Phablet]: {
                  justifyContent: 'space-around',
                  marginLeft: '0px'
                }}}>
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
                  marginTop: '12px',

                }}>{item}</h2>)}
                <div css={{ display: 'inline-flex', flexWrap: 'wrap'}}>
                  {this.renderIcon(product)}
                  <h3 css={{
                    height: '35px', color: '#023775',	fontFamily: 'Khula', fontSize: '26px',	fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '.78px', lineHeight: '35px', marginTop: '7px'
                  }}>{product}</h3>
                </div>
              </div>

              <img src={image} alt='frameworkIStock' css={{height: '526px', width: '559px', marginTop: '40px'}} />
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          margin: '0',
          padding: 0,
          maxWidth: '100vw',
          minHeight: `64vh`,
          position: 'relative',
          zIndex: '1',
          opacity: '0.3',
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
          backgroundColor: '#E6F4FF',
          [presets.Hd]: {
            minHeight: `80vh`,
          },
          [presets.Desktop]: {
            width: 0,
            height: 0,
            minHeight: `0vh`,
          }
        }}
      >
      </div>
    </div>
    );
  }
}
