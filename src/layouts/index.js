import React from "react"

import HeaderItemSwitcher from '../components/headerItemSwitcher';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from '../components/button/ButtonSecondary';

import { I18nextProvider } from 'react-i18next'
import i18n from "../utils/i18n"
import presets from '../utils/presets';


import logo from '../../static/images/logo-blue.svg';
import Footer from "../footer";

const products = [
  {
    title: 'Framework',
    path: '/framework-page'
  },
  {
    title: 'Platform',
    path: '/platform-page'
  },
  {
    title: 'Chainkit',
    path: '/chainkit-page'
  }
];

const platforms = [
  {
    title: 'Framework',
    path: '/framework-page'
  },
  {
    title: 'Framework',
    path: '/framework-page'
  },
  {
    title: 'Framework',
    path: '/framework-page'
  },
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
                maxWidth: `960px`,
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
                <HeaderItemSwitcher header='developers' component={products}/>
                <HeaderItemSwitcher header='company' component={products}/>
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
