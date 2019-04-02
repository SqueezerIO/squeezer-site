import React, { Component } from 'react';
import presets from "../../utils/presets";
import eeaImage from '../../../static/images/homeSVG/eea-logo-new-big-1.svg';
import eea from '../../../static/images/home/eea.png';

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
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          [presets.Hd]: {
            padding: 0,
            flexDirection: 'column',
            minHeight: `50vh`,
          },
          [presets.Phablet]: {
            minHeight: `70vh`,
          },
          [presets.Mobile]: {
            minHeight: `85vh`,
          },
        }}
      >
        <div css={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '336px', flexWrap: 'wrap', alignItems: 'center',
          [presets.Hd]: {justifyContent: 'center'}
        }}>
         <div css={{display: 'flex', flexDirection: 'column'}}>
           <p css={{marginLeft: '80px', marginBottom: 0, fontFamily: 'Khula', color: '#004CA5', textTransform: 'uppercase', fontSize: '20px', fontWeight: '600'}}>
             member of eea
           </p>
          <img src={eeaImage} alt="eeaImage" css={{width: '249px', height: '142px'}}/>
         </div>
          <img src={eea} alt="eea" css={{width: '804px', height: 'auto',[presets.Hd]: {marginTop: '20px'}}}/>
        </div>
      </div>
    );
  }
}
