import React, { Component } from 'react';

export default class ProgressLine extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
  }

  render() {
    const { stripped = false, width = '100%', height = '5', percent } = this.props

    return (
      <div css={{
        width
      }}>
        <div css={{
          background: stripped ? '#1990ff repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 16px)' : '#1990ff',
          transition: 'background-color .1s ease-out',
          borderTopLeftRadius: '2px',
          borderBottomLeftRadius: '2px',
          width: `${percent}%`,
          float: 'left',
          // display: percent > 0 ? 'inline-block' : 'none',
          height
        }} />
        <div css={{
          background: stripped ? '#79AFF9 repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(255,255,255,0.3) 8px, rgba(255,255,255,0.3) 16px)' : '#79AFF9',
          borderTopRightRadius: '2px',
          borderBottomRightRadius: '2px',
          // display: percent < 100 ? 'inline-block' : 'none',
          width: `${100 - percent}%`,
          float: 'right',
          height
        }} />
        <div css={{clear: 'both'}}></div>
      </div>
    )
  }
}
