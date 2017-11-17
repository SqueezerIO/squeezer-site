import PercentageCircle from '../../components/percentage-circle'
import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import VisaIcon from "../../assets/token-sale/visa.svg"
import MastercardIcon from "../../assets/token-sale/mastercard.svg"
import { css } from 'glamor'

const ContentTable = ({data}) => {
  const content = data.map((val) => {
    return (
      <tr key={val.title}>
        <td css={{
          width: '25%',
          fontWeight: 'bold'
        }}>&nbsp;{val.title}</td>
        <td css={{
          
        }}>{val.description}</td>
      </tr>
    );
  });

  return (
    <table>
      <tbody>
        {content}
      </tbody>
    </table>
  );
};

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '150px 0px 150px 0px'
  }}>
    <div css={{
      [presets.Tablet]: {
        width: rhythm(20)        
      },
      [presets.Desktop]: {
        width: rhythm(25)        
      },
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 css={{ textAlign: 'center' }}>Token terms</h1>
      <div css={{paddingTop: '100px', width: rhythm(13), margin: '0 auto'}}>
        <PercentageCircle radius={150} borderWidth={4} percent={20} color={"#3498db"}>
          <h1>20%</h1>
          Creators, development, marketing
        </PercentageCircle>
      </div>
      <div css={{padding: '100px 0px', width: rhythm(13), margin: '0 auto'}}>
        <PercentageCircle radius={150} borderWidth={4} percent={80} color={"#2ecc71"}>
          <h1>80%</h1>
          Token sale
        </PercentageCircle>
      </div>
      <ContentTable data={[
        {
          title : 'Token name',
          description : 'SQZ'
        },
        {
          title : 'Compatibility',
          description : 'Ethereum ERC 20 Standard'
        },
        {
          title : 'Token Supply',
          description : '385,000,000 SQZ'
        },
        {
          title : 'Price',
          description : <div>1$ = 4 SQZ<br/>1$ = 5 SQZ ( token sale)</div>
        },
        {
          title : 'Min Goal',
          description : '300,000$'
        },
        {
          title : 'Extra tokens',
          description : <div>tokens remained from token-sale will be burned</div>
        },
        {
          title : 'Pre-sale period',
          description : '04 Dec 2017 - 24 Dec 2017 (UTC)'
        },
        {
          title : 'Sale period',
          description : '05 Jan 2018 - 25 Feb 2018 (UTC)'
        },
        {
          title : 'Purchase methods',
          description : <div>
            BTC, ETH, ETC, EXP, XEM, LSK, XMR, GAME, STEEM, GOLOS, SBD, ZEC, NLG, STRAT, ARDR, REP, 
            LBC, MAID, FCT, LTC, BCN, XRP, DOGE, AMP, NXT, DASH, DSH, RADS, XDN, AEON, NBT, FCN, QCN, 
            NAV, POT, GNT, WAVES, USDT, SWT, MLN, DGD, TIME, SNGLS, XAUR, PIVX, GBG, TRST, EDG, GBYTE, 
            DAR, WINGS, RLC, GNO, DCR, GUP, SYS, LUN, STR, BAT, ANT, BNT, SNT, CVC, EOS, PAY, QTUM, BCC, 
            NEO, OMG, MCO, MTL, 1ST, ADX, ZRX, QTUM-I, DCT, PTOY, TKN, STORJ, CFI, FUN, MYST, HMQ, NMR, SALT, ADT
              <br /><br />
              <img css={{
                display: 'inline-block',
                verticalAlign: 'middle'
              }} src={VisaIcon} alt="visa" height="45" />
              <img css={{
                display: 'inline-block',
                verticalAlign: 'middle',
                marginLeft: '15px'
              }} src={MastercardIcon} alt="mastercard" height="30" />
          </div>
        }
      ]}/>
    </div>
  </div>
);
