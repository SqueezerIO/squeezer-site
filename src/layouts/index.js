import React from "react"

import HeaderItemSwitcher from '../components/headerItemSwitcher';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from '../components/button/ButtonSecondary';

import { I18nextProvider } from 'react-i18next'
import i18n from '../utils/i18n'
import presets from '../utils/presets';

import logo from '../../static/images/logo-blue.svg';
import Footer from '../footer';
import frameworkIcon from '../../static/images/homeSVG/framework.svg';
import platformIcon from '../../static/images/homeSVG/platform-icon.svg';
import blockchainIcon from '../../static/images/homeSVG/chainkit-icon.svg';

const products = [
  {
    title: 'Framework',
    path: '/framework-page',
    image: frameworkIcon,
    description: 'Develop dApps on local machine'
  },
  {
    title: 'Platform',
    path: '/platform-page',
    image: platformIcon,
    description: 'Share project & collaborate with team'
  },
  {
    title: 'Chainkit',
    path: '/chainkit-page',
    image: blockchainIcon,
    description: 'Access blockchain as a service (Baas)'
  }
];

const developers = [
  {
    title: 'Docs',
    path: '/',
    description: 'Learn how to use Squeezer tools'
  },
  {
    title: 'Examples',
    path: '/f',
    description: 'Comprehensive use cases'
  },
  {
    title: 'Support',
    path: '/',
    description: "Join our chat now. Let's talk !"
  },
];

const company = [
  {
    title: 'Team',
    path: '/',
    description: 'Check out awsome team'
  }
];

class Layout extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <div
          css={{
            minHeight: `100vh`,
            [presets.Desktop]: {
              overflow: `hidden`,
              maxWidth: '100vw'
            },
            padding: 0,
            margin: 0,
          }}
        >
          <div
            css={{
              background: `transparent`,
            }}
          >
            <div
              css={{
                padding: '1px',
                maxWidth: `1200px`,
                margin: `0 auto`,
                overflow: `hidden`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <img
                src={logo}
                alt="logo"
                css={{ width: '200px', height: '80px', display: `inline-block`, float: `left`, margin: 0}}
              />
              <div css={{
                display: `flex`,
                textDecoration: `none`,
                justifyContent: 'space-between'
              }}>
                <HeaderItemSwitcher header='products' component={products}/>
                <HeaderItemSwitcher header='developers' component={developers}/>
                <HeaderItemSwitcher header='company' component={company}/>
              </div>
              
              <div
                css={{
                  display: `flex`,
                  textDecoration: `none`,
                  justifyContent: 'space-between',
                }}
              >
                <ButtonSecondary
                  title='login'
                  onClick={() => console.log('clicked login')}
                  style={{width: '103px', height: '39px'}}
                />
                <ButtonPrimary
                  title='register'
                  onClick={() => console.log('clicked register')}
                  style={{ marginLeft: '17px', width: '103px', height: '39px' }}
                />
              </div>
            </div>
          </div>
          <div
            css={{
              margin: `0 auto`,
              padding: '0 2rem',
            }}
          >
            {this.props.children}
            <Footer />
          </div>
        </div>
      </I18nextProvider>
    )
  }
}

export default Layout
