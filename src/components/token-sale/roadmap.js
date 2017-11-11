import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"

const CreateRoadMap = ({ data }) => {
  let position = 'left'
  const roadMap = data.map((val) => {
    if (position === 'left') {
      position = 'right';
    } else if (position === 'right')  {
      position = 'left';      
    }

    const sectionData = () => (
      <div>
        <h2>{val.title}</h2>
        {val.description}
      </div>
    )

    return (
      <tr>
        <td css={{ border: 0, padding: 0, width: rhythm(10) }}>
          { position === 'left' ? sectionData() : '' }
        </td>
        <td css={{ border: 0, padding: 0, verticalAlign: 'center', width: rhythm(2.5), verticalAlign : 'top' }}>
          <div css={{
            width: '40px',
            height: '40px',
            border: `3px solid ${presets.brandLight}`,
            borderRadius: '50%'
          }} />
          <div css={{
            border: `2px solid ${presets.brandLight}`,
            width: '2px',
            height: '100px',
            marginLeft: '18px'
          }}/>
        </td>
        <td css={{ border: 0, padding:0, width: rhythm(10) }}>
          { position === 'right' ? sectionData() : '' }
        </td>
      </tr>
    )
  })

  return (
    <table css={{ marginTop: rhythm(2)}}>{roadMap}</table>
  );
}

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '80px 0px'
  }}>
    <div css={{
      width: rhythm(25),
      margin: '0 auto',
      textAlign: 'center'
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
