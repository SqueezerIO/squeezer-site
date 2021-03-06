import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import Link from '../link';
import { css } from 'glamor'

import presets from '../../utils/presets'
import onClickOutside from "react-onclickoutside";
import triangleIcon from '../../../static/images/triangle.svg';

const linkStyle = css({
  color: '#1890FF',
  fontSize: '16px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  fontFamily: 'Nunito',
  ':link, :visited, :active': {
    textDecoration: 'none',
    outline: 'none'
  }
});

class HeaderItemSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSelector: false,
      mouseOverItem: false,
      mouseOverButton: false
    }
  }

  showSelector = () => {
    const val = !this.state.showSelector;
  console.log('showSelector', val);
    this.setState({
      showSelector: val
    })
  };

  handleClickOutside(evt) {
    this.setState({
      showSelector: false
    })
  };

  hoverButton = () => {
    this.setState({ showSelector: true, mouseOverButton: true, mouseOverItem: false });
  };

  leaveButton = () => {
    setTimeout(() => {
      if (!this.state.mouseOverItem) {
        setTimeout(() => {
          this.setState({showSelector: false});
        }, 0);
      }
    }, 50);
  };

  hoverItem = () => {
    this.setState({
      showSelector: true, mouseOverItem: true, mouseOverButton: false
    })
  };

  leaveItem = () => {
    setTimeout(() => {
      this.setState({ showSelector: false, mouseOver: false });
    }, 100);
  };

  renderLinks = (title, path) => {
    return (
      <div css={{width: '180px', textTransform: 'uppercase'}}>

      {title === 'Framework' ? <Link to={path.docsPath} className={`${linkStyle}`}>getting started</Link> : (
        <div css={{display: 'flex', justifyContent: 'space-between', 'a:link, a:visited': {
            textDecoration: 'none'}, [presets.Mobile]: {flexDirection: 'column'}
          }}>
          <Link to={path.featurePath} className={`${linkStyle}`}>features</Link>
          <Link to={path.pricingPath} className={`${linkStyle}`}>pricing</Link>
        </div>)}
      </div>);
  };

  renderContentChild = (item, header) => (
    <div css={{textDecoration: 'none', display: 'flex', marginBottom: '16px'}}>
      {item.image ? <img src={item.image} alt='image' css={{marginRight: '.8rem', width: '32px', height: '32px', marginTop: '3px',
        [presets.Phablet]: {display: 'none'}
      }} /> : null}

      <div css={{ display: 'flex', alignItems: 'start', flexDirection: 'column', width: '100%' }}>
        <div onClick={() => location.href = item.path.pagePath ? item.path.pagePath : item.path}>
          <h2 css={{
            color: '#023775', fontFamily: 'Nunito', fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '8px',
            marginBottom: '5px', letterSpacing: '1px'
          }}>{item.title}</h2>
          <p css={{
            color: '#023775', fontFamily: 'Nunito', fontSize: '16px', letterSpacing: '1px', marginTop: 0, marginBottom: '7px',
            [presets.Phablet]: { width: '200px' }, [presets.Mobile]: { display: 'none' }
          }}>
            {item.description}
          </p>
        </div>
        {header === 'products' ? this.renderLinks(item.title, item.path) : null}
      </div>
    </div>
  );

  render() {
    const { header, component } = this.props;

    const renderContent = component.map((item, index) => (
      <div css={{ textDecoration: 'none', display: 'flex', marginBottom: '16px'}} key={index}>
        {header === 'products' ? this.renderContentChild(item, header) : (
          <div css={{':link, :visited': {
              textDecoration: 'none'
            }}}>
            {this.renderContentChild(item, header)}
          </div>
        )}
      </div>
    ));

    return (
      <div css={{
        display: 'flex',
        width: 150,
        justifyContent: 'space-between',
          [presets.Phablet]: {
            display: 'block',
            width: '100%'
          }
      }}>
        <div
          onClick={() => this.showSelector()}
          onPointerEnter={this.hoverButton}
          onMouseLeave={this.leaveButton}
          css={{
            cursor: 'pointer',
            padding: '4px 5px 4px 5px',
            ':hover': {
              borderRadius: '4px'
            },
            color: '#092D5D',
            fontFamily: 'Nunito',
            fontSize: '1.2rem',
          }}
        >
          {header}
          <img src={triangleIcon} alt={triangleIcon} css={{
            color: '#092D5D',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '.5rem',
            marginTop: '.9rem',
            [presets.Desktop]: {
              transform: 'rotate(-90deg)'
            }
          }}/>
          <div css={{
            display: this.state.showSelector ? 'auto' : 'none',
            position: 'absolute',
            zIndex: '2000',
            marginTop: '12px',
            marginLeft: '-175px',
            background: '#FFF',
            boxShadow: '0px 2px 10px 0px #092D5D4D',
            borderRadius: '4px',
            padding: '1rem 1rem 0 2rem',
            width: '440px',
            [presets.Desktop]: {
              position: 'fixed',
              marginLeft: '140px',
              marginTop: '-35px',
            },
            [presets.Phablet]: {
              marginLeft: '110px',
            },
          }}
             onMouseEnter={this.hoverItem}
             onMouseLeave={this.leaveItem}
          >
            {renderContent}
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces('HeaderItemSwitcher')(onClickOutside(HeaderItemSwitcher));
