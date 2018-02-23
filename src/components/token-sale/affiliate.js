import presets from "../../utils/presets"
import AffiliatePic from "../../assets/token-sale/affiliate.png"

const Affiliate = ({summary}) => {
  return (
    <div id="affiliate" css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '150px 0px'
    }}>
      <h1 css={{
        marginBottom: '50px'
      }}>AFFILIATE</h1>
      <div onClick={() => window.location.replace("/token-sale/account/")} css={{
        cursor: 'pointer'
      }}>
        <img css={{
          height: '250px',
          width: 'auto',
          [presets.Mobile]: {
            textAlign: 'center'
          },
          [presets.Tablet]: {
            marginRight: '25px',
            display : 'inline-block'
          },
          verticalAlign: 'top',
        }} src={AffiliatePic} title="Affiliate" />
        <div css={{
          [presets.Mobile]: {
            textAlign: 'center'
          },
          [presets.Tablet]: {
            textAlign: 'left',
            marginLeft: '25px',
            display : 'inline-block'
          },
          verticalAlign: 'top',
          marginTop: '25px',
          textAlign: 'left',
          color: '#000',
        }}>
          <div css={{
            fontWeight: 'bold',
            fontSize: '30px',
            lineHeight: '1'
          }}>JOIN OUR</div>
          <div css={{
            fontWeight: 'bold',
            fontSize: '45px',
            lineHeight: '1'
          }}>AFFILIATE</div>
          <div css={{
            fontWeight: 'bold',
            fontSize: '20px',
            lineHeight: '1'
          }}>MARKETING PROGRAM</div>
          <div css={{
            marginTop: '25px',
            // fontWeight: 'bold',
            fontSize: '20px',
            color: presets.brandLight,
            lineHeight: '1'
          }}>${summary.affiliate.commission}% COMMISSION. PAID IN <b>ETH</b></div>
          </div>
      </div>
    </div>
  )
}

export default Affiliate
