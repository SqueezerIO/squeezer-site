import React, { Component } from 'react';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import presets from '../../utils/presets';

export default class SqueezerInNumbersItem extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
    this.state = {
      didViewCountUp: false
    }
    // this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context
  }

  onVisibilityChange(isVisible) {
    if (isVisible) {
      this.setState({didViewCountUp: true});
    }
  }

  render() {
    const { title, end } = this.props

    return (
      <div css={{
        display: 'inline-block',
        width: '33.3%',
        '@media screen and (max-width: 600px)' : {
          display: 'block',
          width: '100%',
        },
        textAlign: 'center',
        color: '#1990FF',
        textTransform: 'uppercase',
        fontFamily: 'Nunito',
        fontSize: '70px'
      }}>
        <div css={{
          fontWeight: 'bold'
        }}>
          <VisibilitySensor onChange={this.onVisibilityChange.bind(this)} offset={{
            top:
              10
          }} delayedCall>
            <CountUp delay={0} duration={1.5} start={0} end={this.state.didViewCountUp ? end : 0} />
          </VisibilitySensor>
          <div css={{
            fontSize:'50px'
          }}>{title}</div>
        </div>
      </div>
    )
  }
}
