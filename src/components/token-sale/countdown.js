import Countdown from 'react-countdown-now'
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import CtaButton from "../cta-button"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"
import Whitelist from "./whitelist"

let dates = {}
let summaryData = {}

const SaleComplete = () => (
  <h1 css={{ color: presets.brandLighter }}>
    Token sale completed . <br />
    Thank you for your contribution !
  </h1>
);

const WhiteListWidget = ({ overrideCss }) => (
  <div css={{ ...overrideCss }}>
    <div css={{
      color: presets.brandLighter,
      marginTop: rhythm(1),
      [presets.Mobile]: {
        fontSize: scale(0.2).fontSize,
      },
      [presets.Desktop]: {
        fontSize: scale(0.8).fontSize,
      }
    }}>Get whitelisted and enjoy your <b>{summaryData.bonuses.whitelist}%</b> bonus</div>
    <Whitelist
      {...{
        action: '//squeezer.us17.list-manage.com/subscribe/post?u=c85492cf3a6e8f0992fe01e4e&id=d23e505112',
      }}
    />
  </div>
)

const Participate = () => (
  <CtaButton to="/token-sale/participate/" overrideCSS={{
    color: '#fff !important',
    border: '1px solid #fff !important'
  }}>
    <span css={{ verticalAlign: `middle` }}>Participate</span>
    {` `}
    <ArrowForwardIcon
      css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
    />
  </CtaButton>);

const CountdownPreSaleCompletion = () => (
  <div>
    <Countdown
      date={dates.PreSaleEndCountDownTime}
      renderer={CountdownRender}
      msg="Token pre-sale ends in:"
      participate="true"
      completeRenderer={CountdownSaleStart()}
    />
  </div>
);

const CountdownSaleStart = () => (
  <div>
    <Countdown
      date={dates.SaleStartCountDownTime}
      whitelist="true"
      renderer={CountdownRender}
      msg="Token sale start in:"
      completeRenderer={CountdownSaleCompletion()}
    />
  </div>
);

const CountdownSaleCompletion = () => (
  <div>
    <Countdown
      date={dates.SaleEndCountDownTime}
      renderer={CountdownRender}
      msg="Token sale ends in:"
      participate="true"
      completeRenderer={SaleComplete()}
    />
  </div>
);

const pl = (name, val) => {
  if (val === 1) {
    return `${val} ${name}`;
  } else {
    return `${val} ${name}s`;
  }
};

const CountdownRender = ({ days, hours, minutes, seconds, completed, msg, participate, completeRenderer, whitelist }) => {
  if (completed) {
    return completeRenderer || <div />
  } else {
    return (
      <div>
        <WhiteListWidget overrideCss={{
          display: whitelist ? 'block' : 'none'
        }} />
        <h1 css={{ color: presets.brandLighter }}>{msg}</h1>
        <span css={{
          color: presets.brandLighter,
          [presets.Mobile]: {
            lineHeight: 1.2,
            fontSize: scale(0.6).fontSize
          },
          [presets.Desktop]: {
            fontSize: scale(1.2).fontSize,
            lineHeight: 0
          }
        }}>{pl('day', days)}  {pl('hour', hours)} {pl('min', minutes)} {pl('sec', seconds)}</span>
        <div css={{
          display: participate === 'true' ? 'block' : 'none',
          marginTop: rhythm(1)
        }}>
          <CtaButton to="/token-sale/participate" overrideCSS={{
            color: '#fff !important',
            border: '1px solid #fff !important'
          }}>
            <span css={{ verticalAlign: `middle` }}>Participate</span>
            {` `}
            <ArrowForwardIcon
              css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
            />
          </CtaButton>
        </div>
      </div>
    );
  }
};

export default ({ summary }) => {
  summaryData = summary

  dates = {
    PreSaleStartCountDownTime : new Date(summary.dates.preSale.start).getTime(),
    PreSaleEndCountDownTime : new Date(summary.dates.preSale.end).getTime(),  
    SaleStartCountDownTime : new Date(summary.dates.sale.start).getTime(),
    SaleEndCountDownTime : new Date(summary.dates.sale.end).getTime(),     
  }
  // dates = {
  //   PreSaleStartCountDownTime : new Date().getTime() + 5000,
  //   PreSaleEndCountDownTime : new Date().getTime() + 10000,
  //   SaleStartCountDownTime : new Date().getTime() + 15000,
  //   SaleEndCountDownTime : new Date().getTime() + 20000,
  // }

  return (
    <div css={{
      marginTop: rhythm(2)
    }}>
      <Countdown
        date={dates.PreSaleStartCountDownTime}
        renderer={CountdownRender}
        whitelist="true"
        msg="Token pre-sale starts in:"
        completeRenderer={CountdownPreSaleCompletion()}
      />
    </div>
  )
}
