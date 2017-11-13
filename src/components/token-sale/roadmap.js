import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import RoadmapLine from "../../assets/roadmap-line.png"
import React from "react"

const CreateRoadMap = ({ data }) => {
  let position = 'left'
  const roadMap = data.map((val) => {
    if (position === 'left') {
      position = 'right';
    } else if (position === 'right')  {
      position = 'left';      
    }

    return (
      <div key={val.title} css={{
        border: 0,
        padding: 0,
        [presets.Mobile]: {          
          width: '90%',
          background: 'none',
          margin: '0 auto'      
        },
        [presets.Desktop]: {          
          width: rhythm(23),
          background: `url(${RoadmapLine})`,
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
          <h2 css={{ margin: '5px 0px' }}>{val.title}</h2>
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
  <div css={{
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
      <h1 css={{ textAlign: 'center' }}>Road map</h1>
      <CreateRoadMap
        data={[
          {
            title: 'November 2017',
            description: 'Token pre-sale crowdfunding stage'
          },
          {
            title: 'January 2018',
            description: 'Transcending to the final token sale'
          },
          {
            title: 'February 2018',
            description: 'Add token on public exchanger(s)'
          },
          {
            title: 'March 2018',
            description: 'Hiring additional resources to build the blockchain cloud connectors'
          },
          {
            title: 'December 2018',
            description: 'Deliver the blockchain cloud components & connectors'
          },
          {
            title: 'February 2019',
            description: 'Add support to buy subscriptions with the SQZ token & start to build apps connected to the blockchain'
          },
        ]}
      />
    </div>
  </div>
)
