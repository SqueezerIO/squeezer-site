import React, { Component } from 'react';
import Perlin from "../../../static/images/partners-investors/perlin.png"
import Ambisafe from "../../../static/images/partners-investors/ambisafe.png"
import McroE from "../../../static/images/partners-investors/mcro.png"
import BTC12 from "../../../static/images/partners-investors/btc12.png"
import Flurry from "../../../static/images/partners-investors/flurry-capital.png"
import BlockFront from "../../../static/images/partners-investors/blockfront.png"

const Source = ({ pic, link, title, overrideCss }) => (
  <div onClick={() => window.open(link, "_blank")} css={{
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '25px 50px 25px 0px',
    cursor: 'pointer',
    ...overrideCss
  }}>
    <img css={{
      width: 'auto',
      height: '45px',
      WebkitFilter: 'grayscale(0%)',
      filter: 'grayscale(0%)',
      ':hover': {
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',
      }
    }} alt={title} src={pic} />
  </div>
)

export default class PartnersAndInvestors extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props;
  }

  render() {
    const { t } = this.props

    return (
      <div id="media" css={{
        background: '#FFF',
        textAlign: 'center',
        margin: '150px 0'
      }}>
        <div overrideCss={{
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
              fontWeight: 'bold',
              fontFamily: 'Khula'
            }}>Partners & Investors</div>
          </div>
          <Source link="https://perlin.net/" pic={Perlin} />
          <Source link="https://www.ambisafe.co/" pic={Ambisafe} />
          <Source link="https://mcro.tech/" pic={McroE} />
          <Source link="https://btc12.com/" pic={BTC12} />
          <Source pic={Flurry} />
          <Source link="http://www.blockfront.capital/" pic={BlockFront} />
        </div>
      </div>
    )
  }
}
