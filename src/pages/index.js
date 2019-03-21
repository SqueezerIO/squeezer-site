import React from "react"
import Layout from "../layouts"
import api from "../utils/api"
import { css } from 'glamor'

import { withNamespaces } from "react-i18next";
import mainImage from '../../public/images/home/main.png';
import assetImage from '../../public/images/home/docs/asset_6@4x.png';
import assetWhiteImage from '../../public/images/home/docs/asset_6@4x_white.png';
import checkDocs from '../../public/images/home/docs/check_docs.png';
import frameworkIcon from '../../public/images/home/products/framework-icon.png';
import platformIcon from '../../public/images/home/products/icon_collaborate.png'
import blockchainIcon from '../../public/images/home/products/icon_blockchain.png';
import productsImage from '../../public/images/home/products.png';
import ButtonPrimary from '../components/button/ButtonPrimary';
import ButtonSecondary from "../components/button/ButtonSecondary";
import Card from'../components/card';
import presets from "../utils/presets";
import { Link } from "gatsby";
import arrow from "../../public/images/home/products/icon_greenArrow.png";

const cardItems = [
  {
    title: 'framework',
    image: frameworkIcon,
    description: 'Convenient way to build and debug dApps on your local machine. Writing production-ready code is a breeze.',
    path: '/framework-page'
  },
  {
    title: 'platform',
    image: platformIcon,
    description: 'Collaborate with your team, use continuous integration and deploy apps with just a simple code push.',
    path: '/platform-page'
  },
  {
    title: 'chainkit',
    image: blockchainIcon,
    description: 'Send, receive or react to blockchain transactions. ChainKit is the easiest and securest way to access blockchain as a service.',
    path: '/chainkit-page'
  }
];

class HomePage extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)

    this.state = {
      message: null
    }
  }
  
  render() {
    const cardsContainer = css({
      display: 'flex',
      justifyContent: 'space-around',
      alignContent: 'center',
      [presets.Desktop]: {
        display: 'block',
        marginTop: 0,
      }
    });
  
    api.get('/rest/v1/hello/test?name=james').then((res) => {
      this.setState({
        message: res.data.message
      })
    }).catch((error) => {
      console.log(error)
    });

    return (
      <Layout>
        <div
          css={{
            margin: 0,
            padding: 0,
            marginTop: `3rem`,
            maxWidth: `100vh`,
            minHeight: `40vh`,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            [presets.Desktop]: {
              marginTop: `1rem`,
              padding: 0,
            }
          }}
        >
          <div css={{position: 'absolute', top: '46%', left: '32.5%', [presets.Desktop]: {
              left: 'auto', right: 'auto'
            }}}>
            <ButtonPrimary
              title='get free account'
              onClick={() => console.log('clicked free')}
              style={{ width: '9.3rem', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', width: '9rem !important'
                }}}
            />
            <ButtonSecondary
              title='check the docs'
              onClick={() => console.log('clicked docs')}
              style={{ marginLeft: '17px', width: '9.3rem', height: '39px'}}
              mediaquery={{[presets.Desktop]: {
                  display: 'block', margin: 'auto', marginLeft: '0 !important', width: '9rem !important', marginTop: '1rem'
                }}}
            />
          </div>
          <img
            src={mainImage}
            css={{
              maxWidth: '100vh', height: 'auto', width: 'auto\9', [presets.Desktop]: {
                height: '30rem', width: '35rem'
              }, [presets.Phablet]: { width: '40rem'}
            }}
          />
          
        </div>
        <div
          css={{
            margin: `0 auto`,
            marginTop: `5rem`,
            maxWidth: `100vh`,
            minHeight: `20vh`,
            position: 'relative',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            [presets.Desktop]: {
              marginTop: `20rem`,
            },
            [presets.Phablet]: { marginTop: `12rem`}
          }}
        >
          <img
            src={productsImage}
            css={{
              maxWidth: '100vh',
              height: 'auto',
              width: 'auto \ 9',
              [presets.Desktop]: {
                transform: 'rotate(90deg)',
              },
            }}
          />
          
          <div css={{
            position: 'absolute',
            top: '18%',
            left: 0,
            right: 0,
            [presets.Desktop]: {
              top: '-10rem',
            }
          }}>
            <div className={`${cardsContainer}`}>
              {cardItems.map(({title, image, description, path}) => <Card title={title} image={image} description={description} path={path}/>)}
            </div>
          </div>
        </div>
  
        <div
          css={{
            margin: `0 auto`,
            marginTop: `2rem`,
            maxWidth: `100vh`,
            minHeight: `20vh`,
            position: 'relative',
            display: 'flex',
            padding: '3rem',
            // alignContent: 'center',
            justifyContent: 'space-between',
            [presets.Desktop]: {
              marginTop: `20rem`,
              flexDirection: 'column',
              alignItems: 'center',
              // padding: '8rem'
            },
            [presets.Phablet]: { marginTop: `12rem`}
          }}
        >
          <div css={{display: 'flex', flex: 1/3, marginRight: '5rem', [presets.Desktop]: {
            display: 'block', height: '260px', marginRight: 0
            }}}>
            <div css={{[presets.Desktop]: {display: 'flex', alignContent: 'center', justifyContent: 'center'}}}>
              <img src={assetImage} alt='assetImage' css={{width: '40px', height: '40px', position: 'absolute', left: '3%', [presets.Desktop]: {position: 'relative', left: '7%'}}} />
              <img src={assetImage} alt='assetImage' css={{width: '40px', height: '40px'}} />
            </div>
            <p css={{
                color: '#004CA5',	fontFamily: "DIN Condensed",	fontSize: '45px',	letterSpacing: '1px',
              lineHeight: '54px', textTransform: 'uppercase', marginLeft: '20px'
            }}>tuned for <br></br> developers</p>
    
            <div css={{position: 'absolute', bottom: '7rem', left: '6.5rem', [presets.Desktop]: {
                position: 'relative', marginTop: '8rem', left: 0
              }}}>
              <Link css={{display: 'flex', alignContent: 'center', ':hover': {
                  cursor: 'pointer'
                }}}>
                <img src={checkDocs} alt='checkDocs' css={{height: '16px', marginTop: '.2rem'}} />
                <img src={arrow} alt='arrow' css={{marginLeft: '1rem'}} />
              </Link>
            </div>
          </div>
          
          <div css={{display: 'flex',
            flex: 2/3,
            padding: '2rem',
            color: '#004CA5',
            fontFamily: 'Khula',
            height: 'auto',//'243px',
            borderRadius: '3px',
            backgroundColor: '#E6F4FF',
            boxShadow: '0 2px 10px 0 rgba(89,89,89,0.5)',
            [presets.Desktop]: {
              display: 'block',
              marginTop: 0,
            }
          }}>
            Squeezer is the ultimate tool for creating scalable dApps and integrate them
            into existent business infrastructures.
            <br/> <br/>
            A payment system through blockchain, a voting platform, frictionless login,
            Squeezer has it all. We provide all the tools you need to create serverless
            dApps, attach smart contracts and deploy them with one click.
          </div>
        </div>
  
        <div
          css={{
            margin: `0 auto`,
            // marginTop: `2rem`,
            maxWidth: `100vh`,
            minHeight: `20vh`,
            position: 'relative',
            display: 'flex',
            padding: '3rem 7rem',
            // alignContent: 'center',
            justifyContent: 'space-between',
            [presets.Desktop]: {
              // marginTop: `20rem`,
              // flexDirection: 'column',
              // alignItems: 'center',
              // padding: '8rem'
            },
            [presets.Phablet]: { marginTop: `12rem`}
          }}
        >
          <div css={{
            position: 'relative', height: '322px',	display: 'flex', flex: 1,borderRadius: '1px',	backgroundColor: '#e6f2ff',	boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)', 'z-index': 1,
            [presets.Desktop]: {
              display: 'block',
              marginTop: 0,
            }
          }}>
            <div css={{
              position: 'absolute', height: '317px', 'z-index': 2, flex: 1,	display: 'flex', left: '2%', top: '-5%', right: '-2%', borderRadius: '1px',	backgroundColor: '#005499',	boxShadow: '0 2px 4px 0 rgba(0,0,0,0.5)',
              [presets.Desktop]: {
                display: 'block',
                marginTop: 0,
              }
            }}>
              <div css={{[presets.Desktop]: {display: 'flex', alignContent: 'center', justifyContent: 'center'}}}>
                <img src={assetWhiteImage} alt='assetWhiteImage' css={{width: '40px', height: '40px', position: 'absolute', left: '3%', [presets.Desktop]: {position: 'relative', left: '7%'}}} />
                <img src={assetWhiteImage} alt='assetWhiteImage' css={{width: '40px', height: '40px'}} />
              </div>
            d
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withNamespaces("Home")(HomePage)
