import React, { Component } from 'react';
import { css } from 'glamor'
import presets from "../../utils/presets";

export default class ButtonPrimary extends Component {
  render() {
    const { title, onClick, style, mediaquery } = this.props;
    
    const buttonClass = css({
      border: '1px solid #1890FF',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 #B2B2B2',
        backgroundColor: '#1890FF',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontFamily: 'Khula',
        lineHeight: '40px',
        [presets.Desktop]: mediaquery,
        ':hover': {
          cursor: 'pointer'
        }
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
