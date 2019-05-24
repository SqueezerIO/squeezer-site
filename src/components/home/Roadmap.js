import React, { Component } from 'react';
import ProgressLine from '../progress/line';
import RoadmapItem from './RoadmapItem';

const roadmapTasks = [
  {
    name: '2016',
    // tags: ['frontend'],
    subtasks: [
      { name: 'February', text: `Create framework principles and add base functionality`, progress: 100 },
      { name: 'September', text: `Proof-of-concept and plugins integration`, progress: 100, workDone: 3 }
    ]
  },
  {
    name: '2017',
    // tags: ['framework', 'frontend'],
    subtasks: [
      { name: 'October', text: `Stable version of the framework`, progress: 100 },
      { name: 'November', text: `Blockchain introduction`, progress: 100 },
    ]
  },
  {
    name: '2018',
    // tags: ['frontend'],
    subtasks: [
      { name: 'May', text: `Ethereum blockchain integration`, progress: 100 },
      { name: 'June', text: `Public token sale (Phase 1)`, progress: 100 },
    ]
  },
  {
    name: '2019',
    // tags: ['frontend'],
    subtasks: [
      { name: 'April', text: `Enable subscription purchases with the SQR token. Start to build apps connected to the blockchain`, progress: 100 },
      { name: 'June', text: `Premium global token offering`, progress: 0 },
      { name: 'July', text: `Token listing on top tier exchange`, progress: 0 }
    ]
  },
]

export default class RoadMap extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
  }

  render() {
    const { t } = this.props

    return (
      <div id="media" css={{
        background: '#FFF',
        margin: '75px 0',
        fontFamily: 'Khula'
      }}>
        <div css={{
          zIndex: 1,
          padding: '100px 15px'
        }}>
          <div css={{
            paddingBottom: '45px'
          }}>
            <div css={{
              // borderBottom: `3px solid ${presets.brand}`,
              width: 'fit-content',
              margin: '0 auto',
              fontSize: '33px',
              fontWeight: 'bold'
            }}>Squeezer Roadmap</div>
          </div>
          <div css={{
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <ProgressLine height="12" percent="85" />

            <div css={{
              marginLeft: '-25px',
              marginTop: '35px'
            }}>
              {roadmapTasks.map((task, index) => (
                <RoadmapItem key={index} task={task} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
