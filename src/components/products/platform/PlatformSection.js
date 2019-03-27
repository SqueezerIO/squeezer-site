import React, { Component } from 'react';
import presets from '../../../utils/presets';
import platformImage from '../../../../static/images/Squeezer_Assets_platform_page/platform-icon-big.svg';
import iconData from '../../../../static/images/Squeezer_Assets_platform_page/iconfinder_thin-1526_data_-.svg';
import iconLocation from '../../../../static/images/Squeezer_Assets_platform_page/iconfinder_PROJECT_FEATURES_1041342.svg';
import iconManagement from '../../../../static/images/Squeezer_Assets_platform_page/iconfinder_thin-1575_project_management_tasks_1806465.svg';
import importProjectImage from '../../../../static/images/Squeezer_Assets_platform_page/customise-project-screenshot.svg';
import emptyProjectImage from '../../../../static/images/Squeezer_Assets_platform_page/import-project-screenshot.svg';
import debugProjectImage from '../../../../static/images/Squeezer_Assets_platform_page/debug-project-screenshot.svg';
import first from '../../../../static/images/Squeezer_Assets_platform_page/1.svg';
import second from '../../../../static/images/Squeezer_Assets_platform_page/2.svg';
import third from '../../../../static/images/Squeezer_Assets_platform_page/3.svg';


const items = [
  {
    title: 'Start by importing your project from github',
    icon: iconData,
    image: emptyProjectImage
  },
  {
    title: 'Customise your deploy settings',
    icon: iconManagement,
    image: importProjectImage
  },
  {
    title: 'Debug and track all of your services',
    icon: iconLocation,
    image: debugProjectImage
  }
];

export default class PlatformSection extends Component {
  renderIndexImage = (index) => {
    console.log(index);
    switch (index) {
      case 0:
        return <img src={first} alt={first} css={{width: '39px', height: '39px', marginRight: '10px', marginTop: '-5px'}}/>;
      case 1:
        return <img src={second} alt={second} css={{width: '39px', height: '39px', marginRight: '10px', marginTop: '-5px'}}/>;
      default:
        return <img src={third} alt={third} css={{width: '39px', height: '39px', marginRight: '10px', marginTop: '-5px'}}/>;
    }
  };
  
  renderSectionItems = () => (
    items.map(({title, icon, image}, index) => (
      <div css={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '120px', [presets.Hd]: {justifyContent: 'center', marginTop: '100px'}}}>
        <div css={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', [presets.Hd]: {order: 1},
         [presets.Hd]: {marginTop: '50px', order: 1}
        }} style={index === 1 ? {order: 2} : {}}>
          <img src={icon} alt={icon} css={{width: '100px', height: '100px', [presets.Hd]: {width: '70px', height: '70px'}}}/>
          <div css={{display: 'flex'}}>
            {this.renderIndexImage(index)}
            <h3 css={{
              color: '#023775',	fontFamily: 'Khaula', fontSize: '23px',	fontWeight: 'bold', letterSpacing: '1.4px', lineHeight: '31px', width: '280px', height: '67px', textAlign: 'left'
            }}>{title}</h3>
          </div>
        </div>
        <img src={image} alt={image} css={{width: '700px', height: '368.83px', backgroundColor: 'pink', [presets.Desktop]: {width: '400px', height: '168.83px'}}}/>
      </div>
    ))
  );
  
  render() {
    return (
      <div css={{
        margin: '0',
        maxWidth: '100vw',
        minHeight: '160vh',
        marginTop: '15rem',
        [presets.Hd]: {
          marginTop: '10rem',
        },
        [presets.Desktop]: {
          padding: '1rem',
          display: 'block',
          margin: 'auto',
        },
        [presets.Phablet]: {
          marginTop: '0rem',
          minHeight: '260vh',
        },
        [presets.Mobile]: {
          marginTop: '0rem',
          minHeight: '300vh',
        }
      }}
      >
        <div css={{margin: '0 auto', maxWidth: '1200px', [presets.Hd]: {textAlign: 'center'}}}>
          <h2 css={{
            color: '#023775',	fontFamily: 'DIN Condensed', fontSize: '45px',	fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1.36px', lineHeight: '54px'
          }}>HOW THE SQUEEZER PLATFORM WORKS</h2>
          <div css={{margin: '0 auto', maxWidth: '1200px', position: 'relative'}}>
            <div css={{position: 'absolute', maxWidth: '1200px', width: '100%', zIndex: '200',}}>
              {this.renderSectionItems()}
            </div>
          </div>
        </div>
        <img src={platformImage} alt="platformImage" css={{width: '858px', height: '858px', position: 'relative', marginLeft: '630px', marginTop: '350px', zIndex: 1, maxWidth: '100vw',
          [presets.Hd]: {width: 0, height: 0}}}/>
      </div>
    );
  }
}
