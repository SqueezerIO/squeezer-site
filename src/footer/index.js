import React, { Component } from 'react';
import { Link } from 'gatsby';
import presets from "../utils/presets";

const footerItems = [
  {
    title: 'Products',
    items: [
      {
        name: 'Framework',
        path: '/framework-page'
      },
      {
        name: 'Platform',
        path: '/platform-page'
      },
      {
        name: 'Chainkit',
        path: '/chainkit-page'
      }
    ]
  },
  {
    title: 'Developers',
    items: [
      {
        name: 'Docs',
        path: '/'
      },
      {
        name: 'Examples',
        path: '/'
      },
      {
        name: 'Support',
        path: '/'
      },
      {
        name: 'Network status',
        path: '/'
      }
    ]
  },
  {
    title: 'Company',
    items: [
      {
        name: 'Careers',
        path: '/'
      },
      {
        name: 'Blog',
        path: '/'
      },
      {
        name: 'Press',
        path: '/'
      },
      {
        name: 'Team',
        path: '/'
      },
      {
        name: 'Terms & conditions',
        path: '/'
      }
    ]
  },
  {
    title: 'Connect',
    items: [
      {
        name: 'Twitter',
        path: '/'
      },
      {
        name: 'Youtube',
        path: '/'
      },
      {
        name: 'Github',
        path: '/'
      },
      {
        name: 'Linkedin',
        path: '/'
      }
    ]
  }
];

export default class Footer extends Component {
  renderColumn = (items) => (
    <div css={{display: 'flex', flexDirection: 'column', textTransform: 'none'}}>
      {items.map((item, index) => (
        <Link to={item.path} key={index} css={{
          color: '#004CA5',
          fontFamily: "Khula",
          fontSize: '1rem',
          fontWeight: 'normal',
          marginBottom: '.3rem',
          letterSpacing: '1px',
          ':link': {
            textDecoration: 'none'
          }
        }}>
          {item.name}
        </Link>
      ))}
    </div>
  );
  
  render() {
    return (
      <div css={{
        display: 'flex',
        maxWidth: `100vh`,
        margin: `0 auto`,
        marginTop: `2rem`,
        minHeight: `20vh`,
        padding: '3rem',
        [presets.Desktop]: {
          marginTop: `20rem`,
        }
      }}>
        {footerItems.map(({title, items}) => (
          <div css={{width: '20rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <div css={{margin: '0 .5rem'}}>
              <div key={title} css={{
                textTransform: 'uppercase',
                color: '#454545',
                fontFamily: "DIN Condensed",
                fontSize: '1.4rem',
                fontWeight: 'normal',
                letterSpacing: '.9px',
                marginBottom: '1rem'
              }}>
                {title}
              </div>
              {this.renderColumn(items)}
            </div>
          </div>
        ))}
        <div>
          Sign up for our newsletter to stay up to date
        </div>
      </div>
    );
  }
}
