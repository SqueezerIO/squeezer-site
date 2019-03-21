import React, { Component } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { withNamespaces } from 'react-i18next';
import { Link } from 'gatsby';
import onClickOutside from "react-onclickoutside";

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
  
  render() {
    const { header, component } = this.props;
    
    const renderContent = component.map((item, index) => (
      <Link to={item.path} css={{ textDecoration: `none` }}>
        <div
          key={index}
          css={{
            padding: '5px 22px',
            ':hover': {
              background: 'rgba(0, 0, 0, 0.1)',
            },
            textDecoration: `none`,
            color: '#092D5D',
            borderBottom: `1px solid #092D5D`,
            fontSize: '18px',
          }}
        >
            {item.title}
        </div>
      </Link>
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
            marginTop: '12px',
            background: '#FFF',
            boxShadow: '0px 0px 5px 0px #092D5D',
            borderRadius: '4px'
          }}>
            {renderContent}
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces('HeaderItemSwitcher')(onClickOutside(HeaderItemSwitcher));
