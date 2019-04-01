import React, { Component } from 'react';
import { css } from 'glamor';
import assetImage from '../../../../static/images/homeSVG/green.svg';
import presets from '../../../utils/presets';

export default class PricingSection extends Component {
  render() {
    const { prices, title1, title2, id } = this.props;
    const cellStyle = css({height: '92px', width: '240px', backgroundColor: '#F7FBFF'});
    const intervalStyle = css({marginTop: '7%',height: '24px', color: '#023775', fontFamily: 'Khula',	fontSize: '18px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '24px'});
    const priceStyle = css({marginTop: '7%', height: '24px', color: '#0075FE', fontFamily: 'Khula',	fontSize: '18px',	fontWeight: '200', letterSpacing: '.87px', lineHeight: '24px'});

    return (
      <div id={id} css={{
        margin: '0 auto',
        padding: 0,
        maxWidth: '1200px',
        minHeight: '47vh',
        [presets.Hd]:{
          padding: '0 8rem'
        },
        [presets.Desktop]:{
          padding: '0 1rem'
        },
      }}>
        <div css={{display: 'flex', [presets.Hd]:{justifyContent: 'center', marginTop: '100px'}}}>
          <img src={assetImage} alt={assetImage} css={{marginTop: '-65px'}}/>
          <h2 css={{
            width: '243px', color: '#004CA5',	fontFamily: 'DIN Condensed',	fontSize: '45px',	fontWeight: 'bold', letterSpacing: '1px', lineHeight: '54px', marginLeft: '13px', marginBottom: '73px'
          }}>PAY-AS-YOU-GO</h2>
        </div>

        <div css={{display: 'flex',maxWidth: '1200px', justifyContent: 'center', textAlign: 'center',
          [presets.Hd]: {flexDirection: 'column', marginTop: '80px'}
        }}>
          <div css={{width: '240px'}}>
          </div>
          {prices.map(({id}) => (
            <div css={{width: '240px', height: '53px', color: '#0075FE', fontFamily: 'Khula',	fontSize: '25px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '33px',
              [presets.Hd]:{width: '100px', height: '92px', lineHeight: '92px', verticalAlign: 'middle', marginBottom: '20px'},
              [presets.Phablet]: {fontSize: '20px', width: '58px'}
            }}>
              Tier {id}
            </div>
          ))}
        </div>

        <div css={{display: 'flex',maxWidth: '1200px', justifyContent: 'center', textAlign: 'center', [presets.Hd]: {flexDirection: 'column'}}}>
          <div css={{display: 'flex', flexDirection: 'column',[presets.Hd]:{flexDirection: 'row', justifyContent: 'end', margin: 'auto', marginTop: '-560px', marginLeft: '150px',
              [presets.Phablet]: {marginLeft: '80px'}
            }}}>
            <h3 css={{height: '92px', marginBottom: '20px', backgroundColor: '#F7FBFF', width: '240px',
              color: '#023775', fontFamily: 'Khula',	fontSize: '18px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '92px', verticalAlign: 'middle',
              [presets.Hd]: {marginRight: '20px'}, [presets.Phablet]:{marginRight: '100px'}
            }} dangerouslySetInnerHTML={{ __html: title1 }}>
            </h3>
            <h3 css={{height: '92px', backgroundColor: '#F7FBFF', width: '240px',
              color: '#023775', fontFamily: 'Khula',	fontSize: '18px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '92px', verticalAlign: 'middle',
            }}>{title2}</h3>
          </div>
          {prices.map(item => (
            <div css={{display: 'flex', flexDirection: 'column', [presets.Hd]: {flexDirection: 'row', justifyContent: 'end', margin: 'auto', marginLeft: '150px',
                [presets.Phablet]: {marginLeft: '80px'}
              }}}>
              <div css={{height: '92px', backgroundColor: '#F7FBFF', marginBottom: '20px', [presets.Hd]: {marginRight: '20px', width: '240px'}, [presets.Phablet]:{marginRight: '100px'}}}>
                <div className={intervalStyle}>{item.interval1}</div>
                <div className={priceStyle} dangerouslySetInnerHTML={{ __html: item.price1 }}>
                </div>
              </div>

              <div className={cellStyle}>
                <div className={intervalStyle}>{item.interval2}</div>
                <div className={priceStyle} dangerouslySetInnerHTML={{ __html: item.price2 }}>
                </div>
              </div>
            </div>
          ))}

          <h3 css={{display: 'none', [presets.Phablet]: {display: 'block', height: '92px', backgroundColor: '#F7FBFF', width: '240px', marginLeft: '80px',
            color: '#023775', fontFamily: 'Khula',	fontSize: '18px',	fontWeight: 'bold', letterSpacing: '.87px', lineHeight: '92px', verticalAlign: 'middle'}
          }}>{title2}</h3>

          {prices.map(item => (
            <div css={{display: 'none', [presets.Phablet]: {display: 'flex', flexDirection: 'row', justifyContent: 'end', marginLeft: '0'}}}>
              <div css={{height: '92px'}}></div>
              <div css={{
                display: 'flex',
                flexDirection: 'column',
                width: '58px',
                height: '92px',
                lineHeight: '92px',
                verticalAlign: 'middle',
                marginBottom: '20px',
                color: '#0075FE',
                fontFamily: 'Khula',
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '.87px',
                marginRight: '284px'
              }}>
                Tier {item.id}
                <div css={{marginLeft: '80px', marginTop: '-100px'}}>
                  <div className={cellStyle}>
                    <div className={intervalStyle} style={{lineHeight: '63px'}}>{item.interval2}</div>
                    <div className={priceStyle} style={{lineHeight: '49px'}} dangerouslySetInnerHTML={{ __html: item.price2 }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}
