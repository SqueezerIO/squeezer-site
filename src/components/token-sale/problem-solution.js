import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import ProblemImg from "../../assets/token-sale/problem.png"
import SolutionImg from "../../assets/token-sale/solution.png"

export default () => (
  <div css={{
    borderTop: `1px solid ${presets.veryLightBlue}`,
    width: '100%',
    padding: '100px 0px'
  }}>
    <div css={{
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1 css={{ textAlign: 'center' }}>Problem</h1>
      <img css={{
        marginTop: rhythm(1),
        [presets.Mobile]: {    
          maxWidth: '350px'          
        },
        [presets.Tablet]: {    
          maxWidth: '650px'          
        },
        height: 'auto'
      }}
        src={ProblemImg} alt="problem" />
      <h1 css={{ textAlign: 'center' }}>Solution</h1>
      <img css={{
        marginTop: rhythm(1),
        [presets.Mobile]: {    
          maxWidth: '350px'          
        },
        [presets.Tablet]: {    
          maxWidth: '650px'          
        },
        height: 'auto'
      }}
        src={SolutionImg} alt="solution" />        
    </div>
  </div>
)
