import presets from "../../utils/presets"

const Telegram = () => {
  return (
    <div id="telegram" css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '150px 0px'
    }}>
      <h1>Let's chat on Telegram !</h1>
      <iframe css={{border: 0}} src="https://tgwidget.com/widget/count/?id=5a3773a583ba881a0c8b4567" frameBorder="0" scrolling="no" width="160px" height="50px" async></iframe>
    </div>
  )
}

export default Telegram
