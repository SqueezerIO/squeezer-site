import React from "react"
import EnterpriseBackground from "../assets/enterprise.png"
import { rhythm, scale, options } from "../utils/typography"
import presets from "../utils/presets"
import NumberOneIcon from "../assets/number-one.svg"
import NumberTwoIcon from "../assets/number-two.svg"
import NumberThreeIcon from "../assets/number-three.svg"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import Input from "../components/input"
import CtaButton from "../components/cta-button"

const Step = ({ icon, title, description, overrideCss }) => (
  <div css={{
    marginTop : rhythm(3),
    ...overrideCss
  }}>
    <div css={{
      width         : rhythm(2),
      display       : 'inline-block',
      verticalAlign : 'top'
    }}>
      <img css={{
        width  : '100%',
        height : 'auto',
        margin : 0
      }} src={icon}/>
    </div>
    <div css={{
      display       : 'inline-block',
      verticalAlign : 'top',
      [presets.Mobile]   : {
        marginTop : rhythm(2)
      },
      [presets.Desktop]  : {
        width         : rhythm(19),
        marginLeft    : rhythm(2),
        marginTop     : rhythm(0.4)
      }
    }}>
      <div css={{
        fontFamily : 'Futura',
        fontSize   : scale(1.2).fontSize
      }}>{title}</div>
      <div css={{
        fontFamily : 'sans-serif',
        paddingTop : rhythm(1)
      }}>{description}</div>
    </div>
  </div>
)

const Contact = () => (
  <div css={{
    display : 'inline-block',
    [presets.Mobile]   : {
      marginTop : rhythm(2),
      marginBottom : rhythm(2)
    },
    [presets.Desktop]  : {
      marginTop : 0,
      marginBottom : 0
    }
  }}>
    <Input name="company" type="text" placeholder="Company"/>
    <Input name="name" type="text" placeholder="Name"/>
    <Input name="email" type="email" placeholder="Email"/>
    <CtaButton to="/docs/" overrideCSS={{ marginTop : '1rem', marginLeft : rhythm(1) }}>
      Let's talk
    </CtaButton>
  </div>
)

export default () => (
  <div>
    <div css={{
      width              : '100%',
      backgroundImage    : `url("${EnterpriseBackground}")`,
      backgroundRepeat   : 'no-repeat',
      backgroundPosition : 'top center',
      fontFamily         : 'Futura',
      border             : 0,
      [presets.Mobile]   : {
        backgroundSize : 'cover',
        height         : rhythm(15)
      },
      [presets.Desktop]  : {
        backgroundSize : '100% auto',
        height         : rhythm(22)
      }
    }}>
      <div css={{
        background : 'rgba(17,28,48,0.8)',
        // opacity    : 0.9,
        width      : '100%',
        height     : '100%',
        margin     : '0 auto',
        // textAlign: 'center'
      }}>
        <div css={{
          color             : presets.brandLighter,
          paddingTop        : rhythm(6),
          opacity           : 1,
          textShadow: '2px 2px #000',
          // letterSpacing : '12px'
          [presets.Mobile]  : {
            paddingLeft  : rhythm(1),
            paddingRight : rhythm(1)
          },
          [presets.Desktop] : {
            paddingLeft  : rhythm(4),
            paddingRight : rhythm(4),
            lineHeight   : '60px',
            fontSize     : scale(1.3).fontSize
          }
        }}>Created for the scalability,
          compliance, security and governance requirements of large organizations
        </div>
      </div>
    </div>
    <div css={{
      [presets.Mobile]  : {
        padding : rhythm(1)
      },
      [presets.Desktop] : {
        margin : rhythm(4)
      }
    }}>
      <div css={{
        display       : 'inline-block',
        verticalAlign : 'top'
      }}>
        <Step icon={NumberOneIcon} title="Analyze" overrideCss={{ marginTop : 0 }}
              description="Get more info about your current infrastructure or startup . Find out if there is a free slot for a serverless technology like Squeezer ."/>
        <Step icon={NumberTwoIcon} title="Train"
              description="Train your teams on how to code with Squeezer . Get the best strategies , architectures and planning for your project ."/>
        <Step icon={NumberThreeIcon} title="Implement"
              description="Start the implementation . Take 100% advantage of the framework toolkit . Continuous delivery , showing some respect to your deadlines ."/>
      </div>
      <div css={{
        display           : 'inline-block',
        [presets.Desktop] : {
          marginLeft : rhythm(5),
        }
      }}>
        <Contact/>
      </div>
    </div>
    <Newsletter/>
    <Footer/>
  </div>
)
