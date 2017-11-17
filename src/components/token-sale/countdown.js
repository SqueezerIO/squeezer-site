import Countdown from 'react-countdown-now'
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import CtaButton from "../cta-button"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"

const PreSaleStartCountDownTime = () => {
  const toDate = '2017-12-04T00:00:00.000Z'

  // return new Date().getTime() + 5000;
  return new Date(toDate).getTime();
};

const PreSaleEndCountDownTime = () => {
  const toDate = '2017-12-24T00:00:00.000Z'

  // return new Date().getTime() + 10000;
  return new Date(toDate).getTime();
};

const SaleStartCountDownTime = () => {
  const toDate = '2018-01-05T00:00:00.000Z'

  // return new Date().getTime() + 15000;
  return new Date(toDate).getTime();
};

const SaleEndCountDownTime = () => {
  const toDate = '2017-02-20T00:00:00.000Z'

  // return new Date().getTime() + 20000;
  return new Date(toDate).getTime();
};

const SaleComplete = () => (
  <h1 css={{ color: presets.brandLighter }}>
    Token sale complete . <br/>
    Thank you for the contribution !
  </h1>
);

const Participate = () => (
  <CtaButton to="/token-sale/participate" overrideCSS={{
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
      date={PreSaleEndCountDownTime()}
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
      date={SaleStartCountDownTime()}
      renderer={CountdownRender}
      msg="Token sale start in:"
      completeRenderer={CountdownSaleCompletion()}      
    />
  </div>
);

const CountdownSaleCompletion = () => (
  <div>
    <Countdown
      date={SaleEndCountDownTime()}
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

const CountdownRender = ({ days, hours, minutes, seconds, completed , msg , participate, completeRenderer }) => {
  if (completed) {
    return completeRenderer || <div/>
  } else {
    return (
      <div>
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
          marginTop : rhythm(1)
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

export default () => (
  <div css={{
    marginTop: rhythm(2)
  }}>
    <Countdown
      date={PreSaleStartCountDownTime()}
      renderer={CountdownRender}
      msg="Token pre-sale starts in:"
      completeRenderer={CountdownPreSaleCompletion()}
    />
  </div>
)
