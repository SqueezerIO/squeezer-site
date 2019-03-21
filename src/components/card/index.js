import React, { Component } from 'react';
import { Link } from "gatsby"

import learnMore from '../../../public/images/home/products/learn_more.png';
import arrow from '../../../public/images/home/products/icon_greenArrow.png';
import presets from "../../utils/presets";

export default class Card extends Component {
  render() {
    const { title, image, description, path } = this.props;
    
    return (
      <div css={{
        height: '15.5rem',
        width: '17.5rem',
        borderRadius: '3px',
        backgroundColor: '#005499',
        boxShadow: '0 24px 30px 0 rgba(0,0,0,0.5)',
        padding: '1.5rem',
        [presets.Desktop]: {
          margin: '1rem auto',
        }
      }}>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <img src={image} alt='image' css={{marginRight: '1rem'}} />
          <h2 css={{
            color: '#FFFFFF',	fontFamily: 'Khula',	fontSize: '28px',	fontWeight: 'bold', textTransform: 'uppercase'
          }}>{title}</h2>
        </div>
        <p css={{color: '#FFFFFF',	fontFamily: 'Khula',	fontSize: '15px', letterSpacing: '1.7px'}}>
          {description}
        </p>
        
        <div css={{bottom: '0', position: 'absolute', [presets.Desktop]: {
            position: 'relative',
          }}}>
          <Link to={path} css={{display: 'flex', alignContent: 'center', ':hover': {
              cursor: 'pointer'
            }}}>
            <img src={learnMore} alt='learnMore' css={{height: '16px', marginTop: '.2rem'}} />
            <img src={arrow} alt='arrow' css={{marginLeft: '1rem'}} />
          </Link>
        </div>
      </div>
    );
  }
}
