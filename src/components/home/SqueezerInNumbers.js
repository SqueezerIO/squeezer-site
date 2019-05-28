import React, { Component } from 'react';
import SqueezerInNumbersItem from './SqueezerInNumbersItem';



export default class SqueezerInNumbers extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
  }

  render() {
    const { t } = this.props

    return (
      <div css={{
        background: '#FFF',
        textAlign: 'center',
        // margin: '75px 0'
      }}>
        <div css={{
          zIndex: 1,
          padding: '100px 30px'
        }}>
          <div css={{
            paddingBottom: '45px'
          }}>
            <div css={{
              // borderBottom: `3px solid ${presets.brand}`,
              width: 'fit-content',
              margin: '0 auto',
              fontSize: '33px',
              fontWeight: 'bold',
              fontFamily: 'Khula'
            }}>Squeezer In Numbers</div>
          </div>
          <SqueezerInNumbersItem title="Users" end={12100} />
          <SqueezerInNumbersItem title="Downloads" end={6056} />
          <SqueezerInNumbersItem title="Github Stars" end={3100} />
        </div>
      </div>
    )
  }
}
