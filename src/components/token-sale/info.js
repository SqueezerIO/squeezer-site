import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import React from "react"
import CtaButton from "../cta-button"
import DocsIcon from "react-icons/lib/fa/file-text"
// import WhitePaper from "../../assets/token-sale/Squeezer.IO-White-Paper-November-2017.pdf"
import GithubIcon from "react-icons/lib/go/mark-github"

const InfoButton = ({ to, text, children }) => (
  <div css={{
    background: presets.brand,
    color: presets.brandLighter,
    margin: '0 auto',
    padding: '20px 40px',
    marginLeft: '25px',
    fontSize: '20px',
    marginTop: '15px',
    display: 'inline-block',
    cursor: 'pointer'
  }} onClick={() => window.open(to, "_blank")}>
    {children}
    <div css={{
      cursor: 'pointer',
      verticalAlign: `middle`,
      display: 'inline-block',
      marginLeft: '5px'
    }}>{text}</div>
  </div>
)

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '150px 0px',
    textAlign: 'center'
  }}>
    <InfoButton to="/docs/Squeezer.IO-White-Paper-November-2017.pdf" icon={DocsIcon} text="White paper">
      <DocsIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em`,     cursor: 'pointer'      }}
      />
    </InfoButton>
    <InfoButton to="https://github.com/SqueezerIO" icon={GithubIcon} text="GitHub Organization">
      <DocsIcon
        css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
      />
    </InfoButton>
  </div>
)

// export default () => (
//   <div css={{
//     borderTop: `1px solid ${presets.veryLightBlue}`,
//     width: '100%',
//     padding: '150px 0px',
//     textAlign: 'center'
//   }}>
//     <div css={{
//       background: presets.brand,
//       width: rhythm(7.3),
//       margin : '0 auto',
//       display : 'inline-block'
//     }} onClick={e => {window.open(`${'/static' + WhitePaper.split('static')[1]}`, "_blank");}}>
//       <CtaButton to="#" overrideCSS={{
//         color: '#fff !important'
//       }}>
//         <DocsIcon
//           css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
//         />
//         {` `}
//         <span css={{ verticalAlign: `middle` }}>White paper</span>
//       </CtaButton>
//     </div>
//     <div  css={{
//       background: presets.brand,
//       width: rhythm(11),
//       margin : '0 auto',
//       marginLeft: '25px',
//       marginTop: '15px',
//       display : 'inline-block',
//       cursor : 'pointer'
//     }} onClick={() => window.open("https://github.com/SqueezerIO", "_blank")}>
//       <CtaButton to="" overrideCSS={{
//         color: '#fff !important'
//       }}>
//         <GithubIcon
//           css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
//         />
//         {` `}
//         <span css={{ verticalAlign: `middle` }}>GitHub Organization</span>
//       </CtaButton>
//     </div>
//   </div>
// )
