import React from "react"
import { Link } from 'gatsby';
import HeaderItemSwitcher from '../components/headerItemSwitcher';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from '../components/button/ButtonSecondary';

import { I18nextProvider } from 'react-i18next'
import i18n from '../utils/i18n'
import presets from '../utils/presets';

import logo from '../../static/images/logo-blue.svg';
import hiring from '../../static/images/hiring.svg';
import Footer from '../footer';
import frameworkIcon from '../../static/images/homeSVG/framework.svg';
import platformIcon from '../../static/images/homeSVG/platform-icon.svg';
import chainkitIcon from '../../static/images/homeSVG/chainkit-icon.svg';

const products = [
  {
    title: 'Framework',
    path: '/products/framework',
    image: frameworkIcon,
    description: 'Develop dApps on local machine'
  },
  {
    title: 'Platform',
    path: '/products/platform',
    image: platformIcon,
    description: 'Share project & collaborate with team'
  },
  {
    title: 'Chainkit',
    path: '/products/chainkit',
    image: chainkitIcon,
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
  logoClick = () => {
    return <Link to='/' />
  };

  render() {
    const { color } = this.props;

    return (
      <I18nextProvider i18n={i18n}>
        <div
          css={{
            padding: '0 2rem',
            margin: 0,
            minHeight: '100vh',
            [presets.Desktop]: {
              overflow: 'hidden',
              maxWidth: '100vw'
            },
          }}
        >
          <div
            css={{
              maxWidth: '100vw',
              background: color ? color : 'transparent',
              padding: '0 2rem',
              [presets.Desktop]: {
                background: 'transparent'
              }
            }}
          >
            <div
              css={{
                padding: '1px',
                maxWidth: '1200px',
                margin: '0 auto',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Link to='/' css={{display: 'flex'}}>
                <img
                  src={logo}
                  alt="logo"
                  css={{ width: '200px', height: '80px', display: 'inline-block', float: 'left', margin: 0,
                    cursor: 'pointer'
                  }}
                />
              </Link>

              <img
                src={hiring}
                alt="hiring"
                css={{ width: '83px', height: '25px', marginLeft: '-130px'}}
              />
              <div css={{
                display: 'flex',
                textDecoration: 'none',
                justifyContent: 'space-between',
              }}>
                <HeaderItemSwitcher header='products' component={products}/>
                <HeaderItemSwitcher header='developers' component={developers}/>
                <HeaderItemSwitcher header='company' component={company}/>
              </div>

              <div
                css={{
                  display: 'flex',
                  textDecoration: 'none',
                  justifyContent: 'space-between',
                }}
              >
                <ButtonSecondary
                  title='login'
                  onClick={() => console.log('clicked login')}
                  style={{width: '103px', height: '39px', lineHeight: '38px'}}
                />
                <ButtonPrimary
                  title='register'
                  onClick={() => console.log('clicked register')}
                  style={{marginLeft: '17px', width: '103px', height: '39px', lineHeight: '38px'}}
                />
              </div>
            </div>
          </div>
          <div
            css={{
              margin: '0 auto',
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
