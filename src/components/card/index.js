import React, { Component } from 'react';
import { Link } from "gatsby"

import arrow from '../../../static/images/homeSVG/icon_arrowGreen.svg';

export default class Card extends Component {
  render() {
    const { title, image, description, path } = this.props;

    return (
      <div css={{
        // height: '200px',
        width: '340px',
        borderRadius: '3px',
        // backgroundColor: '#1990FF',
        // boxShadow: '0 24px 30px 0 rgba(0,0,0,0.5)',
        padding: '1.5rem',
				margin: '23px',
				textAlign: 'center',
      }}>
        <div css={{ display: 'block', margin: '0 auto' }}>
          <img src={image} alt='image' css={{height: '130px', width: 'auto'}} />
          <h2 css={{
            fontFamily: 'Nunito',	fontSize: '28px',	fontWeight: 700, marginTop: '7px'
          }}>{title}</h2>
        </div>
        <p css={{fontFamily: 'Nunito', fontSize: '18px', letterSpacing: '1px', lineHeight: '24px', height: '120px', width: '303px', fontWeight: 200}}>
          {description}
        </p>

        {/* <div css={{position: 'relative'}}>
          <Link to={path} css={{display: 'flex', alignContent: 'center', ':link': {textDecoration: 'none'},':hover': {
              cursor: 'pointer',
            }}}>
            <div css={{color: '#00DE72', fontSize: '18px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'Nunito', letterSpacing: '1px'}}>learn more</div>
            <img src={arrow} alt='arrow' css={{width: '40px', height: '23px', marginLeft: '20px'}} />
          </Link>
        </div> */}
      </div>
    );
  }
}
