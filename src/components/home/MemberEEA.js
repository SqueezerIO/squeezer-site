import React, { Component } from 'react';
import presets from "../../utils/presets";
import eeaImage from '../../../static/images/homeSVG/eea-logo-new-big-1.svg';

export default class MemberEEA extends Component {
  render() {
    return (
      <div
        css={{
          margin: '0 auto',
          padding: 0,
          marginTop: `3rem`,
          minHeight: `40vh`,
          maxWidth: '1200px',
          // position: 'relative',
          textAlign: 'center',
          [presets.Desktop]: {
            marginTop: `1rem`,
            padding: 0,
          }
        }}
      >
        <div css={{display: 'flex', justifyContent: 'center',
          alignContent: 'center', width: '100%', height: '336px', backgroundColor: 'red'}}>
          <img src={eeaImage} alt="eeaImage" css={{width: '249px', height: '142px'}}/>
        </div>
      </div>
    );
  }
}
