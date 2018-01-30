import presets from "../../utils/presets"

const Telegram = () => {
  return (
    <div id="telegram" css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '150px 0px'
    }}>
      <h1>Let's chat on Telegram !</h1>
      <iframe css={{border: 0}} src="https://tgwidget.com/widget/count/?id=5a706c1f83ba886f068b4567" frameBorder="0" scrolling="no" width="160px" height="50px" async></iframe>
    </div>
  )
}

export default Telegram
