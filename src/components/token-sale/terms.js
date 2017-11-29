import PercentageCircle from '../../components/percentage-circle'
import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import VisaIcon from "../../assets/token-sale/visa.svg"
import MastercardIcon from "../../assets/token-sale/mastercard.svg"
import { css } from 'glamor'

const ContentTable = ({ data, overrideCss }) => {
  const content = data.map((val) => {
    return (
      <tr key={val.title}>
        <td css={{
          width: '25%',
          paddingLeft: '10px !important',
          fontWeight: 'bold'
        }}>{val.title}</td>
        <td css={{
          paddingRight: '10px !important',
        }}>{val.description}</td>
      </tr>
    );
  });

  return (
    <table css={{ ...overrideCss }}>
      <tbody>
        {content}
      </tbody>
    </table>
  );
};

const commafy = (num) => {
  var str = num.toString().split('.');
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, '$1 ');
  }
  return str.join('.');
}

const Tier = ({ summary }) => {
  const Segment = ({ title, obj, background }) => (
    <div css={{
      background: background,
      color: '#FFF',
      display: 'inline-block',
      padding: '25px 50px'
    }}>
      <div css={{
        fontSize: '15px'
      }}>{title} <b>{obj.active ? '- active' : ''}</b></div>
      <div css={{
        fontWeight: 'bold',
        marginTop: '10px',
        fontSize: '30px'
      }}>$ {obj.value}</div>
    </div>
  )

  return (
    <div css={{
      marginTop: rhythm(4),
      marginBottom: rhythm(2)
    }}>
      <Segment title="TIER I" obj={summary.tiers.t1} background="#ff6a1a" />
      <Segment title="TIER II" obj={summary.tiers.t2} background="#53dfa9" />
      <Segment title="TIER III" obj={summary.tiers.t3} background="#67bfe4" />
      <Segment title="TIER IV" obj={summary.tiers.t4} background="#1695d0" />
    </div>
  )
}

const Terms = ({ summary }) => {
  const token = summary.token;

  const formatTime = (time) => {
    const date = new Date(time);

    return `${date.getUTCMonth() + 1}.${date.getUTCDate()}.${date.getUTCFullYear()}`;
  }

  return (
    <div css={{
      borderTop: `1px solid ${presets.veryLightBlue}`,
      width: '100%',
      padding: '150px 0px 150px 0px'
    }}>
      <div css={{
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 css={{ textAlign: 'center' }}>Token terms</h1>
        <Tier summary={summary} />
        <div css={{ paddingTop: '100px', margin: rhythm(1), width: rhythm(13), display: 'inline-block' }}>
          <PercentageCircle radius={150} borderWidth={4} percent={20} color={"#3498db"}>
            <h1 css={{ margin: 0 }}>{summary.creatorsSupply / (summary.saleSupply + summary.creatorsSupply) * 100}%</h1>
            Creators, development, marketing
        </PercentageCircle>
        </div>
        <div css={{ padding: '100px 0px', width: rhythm(13), margin: rhythm(1), display: 'inline-block' }}>
          <PercentageCircle radius={150} borderWidth={4} percent={80} color={"#2ecc71"}>
            <h1 css={{ margin: 0 }}>{summary.saleSupply / (summary.saleSupply + summary.creatorsSupply) * 100}%</h1>
            Token sale
        </PercentageCircle>
        </div>
        <ContentTable overrideCss={{
          margin: '0 auto',
          [presets.Tablet]: {
            width: rhythm(20)
          },
          [presets.Desktop]: {
            width: rhythm(25)
          },
        }} data={[
          {
            title: 'Token name',
            description: token
          },
          {
            title: 'Compatibility',
            description: 'Ethereum ERC 20 Standard'
          },
          {
            title: 'Total supply',
            description: `${commafy(summary.saleSupply + summary.creatorsSupply)} ${token}`
          },
          {
            title: 'Sale supply',
            description: `${commafy(summary.saleSupply)} ${token}`
          },
          {
            title: 'Creators supply',
            description: `${commafy(summary.creatorsSupply)} ${token}`
          },
          {
            title: 'Soft cap',
            description: `${commafy(summary.softCap)} USD`
          },
          {
            title: 'Hard cap',
            description: `${commafy(summary.hardCap)} USD`
          },
          {
            title: 'Extra tokens',
            description: <div>tokens remained from token-sale will be burned</div>
          },
          {
            title: 'Pre-sale period',
            description: `${formatTime(summary.dates.preSale.start)} - ` +
              `${formatTime(summary.dates.preSale.end)}`
          },
          {
            title: 'Sale period',
            description: `${formatTime(summary.dates.sale.start)} - ` +
              `${formatTime(summary.dates.sale.end)}`
          },
          {
            title: 'Tier 1',
            description: `${formatTime(summary.tiers.t1.start)} - ` +
              `${formatTime(summary.tiers.t1.end)}`
          },
          {
            title: 'Tier 2',
            description: `${formatTime(summary.tiers.t2.start)} - ` +
              `${formatTime(summary.tiers.t2.end)}`
          },
          {
            title: 'Tier 3',
            description: `${formatTime(summary.tiers.t3.start)} - ` +
              `${formatTime(summary.tiers.t3.end)}`
          },
          {
            title: 'Tier 4',
            description: `${formatTime(summary.tiers.t4.start)} - ` +
              `${formatTime(summary.tiers.t4.end)}`
          },
          {
            title: 'Purchase methods',
            description: <div>
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
        ]} />
      </div>
    </div>
  )
}

export default Terms