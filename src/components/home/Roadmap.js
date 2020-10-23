import React, { Component } from 'react';
import ProgressLine from '../progress/line';
import RoadmapItem from './RoadmapItem';

const roadmapTasks = [
  {
    name: 'Q1 2021',
    // tags: ['frontend'],
    subtasks: [
      { text: `Command line interface (CLI) migration`, progress: 100 },
      { text: `Code reusability & refactoring`, progress: 100, workDone: 3 },
      { text: `Alpha release`, progress: 100, workDone: 3 }
    ]
  },
  {
    name: 'Q2 2021',
    // tags: ['framework', 'frontend'],
    subtasks: [
      { name: 'October', text: `Add integration tests`, progress: 100 },
      { name: 'November', text: `Beta release`, progress: 100 },
      { name: 'November', text: `Small scale stress testing`, progress: 100 },
    ]
  },
  {
    name: 'Q3 2021',
    // tags: ['frontend'],
    subtasks: [
      { name: 'May', text: `Final release`, progress: 100 },
      { name: 'June', text: `Major scale stress testing`, progress: 100 },
    ]
  },
  {
    name: 'Q4 2021',
    // tags: ['frontend'],
    subtasks: [
      { name: 'April', text: `Third party integrations`, progress: 100 },
      { name: 'April', text: `DeFi Partners onboarding`, progress: 100 },
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
      <div id="roadmap" css={{
        background: '#FFF',
        margin: '75px 0',
        fontFamily: 'Nunito'
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
            }}>Roadmap</div>
          </div>
          <div css={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <ProgressLine height="12" percent="0" />

            <div css={{
              // marginLeft: '-25px',
							marginTop: '35px',
							display: 'flex',
							justifyContent: 'space-between'
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
