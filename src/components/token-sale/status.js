import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import CountUp from 'react-countup';
import Terminal from "../../components/terminal"

const CountItem = ({ title, end }) => (
  <div css={{
    display: 'inline-block',
    width: '33.3%',
    textAlign: 'center',
    textTransform: 'uppercase'
  }}>
    <div css={{
      [presets.Mobile]: {
        fontSize: '16px'
      },
      [presets.Desktop]: {
        fontSize: '50px'
      },
      fontWeight: 'bold'
    }}>
      <CountUp duration={1.5} start={0} end={end} />
      <div css={{
        [presets.Mobile]: {
          fontSize: '12px',
          marginTop: '5px'          
        },
        [presets.Desktop]: {
          marginTop: '25px',          
          fontSize: '18px'
        },
      }}>{title}</div>
    </div>
  </div>
)

export default ({ overrideCss, color, summary }) => (
  <div css={{
    width: '100%',
    [presets.Mobile]: {
      marginTop: '50px'          
    },
    [presets.Desktop]: {
      marginTop: '120px'
    },    
    color: color,
    ...overrideCss
  }}>
    <CountItem title="USD" end={Math.round(summary.amount)} />
    <CountItem title="Tokens sent" end={Math.round(summary.saleSupply - summary.balance)} />
    <CountItem title={summary.contributors === 1 ? 'Contributor' : 'Contributors'} end={Math.round(summary.contributors)} />
  </div>
)
