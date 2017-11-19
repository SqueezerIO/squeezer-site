import React from "react"
import presets from "../utils/presets"
import { rhythm, scale } from "../utils/typography"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import HearthIcon from "react-icons/lib/fa/heart"
import JavascriptIcon from "../assets/techs/js.png"
import PythonIcon from "../assets/techs/py.png"
import JavaIcon from "../assets/techs/java.png"
import CSharpIcon from "../assets/techs/cs.png"

const TechIcon = ({ icon, height, children }) => {
  let h = height ? height : '120px'

  return (
    <span css={{ whiteSpace : `nowrap` }}>
        <img alt={children}
             src={icon}
             css={{
               marginTop: rhythm(2),
               [presets.Mobile]  : {
                 width       : '20%',
                 height      : 'auto',
                 marginRight : '15px'
               },
               [presets.Phablet] : {
                 height      : 'auto',
                 width       : '20%',
                 marginRight : '30px'
               },
               [presets.Desktop] : {
                 height      : h,
                 width       : 'auto',
                 margin : '50px'
               }
             }}
        />
    </span>
  )
}

const Techs = () => {
  return (
    <div css={{
      width         : '100%',
      paddingTop    : rhythm(2),
      paddingBottom : rhythm(6),
      marginBottom : rhythm(2),
      borderBottom: '1px solid #cfe7fc',
      [presets.Mobile]  : {
        textAlign : 'center',
        width: '100%'
      },
      [presets.Phablet] : {
        paddingRight : 0,
      },
      [presets.Tablet]  : {
        paddingTop : rhythm(4)
      },
      [presets.Desktop] : {
        paddingTop : rhythm(6),
      }
    }}>
      <h1 css={{
        [presets.Mobile]  : {
          fontSize    : scale(0.4).fontSize
        },
        [presets.Desktop]  : {
          fontSize    : scale(1.2).fontSize
        }
        }}>
        Use a technology stack that you <HearthIcon css={{ color : 'red' }}/>
      </h1>
      <div css={{
          [presets.Mobile]  : {
            marginLeft: rhythm(3),
            marginRight: rhythm(2)
        },
        [presets.Desktop]  : {
          marginLeft: rhythm(1),
          marginRight: rhythm(1)
        }
      }}>
        <TechIcon icon={JavascriptIcon}/>
        <TechIcon icon={PythonIcon}/>
        <TechIcon icon={JavaIcon}/>
        <TechIcon icon={CSharpIcon}/>
      </div>
    </div>
  )
}

export default Techs
