import React from "react"
import presets from "../utils/presets"

const CloudWithLogo = ({ icon, height, children }) => {
  let h = height ? height : '40px'

  return (
    <span css={{ whiteSpace : `nowrap` }}>
        <img alt={children}
             src={icon}
             css={{
               [presets.Mobile]  : {
                 width  : '20%',
                 height : 'auto',
                 marginRight       : '5px'
               },
               [presets.Phablet] : {
                 height : 'auto',
                 width  : '20%',
                 marginRight       : '30px'
               },
               [presets.Desktop] : {
                 height : h,
                 width  : 'auto',
                 marginRight       : '30px'
               }
             }}
        />
    </span>
  )
}

export default CloudWithLogo
