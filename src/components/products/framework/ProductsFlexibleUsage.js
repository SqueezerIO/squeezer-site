import React, { Component } from 'react';
import presets from "../../../utils/presets";
import chartImage from "../../../../static/images/Squeezer_Assets_framework_page/iconfinder_chart-graph-flexible-predict_4095915.svg";
import assetImage from "../../../../static/images/Squeezer_Assets_framework_page/Asset1@30x.svg";
import terminalImage from "../../../../static/images/Squeezer_Assets_framework_page/terminal-code.svg";
import frameworkBlueImage from "../../../../static/images/homeSVG/framework-blue.svg";
import Terminal from "./Terminal"
import { css } from "glamor";
import chekItem from "../../../../static/images/Squeezer_Assets_framework_page/chekItem.svg";

export default class ProductsFlexibleUsage extends Component {
  renderItem = text => (
    <li css={{ display: 'inline-flex', flexWrap: 'wrap' }}>
      <img src={chekItem} alt="chekItem" css={{ [presets.Mobile]: { width: 0, height: 0 } }} />
      <span css={{
        marginTop: '2px', marginLeft: '17px', [presets.Phablet]: { marginLeft: '5px' },
        [presets.Mobile]: { marginLeft: 0 }
      }}>{text}</span>
    </li>
  );

  render() {
    const listClass = css({
      listStyle: 'none',
      fontSize: '23px',
      color: '#023775',
      fontFamily: 'Khula',
      fontWeight: '200',
      letterSpacing: '1.28px',
      lineHeight: '31px',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 0,
      width: '340px',
      [presets.Phablet]: {
        fontSize: '20px',
      }
    });

    return (
      <div>
        <div css={{
          margin: '0 auto',
          maxWidth: '1200px',
          minHeight: `60vh`,
          marginTop: '15rem',
          display: 'flex',
          flexWrap: 'wrap',
          [presets.Desktop]: {
            marginTop: '5rem',
            padding: '1rem',
            display: 'block',
            margin: 'auto',
            minHeight: `0vh`,
          }
        }}>
          <div css={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', [presets.Desktop]: { alignItems: 'center' },
            [presets.Phablet]: { display: 'block' }
          }}>
            <div css={{ width: '65%', [presets.Desktop]: { width: 'auto' } }}>
              <div css={{ display: 'flex' }}>
                <img src={chartImage} alt="chartImage" css={{ width: '52px', height: '52px' }} />
                <h2 css={{
                  fontSize: '50px',
                  color: '#1890FF',
                  fontFamily: 'DIN Condensed',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  letterSpacing: '0.87px',
                  lineHeight: '60px',
                  width: '267px',
                  marginLeft: '27px'
                }}>flexible usage</h2>
              </div>
              <p css={{
                fontSize: '23px',
                color: '#023775',
                fontFamily: 'Khula',
                fontWeight: '200',
                letterSpacing: '1px',
                lineHeight: '31px',
                width: '494px',
                [presets.Desktop]: {
                  width: '300px'
                },
                [presets.Phablet]: {
                  width: '250px'
                }
              }}>
                Develop the project and debug it on your own local machine before deploying it.
            </p>
            </div>
            <div css={{ display: 'flex', width: '30%', marginLeft: '240px', marginTop: '-86px' }}>
              <img src={assetImage} alt="assetImage" css={{
                position: 'relative', width: '659px', marginTop: '5px', height: '506px', opacity: '0.64',
                [presets.Desktop]: { width: 0, height: 0 }
              }} />
              <img src={assetImage} alt="assetImage" css={{
                position: 'relative', width: '659px', marginLeft: '-260px', marginTop: '60px', height: '506px', opacity: '0.64',
                [presets.Desktop]: { width: 0, height: 0 }
              }} />
            </div>
            {/* <img src={terminalImage} alt="terminalImage" css={{position: 'absolute', marginTop: '200px', marginLeft: '-10px', zIndex: 3, width: '782px', height: '527px',
            [presets.Desktop]: {position: 'relative', height: 'auto', width: '380', marginTop: '100px'},
            [presets.Phablet]: {marginTop: '10px'}
          }} /> */}
            <Terminal
              overrideCSS={{
                verticalAlign: 'top',
                position: 'absolute', marginTop: '200px', marginLeft: '-10px', zIndex: 3, width:'100%', maxWidth: '782px', height: '527px'
              }}
              commands={[
                {
                  type: 'comment',
                  text: 'Install Squeezer globally',
                },
                {
                  type: 'command',
                  text: 'npm i squeezer-cli -g'
                },
                {
                  type: 'comment',
                  text: 'Create a project',
                },
                {
                  type: 'command',
                  text: 'sqz create --template api-nodejs'
                },
                {
                  type: 'comment',
                  text: 'Switch to the project\'s directory',
                },
                {
                  type: 'command',
                  text: 'cd my-first-project'
                },
                {
                  type: 'comment',
                  text: 'Install packages',
                },
                {
                  type: 'command',
                  text: 'sqz install'
                },
                {
                  type: 'comment',
                  text: 'Compile functions',
                },
                {
                  type: 'command',
                  text: 'sqz compile --cloud --stage dev'
                },
                {
                  type: 'comment',
                  text: 'Deploy functions',
                },
                {
                  type: 'command',
                  text: 'sqz deploy'
                },
                {
                  type: 'comment',
                  text: 'https://your-app-id.execute-api.com/dev',
                }
              ]}
            />
            <img src={frameworkBlueImage} alt="frameworkBlueImage" css={{
              width: '364px', height: '350px', marginLeft: '-730px', marginTop: '-250px',
              [presets.Desktop]: { width: 0, height: 0 }
            }} />

            <div css={{
              display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px', width: '73%',
              [presets.Desktop]: { marginTop: '240px', alignItems: 'center' },
              [presets.Phablet]: { display: 'block', marginTop: '10px' }
            }}>
              <ul className={`${listClass}`}>
                {this.renderItem('Blockchain agnostic')}
                {this.renderItem('Microservices architecture')}
                {this.renderItem('Create custom plugins')}
              </ul>

              <ul className={`${listClass}`}>
                {this.renderItem('Attach smart contracts')}
                {this.renderItem('Multiple stagings')}
                {this.renderItem('Debugging')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
