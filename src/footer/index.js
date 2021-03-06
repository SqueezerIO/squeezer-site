import React, { Component } from 'react';
import Link from '../components/link';
import presets from '../utils/presets';
import ButtonPrimary from '../components/button/ButtonPrimary';
import BlankA from '../components/hyperlink';
import telegramImage from '../../static/images/footer/telegram-footer.svg';
import mediumImage from '../../static/images/footer/medium-footer.svg';
import playImage from '../../static/images/footer/play_black-footer.svg';
import facebookImage from '../../static/images/footer/facebook-footer.svg';
import twitterImage from '../../static/images/footer/twitter-footer.svg';
import gitImage from '../../static/images/footer/github-footer.svg';

const footerItems = [
  // {
  //   title: 'Products',
  //   items: [
  //     {
  //       name: 'Swap',
  //       path: '#'
  //     },
  //     {
  //       name: 'Add Liquidity',
  //       path: '#'
  //     },
  //     {
  //       name: 'Claim',
  //       path: '#'
  //     }
  //   ]
  // },
  // {
  //   title: 'Developers',
  //   items: [
  //     {
  //       name: 'Docs',
  //       path: 'https://docs.squeezer.network'
  //     },
  //     {
  //       name: 'Examples',
  //       path: 'https://github.com/SqueezerIO/squeezer#example-projects'
  //     },
  //     {
  //       name: 'Support',
  //       path: 'https://gitter.im/SqueezerIO/squeezer/'
  //     },
  //     // {
  //     //   name: 'Network status',
  //     //   path: '/'
  //     // }
  //   ]
  // },
  {
    title: 'Links',
    items: [
      // {
      //   name: 'Careers',
      //   path: '/'
      // },
      // {
      //   name: 'Blog',
      //   path: '/'
      // },
      // {
      //   name: 'Press',
      //   path: '/'
      // },
      // {
      //   name: 'Team',
      //   path: '/company/team'
			// },
			{
				name: 'Tokens Withdraw',
				path: 'https://forms.gle/vpnQfeG2WgW1x99E8'
			},
      {
        name: 'Privacy Policy',
        path: '/privacy-policy'
      },
      {
        name: 'Terms of Service',
        path: '/terms-of-service'
      },
      {
        name: 'About Cookies',
        path: '/about-cookies'
      },
      // {
      //   name: 'White Paper',
      //   path: '../../docs/Squeezer_White_Paper.pdf'
      // },
      // {
      //   name: 'Pitch Deck',
      //   path: '../../docs/Squeezer_Pitch_Deck.pdf'
      // },
      // {
      //   name: 'Token Terms',
      //   path: '../../docs/token-terms.pdf'
      // }
    ]
  },
  {
    title: 'Connect',
    items: [
      {
        name: 'Twitter',
        path: 'https://twitter.com/SqueezerIO'
      },
      // {
      //   name: 'Youtube',
      //   path: 'https://www.youtube.com/channel/UC4oipFLgQW7e98Gei-7NEIQ'
      // },
      {
        name: 'Github',
        path: 'https://github.com/SqueezerIO'
      },
      {
        name: 'Linkedin',
        path: 'https://www.linkedin.com/company/squeezerio/'
      }
    ]
  }
];

export default class Footer extends Component {
  renderColumn = (items) => (
    <div css={{ display: 'flex', flexDirection: 'column', textTransform: 'none' }}>
      {items.map((item, index) => (
        <Link to={item.path} key={index} css={{
          color: '#b7b8bb',
          fontFamily: "Nunito",
          fontSize: '16px',
          fontWeight: '200',
          marginBottom: '.3rem',
          letterSpacing: '.96px',
          lineHeight: '26px',
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
        <img css={{ width: '25px', height: '25px' }} src={image} alt={image} />
      </BlankA>
    </li>
  );

  render() {
    return (
      <div id="footer" css={{
				backgroundColor: '#172125',
				marginTop: '2rem',
				padding: '100px 0px',
        // marginBottom: '4rem',
        minHeight: '20vh',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        [presets.Hd]: {
          marginTop: '8rem',
          padding: '3rem',
          justifyContent: 'space-between',
        },
        [presets.Desktop]: {
          justifyContent: 'center',
          marginTop: '10rem',
        },
        [presets.Phablet]: {
          alignContent: 'center', display: 'block', marginTop: '30rem',
        }
      }}>
        <div css={{ display: 'flex', maxWidth:'1200px', margin: '0 auto', justifyContent: 'space-between' }}>
          {footerItems.map(({ title, items }) => (
            <div key={title} css={{
              // margin: '0 1rem',
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
                color: '#FFFFFF',
                fontFamily: "Nunito",
                fontSize: '16px',
                fontWeight: '200',
                letterSpacing: '.9px',
                lineHeight: '24px',
                marginBottom: '1rem'
              }}>
                {title}
              </div>
              {this.renderColumn(items)}
            </div>
          ))}
          <div css={{
            display: 'flex', width: '327px', justifyContent: 'space-between', marginLeft: '-.5rem',
            [presets.Hd]: { display: 'block', margin: 'auto', marginTop: '1rem', textAlign: 'center', },
            [presets.Phablet]: { width: '280px' },
            [presets.Mobile]: { width: '12rem' }
          }}
          >
            {/* <h3 css={{ color: '#454545', fontFamily: "Nunito", fontSize: '20px', fontWeight: 'normal', letterSpacing: '1.01px', margin: 0 }}>
              Sign up for our newsletter to stay up to date.
                </h3> */}
            {/* <ButtonPrimary onClick={() => window.open('https://emailoctopus.com/lists/1a8d8062-792c-11e8-a3c9-06b79b628af2/forms/subscribe', '_blank')} title='Subscribe for newsletter' style={{ marginTop: '50px', marginBottom: '50px', padding: '3px 15px', display: 'flex', width: 'auto', lineHeight: '39px', justifyContent: 'center', fontSize: '15px', letterSpacing: '.9px' }} /> */}
            <ul css={{
              listStyle: 'none', width: '200px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 0,
              [presets.Hd]: { marginTop: '2rem' }, [presets.Mobile]: { marginTop: '4rem' }
            }}>
              {this.renderSocialIcon('https://twitter.com/SqueezerIO', twitterImage)}
              {this.renderSocialIcon('https://www.facebook.com/Squeezer.IO', facebookImage)}
              {this.renderSocialIcon('https://github.com/SqueezerIO', gitImage)}
              {this.renderSocialIcon('https://medium.com/@squeezer', mediumImage)}
              {this.renderSocialIcon('https://telegram.me/squeezerio', telegramImage)}
              {/* {this.renderSocialIcon('https://www.youtube.com/channel/UC4oipFLgQW7e98Gei-7NEIQ', playImage)} */}
            </ul>
          </div>
					<div css={{ fontFamily: "Nunito" }}>
              <a css={{ color: '#FFFFFF' }} href="mailto:info@squeezer.network?subject=Squeezer Inquiry">
                info@squeezer.network</a>
            </div>
        </div>
      </div>
    );
  }
}
