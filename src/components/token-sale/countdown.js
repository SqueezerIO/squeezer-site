import Countdown from 'react-countdown-now'
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import CtaButton from "../cta-button"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"
import Whitelist from "./whitelist"
import Status from './status'
import { active } from 'glamor';
import { Line as ProgressLine } from 'rc-progress';

let dates = {}
let summaryData = {}

const SaleComplete = () => (
  <div>
    <div css={{
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center',
      paddingTop: '100px'
    }}>
      <h1 css={{ color: presets.brandLighter }}>
        Token sale completed . <br />
        Thank you for your participation !
    </h1>
    </div>
    <Status summary={summaryData} overrideCss={{
      marginTop: "175px !important",
      textAlign: 'center',
      color: "#FFF"
    }} />
  </div>
);

const WhiteListWidget = ({ overrideCss }) => (
  <div css={{ ...overrideCss }}>
    <div css={{
      color: presets.brandLighter,
      marginTop: rhythm(1),
      lineHeight: 1.2,
      [presets.Mobile]: {
        fontSize: scale(0.2).fontSize,
        maxWidth: '300px',
        margin: '0 auto',
        textAlign: 'center'
      },
      [presets.Desktop]: {
        fontSize: scale(0.8).fontSize,
      }
    }}>Get whitelisted and enjoy your <b>{summaryData.bonuses.whitelist}%</b> bonus.<br/><b>6000</b> participants whitelisted.</div>
    <Whitelist
      {...{
        action: '//squeezer.us17.list-manage.com/subscribe/post?u=c85492cf3a6e8f0992fe01e4e&id=d23e505112',
      }}
    />
  </div>
)

const Participate = () => (
  <CtaButton to="/token-sale/account/" overrideCSS={{
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
    {/* <h1 css={{color: '#fff'}}>Pre-sale will start soon, please stay close !</h1> */}
    <Countdown
      date={dates.PreSaleEndCountDownTime}
      renderer={CountdownRender}
      msg="JOIN CROWDSALE NOW ! Pre-sale ends in :"
      activeTierBonus="true"
      participate="true"
      status="true"
      progress="true"
      completeRenderer={CountdownSaleStart()}
    />
  </div>
);

const CountdownSaleStart = () => (
  <div>
    <Countdown
      date={dates.SaleStartCountDownTime}
      whitelist="true"
      status="true"
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
      status="true"
      activeTierBonus="true"      
      msg="JOIN CROWDSALE NOW ! Sale ends in :"
      participate="true"
      progress="true"
      completeRenderer={SaleComplete()}
    />
  </div>
);

const pl = (name, val, split) => {
  const formattedName = val === 1 ? name : `${name}s`;

  return <div css={{
    display: 'inline-block'
  }}>
    <div css={{
      display: 'inline-block',
      verticalAlign: 'middle'
    }}>
      <div css={{
        [presets.Mobile]: {
          fontSize: '25px'
        },
        [presets.Desktop]: {
          fontSize: '60px'          
        }
      }}>{val}</div>
      <div css={{
        [presets.Mobile]: {
          fontSize: '14px'
        },
        [presets.Desktop]: {
          fontSize: '20px'
        }
      }}>{formattedName}</div>
    </div>
    <div css={{
      display: 'inline-block',
      verticalAlign: 'top',
      [presets.Mobile]: {
        marginLeft: '5px',
        marginRight: '5px',
        fontSize: '25px'
      },
      [presets.Desktop]: {
        marginLeft: '25px',
        marginRight: '25px',
        fontSize: '50px'          
      }
    }}>{split}</div>
  </div>
};

const CountdownRender = ({ days, hours, minutes, seconds, completed, msg, participate, completeRenderer, whitelist, status, progress, activeTierBonus }) => {
  const activeTier = summaryData.tiers[summaryData.activeTier]
  const finalTier = summaryData.tiers["t4"]
  const currentDiscountValue = Math.round(((finalTier.value - activeTier.value) / finalTier.value) * 100)
  const distributionPercent = (summaryData.amount / summaryData.hardCap * 100)

  if (completed) {
    return completeRenderer || <div />
  } else {
    return (
      <div>
        <div css={{
          maxWidth: '770px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div css={{
            color: presets.brandLighter,
            textTransform: 'uppercase',
            [presets.Mobile]: {
              fontSize: '25px'
            },
            [presets.Desktop]: {
              fontSize: '38px'
            },
            lineHeight: 1.4
          }}>
            {msg}
          </div>
          <div css={{
            color: presets.brandLighter,
            marginTop: '35px',
            [presets.Mobile]: {
              lineHeight: 1.2,
              // fontSize: scale(0.6).fontSize
            },
            [presets.Desktop]: {
              fontSize: scale(1.2).fontSize,
              lineHeight: 1
            }
          }}>{pl('day', days, ':')}  {pl('hour', hours, ':')} {pl('minute', minutes, ':')} {pl('second', seconds)}</div>
          <div css={{
            display: activeTierBonus === 'true' && currentDiscountValue > 0 ? 'block' : 'none',
            color: "#FFF",
            fontSize: "25px",
            marginTop: "40px"
          }}>
            ACTIVE TIER BONUS <b>{currentDiscountValue}%</b>
          </div>
          <div css={{
            display: participate === 'true' ? 'block' : 'none',
            marginTop: rhythm(1)
          }}>
            <CtaButton to="/token-sale/account/" overrideCSS={{
              color: '#fff !important',
              background: '#fff',
              border: '1px solid #fff !important'
            }}>
              <span css={{ verticalAlign: `middle` }}>Buy Tokens</span>
              {` `}
              <ArrowForwardIcon
                css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
              />
            </CtaButton>
          </div>
          <WhiteListWidget overrideCss={{
            display: whitelist ? 'block' : 'none',
            marginTop: '50px'
          }} />
        </div>
        <Status summary={summaryData} overrideCss={{
          display: status === 'true' ? 'block' : 'none',
          marginTop: "75px !important",
          textAlign: 'center',
          color: "#FFF"
        }} />
        <div css={{
          display: progress === 'true' ? 'block' : 'none',
          marginTop: "25px !important",
          textAlign: 'center',
          color: "#FFF",
          margin: '0 auto',
          [presets.Mobile]: {
            fontSize: '18px',
            maxWidth: "300px"            
          },
          [presets.Desktop]: {
            maxWidth: "500px"            
          }
        }}>
          <ProgressLine percent={distributionPercent} strokeWidth="2" strokeColor="#FFF" />
          <div css={{
            width: '100%'
          }}>
            <div css={{float: 'left'}}>{Math.round(summaryData.amount)} USD</div>
            <div css={{float: 'right'}}>{summaryData.hardCap} USD</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ({ summary }) => {
  summaryData = summary

  dates = {
    PreSaleStartCountDownTime: new Date(summary.dates.preSale.start).getTime(),
    PreSaleEndCountDownTime: new Date(summary.dates.preSale.end).getTime(),
    SaleStartCountDownTime: new Date(summary.dates.sale.start).getTime(),
    SaleEndCountDownTime: new Date(summary.dates.sale.end).getTime(),
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
        msg="Token pre-sale starts in :"
        completeRenderer={CountdownPreSaleCompletion()}
      />
    </div>
  )
}
