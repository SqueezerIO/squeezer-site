import React from "react"
import presets from "../../utils/presets"
import Container from "../container"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"
import LinkedinIcon from "react-icons/lib/fa/linkedin-square"
import NickPic from "../../assets/team/nick.png"
import KarlPic from "../../assets/team/karl.png"
import VladPic from "../../assets/team/vlad.png"
import CalinaPic from "../../assets/team/calina.png"

const HrefEl = ({ link, type }) => {
  return (
    <div css={{
      display: link ? 'inline-block' : 'none',
      padding : 0,
      margin: '3px 5px',
      verticalAlign: 'top'
    }}>
      <a
        css={{
          textDecoration: 'none',
          borderBottom: '0 !important'
        }}
        href={link} target="_blank">
        <TwitterIcon css={{
          display : type === 'twitter' ? 'block' : 'none'
        }}/>
        <LinkedinIcon css={{
          display : type === 'linkedin' ? 'block' : 'none'
        }}/>
        <GithubIcon css={{
          display : type === 'github' ? 'block' : 'none'
        }}/>
      </a>
    </div>
  )
}

class Member extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    }
  }

  render() {
    const title = this.props.title
    const name = this.props.name
    const pic = this.props.pic
    const twitter = this.props.twitter
    const github = this.props.github
    const linkedin = this.props.linkedin

    return (
      <div css={{
        width: '250px',
        height: '350px',
        display: 'inline-block',
        margin: '25px'
      }}>
        <div>
          <img css={{
            width: '100%',
            height: 'auto'
          }} alt={title} src={pic} />
          <div css={{
            display: this.state.showInfo ? 'block' : 'none',
            position: 'absolute',
            width: '250px',
            height: '60px',
            textAlign: 'center',
            marginTop: '-83px',
            paddingTop: '15px',
            color: '#FFFFFF',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
            </div>
        </div>
        <div css={{
          fontWeight: 'bold'
        }}>{name}             <HrefEl link={linkedin} type="linkedin" />        </div>
        <div>{title}</div>
      </div>
    )
  }
}

const Team = () => {
  return (
    <div css={{
      textAlign: 'center',
      borderTop: `1px solid ${presets.veryLightBlue}`,
      padding: '80px 0px'      
    }}>
      <h1>Token-sale Team</h1>
      <Member 
        name="Nick Chisiu" 
        title="Founder &amp; CEO" 
        linkedin="https://www.linkedin.com/in/nick-chisiu" 
        pic={NickPic} />
      <Member 
        name="Vlad Nicula" 
        title="Framework Lead Engineer" 
        linkedin="https://linkedin.com/in/vladnicula" 
        pic={VladPic} />
      <Member 
        name="Karl Eastwood" 
        title="Financial Advisor" 
        linkedin="https://www.linkedin.com/in/karl-eastwood-35b8b343/" 
        pic={KarlPic} />
      <br/>
      <Member 
        name="Calina Oros" 
        title="Legal Advisor" 
        linkedin="https://www.linkedin.com/in/oros-calina-a33423152/" 
        pic={CalinaPic} />        
    </div>
  )
}

export default Team
