import React, { Component } from 'react';
import Bloomberg from "../../../static/images/featured-in/bloomberg.png"
import Reuters from "../../../static/images/featured-in/reuters.png"
import YahooFinance from "../../../static/images/featured-in/yahoo-finance.png"
import CNBC from "../../../static/images/featured-in/cnbc.png"
import BingNews from "../../../static/images/featured-in/bing-news.png"
import GoogleNews from "../../../static/images/featured-in/google-news.png"
import TheMerkle from "../../../static/images/featured-in/themerkle.png"

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
              fontFamily: 'Nunito'
            }}>As Featured In</div>
          </div>
          <Source link="" pic={Bloomberg} />
          <Source link="https://www.reuters.com/brandfeatures/venture-capital/article?id=102906" pic={Reuters} />
          <Source link="https://finance.yahoo.com/news/scalable-dapp-development-platform-squeezer-230000808.html" pic={YahooFinance} />
          <Source link="" pic={CNBC} />
          <Source link="https://www.bing.com/news/search?q=Scalable+Dapp+Development+Platform+Squeezer.io&qs=n&form=QBNT&sp=-1&pq=scalable+dapp+development+platform+squeezer.io&sc=0-46&sk=&cvid=AC5C2921CE804BB5B54AFBFC30F2DC36" pic={BingNews} />
          <Source link="https://news.google.com/search?ie=utf-8&oe=utf-8&q=%22Scalable+dApp+Development+Platform+Squeezer.io+Looks+to+Revolutionize+Business+Infrastructures+Through+Blockchain+Implementation%22&filter=0&hl=en-US&gl=US&ceid=US:en" pic={GoogleNews} />
          <Source link="https://themerkle.com/scalable-dapp-development-platform-squeezer-io-looks-to-revolutionize-business-infrastructures-through-blockchain-implementation/" pic={TheMerkle} />
        </div>
      </div>
    )
  }
}
