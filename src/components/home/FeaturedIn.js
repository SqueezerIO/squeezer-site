import React, { Component } from 'react';
import Bloomberg from "../../../static/images/featured-in/bloomberg.png"
import Reuters from "../../../static/images/featured-in/reuters.png"
import YahooFinance from "../../../static/images/featured-in/yahoo-finance.png"
import CNBC from "../../../static/images/featured-in/cnbc.png"
import BingNews from "../../../static/images/featured-in/bing-news.png"
import GoogleNews from "../../../static/images/featured-in/google-news.png"

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
      WebkitFilter: 'grayscale(1000%)',
      filter: 'grayscale(1000%)',
      ':hover': {
        filter: 'grayscale(0%)',
        WebkitFilter: 'grayscale(0%)'
      }
    }} alt={title} src={pic} />
  </div>
)

export default class FeaturedIn extends Component {
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
          padding: '50px 15px'
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
            }}>As Featured In</div>
          </div>
          <Source link="" pic={Bloomberg} />
          <Source link="" pic={Reuters} />
          <Source link="" pic={YahooFinance} />
          <Source link="" pic={CNBC} />
          <Source link="" pic={BingNews} />
          <Source link="" pic={GoogleNews} />
        </div>
      </div>
    )
  }
}
