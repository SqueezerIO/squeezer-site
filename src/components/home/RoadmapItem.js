import React, { Component } from 'react';
import ProgressLine from '../progress/line';

export default class RoadMap extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
    this.state = {
      show: false
    }
  }

  show() {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  render() {
    const { name, subtasks } = this.props.task

    return (
      <div onClick={() => this.show()}
        css={{
          background: '#f5f5f5',
          marginBottom: '2rem',
          borderRadius: '4px',
          width: '350px',
          fontFamily: 'Khula',
          textAlign: 'left',
          display: 'inline-block',
          marginLeft: '25px',
          verticalAlign: 'top',
          cursor: 'pointer'
        }}>
        <div css={{
          fontSize: '22px',
          marginBottom: '10px',
          marginLeft: '25px',
          marginTop: '15px'
        }}>
          {name}
        </div>
        <div css={{
          padding: '0.5rem 1.5rem 0',
          display: this.state.show ? 'block' : 'none'
        }}>
          {subtasks.map((subtask, subtaskIndex) => (
            <div css={{
              marginBottom: '15px'
            }}>
              <div css={{ fontWeight: 'bold' }}>{subtask.name}</div>
              <div css={{ color: '#757B80' }}>{subtask.text}</div>
              <ProgressLine stripped="true" height="3" percent={subtask.progress} />
            </div>
          ))}
        </div>
        <ProgressLine stripped="true" height="12" percent={100} />
      </div>
    )
  }
}
