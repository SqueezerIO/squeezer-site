import React, { Component } from 'react';
import { css } from 'glamor'

import presets from '../../utils/presets';

class MobileNav extends Component {
  
  render() {
    const {open, closeNav, children} = this.props;
    const navClass = css({
      position: 'fixed',
      backgroundColor: 'white',
      color: 'black',
      display: 'block',
      width: '30%',
      height: open ? '100%' : '0',
      top: '5rem',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      overflow: 'auto',
      transition: 'width 0.3s ease',
      boxShadow: '0 10px 4px 0 rgba(0,0,0,0.5)',
      [presets.Phablet]: {width: '50%'}
    });
  
    return (
      <nav className={navClass}>
        <div
          onClick={closeNav}
          onKeyPress={closeNav}
          role="button"
          tabIndex="0"
        />
         {children}
      </nav>
    );
  }
};

export default MobileNav;
