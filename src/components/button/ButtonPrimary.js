import React, { Component } from 'react';
import { css } from 'glamor'
import presets from "../../utils/presets";

export default class ButtonPrimary extends Component {
  render() {
    const { title, onClick, style, mediaquery, mediaqueryPhablet } = this.props;
    
    const buttonClass = css({
      border: '1px solid #1890FF',
        borderRadius: '2rem',
        boxShadow: '0 2px 10px 0 #B2B2B2',
				backgroundColor: '#1890FF',
				padding: '15px 5px',
        color: 'white',
        // textTransform: 'uppercase',
        fontSize: '15px',
        fontFamily: 'Nunito',
        // lineHeight: '38px',
        fontWeight: 'bold',
        letterSpacing: '.1px',
        [presets.Desktop]: mediaquery,
        ':hover': {
          cursor: 'pointer'
        },
        [presets.Phablet]: mediaqueryPhablet
    });
    
    return (
      <button
        onClick={onClick}
        style={style}
        className={buttonClass}
      >
        {title}
      </button>
    );
  }
}
