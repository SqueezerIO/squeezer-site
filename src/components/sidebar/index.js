import React, { Component } from 'react';
import { css } from 'glamor'

import presets from '../../utils/presets';

class MobileNav extends Component {
  
  render() {
    const {open, closeNav, children} = this.props;
    console.log('OPen', open);
    const navClass = css({
      position: 'fixed',
      backgroundColor: 'white',
      color: 'black',
      display: 'block',
      width: '250px',
      left: open ? 0 : '-250px',
      opacity: open ? 1 : 0,
      padding: '40px 10px',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      overflow: 'auto',
      transition: 'left 0.3s ease, opacity 0.5s ease',
      boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)',
      [presets.Phablet]: {width: '50%'}
    });
  
    return (
      <div className={navClass}>
        <div
          onClick={closeNav}
          onKeyPress={closeNav}
          role="button"
          tabIndex="0"
        />
         {children}
      </div>
    );
  }
};

export default MobileNav;
