import React from "react"

import LanguageSwitcher from "../components/languageSwitcher"
import HeaderItemSwitcher from '../components/headerItemSwitcher';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from '../components/button/ButtonSecondary';

import { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"

import { I18nextProvider } from 'react-i18next'
import i18n from "../utils/i18n"

import logo from '../../static/images/logo-blue.svg';

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
  componentDidMount() {
    // Create references to html/body elements
    // this.htmlElement = document.querySelector(`html`)
    // this.bodyElement = document.querySelector(`body`)
    // // Cache the window width.
    // windowWidth = window.innerWidth
  }
  componentWillReceiveProps(nextProps) {
    // if we're changing to a non-homepage page, put things in
    // a modal (unless we're on mobile).
    // if (windowWidth > 750) {
    // // Freeze the background from scrolling.
    // this.htmlElement.style.overflow = `hidden`
    // this.bodyElement.style.overflow = `hidden`
    // // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    // // weird jumping.
    // this.htmlElement.style.overflowY = `scroll`
    // } else {
    // // Otherwise we're navigating back home so delete old home so the
    // // modal can be destroyed.
    // delete this.modalBackgroundChildren
    // this.htmlElement.style.overflow = `visible`
    // this.bodyElement.style.overflow = `visible`
    // // Always set overflow-y to scroll so the scrollbar stays visible avoiding
    // // weird jumping.
    // this.htmlElement.style.overflowY = `scroll`
    // }
  }

  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <div
          css={{
            // background: `rgba(0,0,0,0.03)`,
            minHeight: `100vh`,
            // [presets.Desktop]: {
            //   minWidth: '768px',
            // }
            // padding: 0,
            // margin: 0,
            // width: '100%'
          }}
        >
          <div
            css={{
              background: `transparent`,
              // borderBottom: `1px solid rgba(0,0,0,0.08)`,
            }}
          >
            <div
              css={{
                padding: '1px',
                // paddingBottom: `calc(${rhythm(3 / 4)} - 1px)`,
                maxWidth: `960px`,
                margin: `0 auto`,
                overflow: `hidden`,
                // backgroundColor: 'red',
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
              maxWidth: `100vh`,
              margin: `0 auto`,
              [presets.Desktop]: {
                // maxWidth: '768px',
  
                // backgroundColor:'red',
                padding: 0,//rhythm(3 / 4),
              },
            }}
          >
            {this.props.children}
          </div>
        </div>
      </I18nextProvider>
    )
  }
}

export default Layout
