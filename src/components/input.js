import React from "react"
import { rhythm, scale } from "../utils/typography"

export default ({ overrideCss, placeholder, type, name, id }) => {
  return (
    <input id={id} name={name} type={type} placeholder={placeholder}
           css={{
             width      : rhythm(12),
             color      : '#808080',
             padding    : rhythm(0.5),
             fontFamily : 'sans-serif',
             border     : '1px solid #d9d9d9',
             margin     : rhythm(1),
             display    : 'block',
             ...overrideCss
           }}
    />
  )
}
