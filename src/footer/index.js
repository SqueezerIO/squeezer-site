import React, { Component } from 'react';
import { Link } from 'gatsby';
import presets from '../utils/presets';
import ButtonPrimary from '../components/button/ButtonPrimary';
import BlankA from '../components/hyperlink';
import telegramImage from '../../static/images/footer/telegram-black.png';
import mediumImage from '../../static/images/footer/medium.png';
import playImage from '../../static/images/footer/play_black1.png';
import facebookImage from '../../static/images/footer/facebook-f-brands.svg';
import twitterImage from '../../static/images/footer/twitter-brands.svg';
import gitImage from '../../static/images/footer/github-brands.svg';

const footerItems = [
  {
    title: 'Products',
    items: [
      {
        name: 'Framework',
        path: '/framework-page'
      },
      {
        name: 'Platform',
        path: '/platform-page'
      },
      {
        name: 'Chainkit',
        path: '/chainkit-page'
      }
    ]
  },
  {
    title: 'Developers',
    items: [
      {
        name: 'Docs',
        path: '/'
      },
      {
        name: 'Examples',
        path: '/'
      },
      {
        name: 'Support',
        path: '/'
      },
      {
        name: 'Network status',
        path: '/'
      }
    ]
  },
  {
    title: 'Company',
    items: [
      {
        name: 'Careers',
        path: '/'
      },
      {
        name: 'Blog',
        path: '/'
      },
      {
        name: 'Press',
        path: '/'
      },
      {
        name: 'Team',
        path: '/'
      },
      {
        name: 'Terms & conditions',
        path: '/'
      }
    ]
  },
  {
    title: 'Connect',
    items: [
      {
        name: 'Twitter',
        path: '/'
      },
      {
        name: 'Youtube',
        path: '/'
      },
      {
        name: 'Github',
        path: '/'
      },
      {
        name: 'Linkedin',
        path: '/'
      }
    ]
  }
];

export default class Footer extends Component {
  renderColumn = (items) => (
    <div css={{display: 'flex', flexDirection: 'column', textTransform: 'none'}}>
      {items.map((item, index) => (
        <Link to={item.path} key={index} css={{
          color: '#004CA5',
          fontFamily: "Khula",
          fontSize: '1rem',
          fontWeight: 'normal',
          marginBottom: '.3rem',
          letterSpacing: '1px',
          ':link': {
            textDecoration: 'none'
          }
        }}>
          {item.name}
        </Link>
      ))}
    </div>
  );
  
  renderSocialIcon = (link, image) => (
    <li>
      <BlankA href={link}>
        <img css={{width: '25px', height: '25px'}} src={image} alt={image} />
      </BlankA>
    </li>
  );
  
  render() {
    return (
      <div css={{
        display: 'flex',
        marginTop: `2rem`,
        minHeight: `20vh`,
        flexWrap: 'wrap',
        justifyContent: 'center',
        [presets.Hd]: {
          marginTop: `8rem`,
          padding: '3rem',
          justifyContent: 'space-between',
        },
        [presets.Desktop]: {
          justifyContent: 'center',
          marginTop: '10rem',
        },
        [presets.Phablet]: {
          alignContent: 'center',
          display: 'block',
          marginTop: '50rem',
        },
        [presets.Mobile]: {
          marginTop: '70rem',
        }
      }}>
        <div css={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {footerItems.map(({title, items}) => (
            <div key={title} css={{
              margin: '0 1rem',
              width: '10rem',
              [presets.Hd]: {
                margin: '.5rem 2rem',
                textAlign: 'center',
              },
              [presets.Phablet]: {
                textAlign: 'center',
                width: '15rem',
              }
            }}>
              <div css={{
                textTransform: 'uppercase',
                color: '#454545',
                fontFamily: "DIN Condensed",
                fontSize: '1.4rem',
                fontWeight: 'normal',
                letterSpacing: '.9px',
                marginBottom: '1rem'
              }}>
                {title}
              </div>
              {this.renderColumn(items)}
            </div>
        ))}
          <div  css={{display: 'flex', flexDirection: 'column', width: '15rem', justifyContent: 'space-between', marginLeft: '-.5rem',
            [presets.Hd]: {display: 'block', margin: 'auto', marginTop: '1rem', textAlign: 'center',},
            [presets.Mobile]: {width: '12rem'}
          }}>
            <h3 css={{color: '#454545', fontFamily: "Khula", fontSize: '20px', fontWeight: 'normal', letterSpacing: '1.01px', margin: 0}}>
              Sign up for our newsletter to stay up to date.
            </h3>
            <div css={{display: 'flex', height: '2rem', [presets.Hd]: {marginTop: '1rem'}, [presets.Mobile]: { display: 'block', margin: '1rem'}}}>
              <input
                type="text"
                placeholder='Email address'
                css={{display: 'flex', 	border: '1px solid #DADADA', padding: '.5rem'}}
              />
              <ButtonPrimary title='sign up' style={{display:'flex', width: '5.6rem', lineHeight: '35px', justifyContent: 'center', fontSize: '.7rem'}}
              />
            </div>
            <ul css={{listStyle: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 0,
              [presets.Hd]: {marginTop: '2rem'}, [presets.Mobile]: {marginTop: '4rem'}
            }}>
              {this.renderSocialIcon('', twitterImage)}
              {this.renderSocialIcon('', facebookImage)}
              {this.renderSocialIcon('', gitImage)}
              {this.renderSocialIcon('', mediumImage)}
              {this.renderSocialIcon('', telegramImage)}
              {this.renderSocialIcon('', playImage)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
