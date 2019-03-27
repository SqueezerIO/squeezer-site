import React, { Component } from 'react';
import { css } from 'glamor';

import presets from '../../utils/presets';
import productsImage from '../../../static/images/home/products.png';
import Card from '../card';
import frameworkIcon from '../../../static/images/homeSVG/framework.svg';
import platformIcon from '../../../static/images/homeSVG/platform-icon.svg';
import blockchainIcon from '../../../static/images/homeSVG/chainkit-icon.svg';

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
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 'inherit',
      alignContent: 'center',
      marginTop: '69px',
      flexWrap: 'wrap',
      [presets.Desktop]: {
        display: 'block',
        marginTop: 0,
      }
    });

    return (
      <div
        css={{
          margin: '0 auto',
          marginTop: '5rem',
          minHeight: '20vh',
          maxWidth: '100vw',
          position: 'relative',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          [presets.Desktop]: {
            marginTop: '20rem',
          },
          [presets.Phablet]: { marginTop: '12rem'}
        }}
      >
        <img
          src={productsImage}
          css={{
            // height: 'auto',
            // width: 'auto \ 9',
            position: 'absolute',
            [presets.Desktop]: {
              transform: 'rotate(90deg)',
            },
          }}
        />

        <div className={`${cardsContainer}`}>
          {cardItems.map(({title, image, description, path}) => (
            <Card key={title} title={title} image={image} description={description} path={path}/>
          ))}
        </div>
      </div>
    );
  }
}
