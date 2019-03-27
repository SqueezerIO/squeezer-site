import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { withNamespaces } from 'react-i18next';
import { Link } from 'gatsby';
import { css } from 'glamor'

import onClickOutside from "react-onclickoutside";

const linkStyle = css({
  color: '#1890FF',
  fontSize: '18px',
  fontFamily: 'Khula',
  ':link, :visited': {
    textDecoration: 'none'
  }
});

class HeaderItemSwitcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSelector: false
    }
  }

  showSelector = () => {
    const val = this.state.showSelector ? false : true

    this.setState({
      showSelector: val
    })
  };

  handleClickOutside(evt) {
    this.setState({
      showSelector: false
    })
  };

  renderLinks = (title, path) => {
    return (
      <div css={{width: '60%', textTransform: 'uppercase'}}>

      {title === 'Framework' ? <Link to={path} className={`${linkStyle}`}>read docs</Link> : (
        <div css={{display: 'flex', justifyContent: 'space-between', 'a:link, a:visited': {
            textDecoration: 'none'
          }}}>
          <Link to={path} className={`${linkStyle}`}>features</Link>
          <Link to={path} className={`${linkStyle}`}>pricing</Link>
        </div>)}
      </div>);
  };

  renderContentChild = (item, header) => (
    <div css={{textDecoration: 'none', display: 'flex', marginBottom: '16px'}}>
      {item.image ? <img src={item.image} alt='image' css={{marginRight: '.5rem', width: '32px', height: '32px'}} /> : null}

      <div css={{ display: 'flex', alignItems: 'start', flexDirection: 'column', width: '100%' }}>
        <h2 css={{
          color: '#023775',	fontFamily: 'Khula',	fontSize: '20px',	fontWeight: 'bold', textTransform: 'uppercase', marginTop: '8px',
          marginBottom: '5px', letterSpacing: '1px'
        }}>{item.title}</h2>
        <p css={{color: '#023775', fontFamily: 'Khula',	fontSize: '16px', letterSpacing: '1px', marginTop: 0, marginBottom: '7px'}}>
          {item.description}
        </p>
        {header === 'products' ? this.renderLinks(item.title, item.path) : null}
      </div>
    </div>
  );

  render() {
    const { header, component } = this.props;

    const renderContent = component.map((item, index) => (
      <div css={{ textDecoration: 'none', display: 'flex', marginBottom: '16px'}} key={index}>
        {header === 'products' ? this.renderContentChild(item, header) : (
          <Link to={item.path} css={{':link, :visited': {
              textDecoration: 'none'
            }}}>
            {this.renderContentChild(item, header)}
          </Link>
        )}
      </div>
    ));

    return (
      <div css={{
        display: 'inline-block',
        marginLeft: '15px'
      }}>
        <div
          onClick={() => this.showSelector()}
          css={{
            cursor: 'pointer',
            padding: '4px 5px 4px 5px',
            ':hover': {
              borderRadius: '4px'
            },
            color: '#092D5D',
            fontFamily: 'Khula',
            fontSize: '1.2rem',
          }}
        >
          {header}
          <FaAngleDown css={{
            color: '#092D5D',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '.5rem',
          }} />
          <div css={{
            display: this.state.showSelector ? 'auto' : 'none',
            position: 'absolute',
            zIndex: '2000',
            marginTop: '12px',
            marginLeft: '-145px',
            background: '#FFF',
            boxShadow: '0px 0px 5px 0px #092D5D',
            borderRadius: '4px',
            padding: '1rem 1rem 0 1rem',
            width: '390px',
          }}>
            {renderContent}
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces('HeaderItemSwitcher')(onClickOutside(HeaderItemSwitcher));
