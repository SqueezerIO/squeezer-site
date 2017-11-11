import PercentageCircle from '../../components/percentage-circle'
import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import VisaIcon from "../../assets/token-sale/visa.svg"
import MastercardIcon from "../../assets/token-sale/mastercard.svg"

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '45px 0px 100px 0px'
  }}>
    <div css={{
      width: rhythm(25),
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
      <table css={{}}>
        <tbody>
          <tr>
            <td>Token name</td>
            <td><b>SQZ</b></td>
          </tr>
          <tr>
            <td>Compatibility</td>
            <td><b>Ethereum ERC 20 Standard</b></td>
          </tr>
          <tr>
            <td>Token Supply</td>
            <td><b>385,000,000 SQZ</b></td>
          </tr>
          <tr>
            <td>Price</td>
            <td>
              <b>1$ = 4 SQZ</b><br />
              <b>1$ = 5 SQZ ( token sale)</b>
            </td>
          </tr>
          <tr>
            <td>Min Goal</td>
            <td><b>1,000,000$</b></td>
          </tr>
          <tr>
            <td>Purchase methods</td>
            <td>
              <b>BTC, ETH, ETC, EXP, XEM, LSK, XMR, GAME, STEEM, GOLOS, SBD, ZEC, NLG, STRAT, ARDR, REP, LBC, MAID, FCT, LTC, BCN, XRP, DOGE, AMP, NXT, DASH, DSH, RADS, XDN, AEON, NBT, FCN, QCN, NAV, POT, GNT, WAVES, USDT, SWT, MLN, DGD, TIME, SNGLS, XAUR, PIVX, GBG, TRST, EDG, GBYTE, DAR, WINGS, RLC, GNO, DCR, GUP, SYS, LUN, STR, BAT, ANT, BNT, SNT, CVC, EOS, PAY, QTUM, BCC, NEO, OMG, MCO, MTL, 1ST, ADX, ZRX, QTUM-I, DCT, PTOY, TKN, STORJ, CFI, FUN, MYST, HMQ, NMR, SALT, ADT</b>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
