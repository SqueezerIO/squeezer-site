import React, { Component } from 'react';
import { css } from 'glamor';

import presets from '../../utils/presets';
import productsImage from '../../../static/images/home/products.png';
import Card from '../card';
import frameworkIcon from '../../../static/images/home/products/framework-icon.png';
import platformIcon from '../../../static/images/home/products/icon_collaborate.png';
import blockchainIcon from '../../../static/images/home/products/icon_blockchain.png';

const cardItems = [
  {
    title: 'framework',
    image: frameworkIcon,
    description: 'Convenient way to build and debug dApps on your local machine. Writing production-ready code is a breeze.',
    path: '/framework-page'
  },
  {
    title: 'platform',
    image: platformIcon,
    description: 'Collaborate with your team, use continuous integration and deploy apps with just a simple code push.',
    path: '/platform-page'
  },
  {
    title: 'chainkit',
    image: blockchainIcon,
    description: 'Send, receive or react to blockchain transactions. ChainKit is the easiest and securest way to access blockchain as a service.',
    path: '/chainkit-page'
  }
];

export default class ProductsSection extends Component {
  render() {
    const cardsContainer = css({
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'center',
      [presets.Desktop]: {
        display: 'block',
        marginTop: 0,
      }
    });
    
    return (
      <div
        css={{
          margin: `0 auto`,
          marginTop: `5rem`,
          maxWidth: `100vh`,
          minHeight: `20vh`,
          position: 'relative',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          [presets.Desktop]: {
            marginTop: `20rem`,
          },
          [presets.Phablet]: { marginTop: `12rem`}
        }}
      >
        <img
          src={productsImage}
          css={{
            maxWidth: '100vh',
            height: 'auto',
            width: 'auto \ 9',
            [presets.Desktop]: {
              transform: 'rotate(90deg)',
            },
          }}
        />
    
        <div css={{
          position: 'absolute',
          top: '18%',
          left: 0,
          right: 0,
          [presets.Desktop]: {
            top: '-10rem',
          }
        }}>
          <div className={`${cardsContainer}`}>
            {cardItems.map(({title, image, description, path}) => (
              <Card key={title} title={title} image={image} description={description} path={path}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
