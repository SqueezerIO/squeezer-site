import React, { Component } from 'react';
import { css } from 'glamor';

import presets from '../../utils/presets';
import productsImage from '../../../static/images/home/products.png';
import Card from '../card';
import frameworkIcon from '../../../static/images/homeSVG/framework.svg';
import platformIcon from '../../../static/images/homeSVG/platform-icon.svg';
import chainkitIcon from '../../../static/images/homeSVG/chainkit-icon.svg';
import swapIcon from '../../../static/images/features/swap.svg';
import addLiquidityIcon from '../../../static/images/features/add-liquidity.svg';
import claimIcon from '../../../static/images/features/claim.svg';
import interIcon from '../../../static/images/features/inter.svg';
import lockIcon from '../../../static/images/features/lock.svg';
import scalableIcon from '../../../static/images/features/scalable.svg';

const cardItems = [
  {
    title: 'Assets Swap',
    image: swapIcon,
    description: 'Swap tokens between multiple protocols and assets from one single interface.',
    path: '#'
  },
  {
    title: 'Liquidity Provider',
    image: addLiquidityIcon,
    description: 'Add Liquidity on multiple protocol and chains, securely and manageable.',
    path: '#'
  },
  {
    title: 'Liquidity Claim',
    image: claimIcon,
    description: 'Claim liquidity instantly, trough a single interface across multiple protocol and platforms.',
    path: '#'
	},
	{
    title: 'Protocol Interoperability',
    image: interIcon,
    description: 'Cross-chain compatible, Move assets between multiple protocols and platforms without adding extra code on your backend.',
    path: '#'
	},
	{
    title: 'Security and Transparency',
    image: lockIcon,
    description: 'Raw connect to protocols in a decentralized manner. No middle layer between.',
    path: '#'
	},
	{
    title: 'Scalable Transactions',
    image: scalableIcon,
    description: 'Failover support for failed transactions and requests on protocols.',
    path: '#'
  },
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
				id="features"
        css={{
          margin: '0 auto',
          marginTop: '7rem',
          minHeight: '20vh',
          position: 'relative',
          display: 'flex',
          alignContent: 'space-between',
          justifyContent: 'center',
          [presets.Mobile]: {
            maxWidth: '20vw',
          },
          [presets.Desktop]: {
            maxWidth: '100vw',
            marginTop: '20rem',
          },
          [presets.Phablet]: { marginTop: '12rem'}
        }}
      >
        {/* <img
          src={productsImage}
          css={{
            height: '465',
            width: '1600',
            position: 'absolute',
            [presets.Desktop]: {
              transform: 'rotate(90deg)',
            },
          }}
        /> */}

        <div className={`${cardsContainer}`}>
          {cardItems.map(({title, image, description, path}) => (
            <Card key={title} title={title} image={image} description={description} path={path}/>
          ))}
        </div>
      </div>
    );
  }
}
