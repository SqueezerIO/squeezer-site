import React, { Component } from 'react';
import presets from "../../utils/presets";

export default class ButtonSecondary extends Component {
  render() {
    const { title, onClick, style, mediaquery, mediaqueryPhablet } = this.props;
    
    return (
      <button
        onClick={onClick}
        style={style}
        css={{
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 #BEBEBE',
          backgroundColor: '#FFFFFF',
          color: '#092D5D',
          textTransform: 'uppercase',
          fontSize: '15px',
          fontFamily: 'Khula',
          lineHeight: '40px',
          whiteSpace: 'no-wrap',
          fontWeight: 'bold',
          letterSpacing: '.1px',
          [presets.Desktop]: mediaquery,
          [presets.Phablet]: mediaqueryPhablet,
          ':hover': {
            cursor: 'pointer'
          },
        }}
      >
        {title}
      </button>
    );
  }
}
