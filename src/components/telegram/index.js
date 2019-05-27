import React from 'react'
import {css} from 'glamor'
import TelegramIcon from "../../../static/images/telegram-blue.svg"

const pulse = (rgba) => {
  const rgbaColor =  rgba || '255,255,255'
  const pulseKeyFrames = css.keyframes({
    '0%' : {
      boxShadow: `0 0 0 rgba(${rgbaColor}, 0.4)`
    },
    '70%' : {
      boxShadow: `0 0 0 15px rgba(${rgbaColor}, 0)`
    },
    '100%' : {
      boxShadow: `0 0 0 0px rgba(${rgbaColor}, 0)`
    }
  })
  
  return css({
    borderRadius: '50%',
    boxShadow: '0 0 0 rgba(255,255,255, 0.6)',
    animation: `${pulseKeyFrames} 1.5s infinite`,
    ':hover' : {
      animation : 'none'
    }
  })
}

class Telegram extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props
  }

  render() {
    let telegramGroup
    
    if (this.props.summary) {
      telegramGroup = this.props.summary.social.telegram.group
    }

    return (
      <a
        href={"https://telegram.me/squeezerio"}
        target="_blank"
        title="Telegram"
        css={{
          position: 'fixed',
          height: '60px',
          margin: '15px',
          width: '60px',
          border: 0,
          right: 0,
          zIndex: 2,
          bottom: 0
        }}
      >
        <img className={`${pulse('26, 117, 255')}`} src={TelegramIcon} css={{
          width: '100%',
          height: 'auto',
          ':hover': {
            opacity: 0.7
          }
        }} />
      </a>
    )
  }
}

export default Telegram
