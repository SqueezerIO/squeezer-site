import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import RoadmapLine from "../../assets/roadmap-line.png"
import RoadmapLineActive from "../../assets/roadmap-line-active.png"
import React from "react"


const CreateRoadMap = ({ data }) => {
  let position = 'left'
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currDate = new Date();
  const currTime = `${currDate.getFullYear()}${("0" + currDate.getMonth()).slice(-2)}`;
  const roadMap = data.map((val) => {
    if (position === 'left') {
      position = 'right';
    } else if (position === 'right')  {
      position = 'left';      
    }

    const roadmapPic = Number(currTime) > Number(`${val.year}${("0" + val.month).slice(-2)}`) ? RoadmapLineActive : RoadmapLine

    return (
      <div key={val.description} css={{
        border: 0,
        padding: 0,
        [presets.Mobile]: {          
          width: '90%',
          background: 'none',
          margin: '0 auto'      
        },
        [presets.Desktop]: {          
          width: rhythm(23),
          background: `url(${roadmapPic})`,
          backgroundSize: '40px 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'        
        },
      
        height: '120px'
      }}>
        <div css={{
          [presets.Desktop]: {
            marginLeft: 0,
            float: position,
            width: rhythm(10)            
          },
          textAlign: 'center'
        }}>
          <h2 css={{ margin: '5px 0px' }}>{monthNames[val.month]} {val.year}</h2>
          {val.description}
        </div>
        <bulletLine />
      </div>
    )
  })

  return (
    <div css={{
      marginTop: rhythm(2)
    }}>
      {roadMap}
    </div>
  );
}

export default () => (
  <div id="roadmap" css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '150px 0px'
  }}>
    <div css={{
      margin: '0 auto',
      [presets.Desktop]: {
        width: rhythm(22)
      }
    }}>
      <h1 css={{ textAlign: 'center', textTransform: 'uppercase' }}>Road map</h1>
      <CreateRoadMap
        data={[
          {
            month : 1,
            year : 2016,
            description: 'Create framework principles and add base functionality'
          },
          {
            month : 8,
            year : 2016,
            description: 'Proof-of-Concept and plugins integration'
          },
          {
            month : 9,
            year : 2017,
            description: 'Stable version + cloud providers'
          },
          {
            month : 1,
            year : 2018,
            description: 'Token pre-sale crowdfunding stage'
          },
          {
            month : 2,
            year : 2018,
            description: 'Transcending to the final token sale'
          },
          {
            month : 3,
            year : 2018,
            description: 'Add token on public exchange(s)'
          },
          {
            month : 4,
            year : 2018,
            description: 'Hiring additional resources to build the blockchain cloud connectors'
          },
          {
            month : 11,
            year : 2018,
            description: 'Deliver the blockchain cloud components & connectors'
          },
          {
            month : 1,
            year : 2019,
            description: 'Add support to buy subscriptions with the SQZR token & start to build apps connected to the blockchain'
          },
        ]}
      />
    </div>
  </div>
)
