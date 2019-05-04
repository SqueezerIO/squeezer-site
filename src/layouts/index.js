import React from "react"
import Helmet from "react-helmet"
import { css } from 'glamor'
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
import MobileNav from '../components/sidebar';
import { FaListUl } from "react-icons/fa";

const products = [
  {
    title: 'Framework',
    path: {
      pagePath: '/products/framework',
      docsPath: 'https://docs.squeezer.io',
    },
    image: frameworkIcon,
    description: 'Develop dApps on local machine'
  },
  {
    title: 'Platform',
    path: {
      pagePath: '/products/platform',
      featurePath: '/products/platform/#platform-features',
      pricingPath: '/products/platform/#platform-pricing',
    },
    image: platformIcon,
    description: 'Share project & collaborate with team'
  },
  {
    title: 'Chainkit',
    path: {
      pagePath: '/products/chainkit',
      featurePath: '/products/chainkit/#chainkit-features',
      pricingPath: '/products/chainkit/#chainkit-pricing',
    },
    featurePath: '/',
    pricingPath: '/',
    image: chainkitIcon,
    description: 'Access blockchain as a service (Baas)'
  }
];

const developers = [
  {
    title: 'Docs',
    path: 'https://docs.squeezer.io',
    description: 'Learn how to use Squeezer tools'
  },
  {
    title: 'Examples',
    path: 'https://github.com/SqueezerIO/squeezer#example-projects',
    description: 'Comprehensive use cases'
  },
  {
    title: 'Support',
    path: 'https://gitter.im/SqueezerIO/squeezer/',
    description: "Join our chat now. Let's talk !"
  },
];

const company = [
  {
    title: 'Team',
    path: '/company/team',
    description: 'Check out awsome team'
  },
  {
    title: 'Whitepaper',
    path: '/docs/Squeezer_White_Paper.pdf',
    description: 'Project whitepaper'
  }
];

const bodyStyle = css({
  ':visited' : {
    outline: 'none'
  }
});

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  closeNav = () => {
    this.setState({
      open: false,
    });
  };

  onToggleNavigation = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  logoClick = () => {
    return <Link to='/' />
  };

  render() {
    const { color } = this.props;

    return (
      <div className={`${bodyStyle}`}>
        <Helmet defaultTitle={`Squeezer - Build Serverless dApps`} titleTemplate={`Squeezer - %s`}>
          <meta name="twitter:site" content="@squeezerio" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Squeezer.IO" />
        </Helmet>
        <I18nextProvider i18n={i18n}>
          <div
            css={{
              padding: '0', //2rem',
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
                  background: 'transparent',
                  padding: '0 1rem'
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
                  justifyContent: 'space-between',
                }}
              >
                <div css={{ display: 'none', [presets.Desktop]: { display: 'block', backgroundColor: 'none', cursor: 'pointer' } }} onClick={this.onToggleNavigation}>
                  <FaListUl css={{
                    color: '#092D5D',
                    display: 'none',
                    [presets.Desktop]: { display: 'inline-block', float: 'left', margin: 0, }
                  }} />
                </div>
                <MobileNav open={this.state.open} closeNav={this.closeNav}>
                  <HeaderItemSwitcher header='products' component={products} />
                  <HeaderItemSwitcher header='developers' component={developers} />
                  <HeaderItemSwitcher header='company' component={company} />
                  <div
                    css={{
                      display: 'none',
                      [presets.Phablet]: {
                        display: 'flex', textDecoration: 'none', flexDirection: 'column', alignItems: 'left'
                      }
                    }}
                  >
                    <ButtonSecondary
                      title='login'
                      onClick={() => location.href = 'https://platform.squeezer.io'}
                      style={{ width: '100%', height: '39px', lineHeight: '38px' }}
                    />
                    <ButtonPrimary
                      title='register'
                      onClick={() => location.href = 'https://platform.squeezer.io/user/register/'}
                      style={{ marginTop: '17px', width: '100%', height: '39px', lineHeight: '38px' }}
                    />
                  </div>
                </MobileNav>

                <Link to='/' css={{ display: 'flex' }}>
                  <img
                    src={logo}
                    alt="logo"
                    css={{
                      width: '200px', height: '80px', display: 'inline-block', float: 'left', margin: 0,
                      cursor: 'pointer'
                    }}
                  />
                </Link>

                <img
                  src={hiring}
                  alt="hiring"
                  css={{
                    width: '83px', height: '25px', marginLeft: '-130px', [presets.Hd]: { marginLeft: '-20px' },
                    [presets.Desktop]: { marginLeft: -100 }, [presets.Phablet]: { marginLeft: -10 }
                  }}
                />
                <div css={{
                  display: 'flex',
                  textDecoration: 'none',
                  justifyContent: 'space-between',
                  [presets.Desktop]: { display: 'none' }
                }}>
                  <HeaderItemSwitcher header='products' component={products} />
                  <HeaderItemSwitcher header='developers' component={developers} />
                  <HeaderItemSwitcher header='company' component={company} />
                </div>
                <div
                  css={{
                    display: 'flex',
                    textDecoration: 'none',
                    justifyContent: 'space-between',
                    [presets.Phablet]: { display: 'none' }
                  }}
                >
                  <ButtonSecondary
                    title='login'
                    onClick={() => location.href = 'https://platform.squeezer.io'}
                    style={{ width: '103px', height: '39px', lineHeight: '38px' }}
                  />
                  <ButtonPrimary
                    title='register'
                    onClick={() => location.href = 'https://platform.squeezer.io/user/register/'}
                    style={{ marginLeft: '17px', width: '103px', height: '39px', lineHeight: '38px' }}
                  />
                </div>
              </div>
            </div>
            <div
              css={{
                margin: '0 auto',
                position: this.state.open ? 'fixed !important' : '',
              }}
              onClick={this.closeNav}
            >
              {this.props.children}
              <Footer />
            </div>
          </div>
        </I18nextProvider>
      </div>
    )
  }
}

export default Layout
