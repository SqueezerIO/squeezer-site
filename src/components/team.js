import React from "react"
import presets from "../utils/presets"
import Container from "./container"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"
import LinkedinIcon from "react-icons/lib/fa/linkedin-square"
import NickPic from "../assets/team/nick.png"
import KarlPic from "../assets/team/karl.png"
import VladPic from "../assets/team/vlad.png"

const HrefEl = ({ link, type }) => {
  return (
    <div css={{
      display: link ? 'inline-block' : 'none',
      margin: '5px 10px'
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

  onMouseEnter() {
    if (this.state.showInfo === false) {
      this.setState({
        showInfo: true
      })
    }
  }

  onMouseLeave() {
    if (this.state.showInfo === true) {
      this.setState({
        showInfo: false
      })
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
        <div onMouseLeave={this.onMouseLeave.bind(this)}>
          <img css={{
            width: '100%',
            height: 'auto'
          }} alt={title} src={pic} onMouseEnter={this.onMouseEnter.bind(this)} />
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
            <HrefEl link={twitter} type="twitter" />
            <HrefEl link={linkedin} type="linkedin" />
            <HrefEl link={github} type="github" />
            </div>
        </div>
        <div css={{
          fontWeight: 'bold'
        }}>{name}</div>
        <div>{title}</div>
      </div>
    )
  }
}

const Team = () => {
  return (
    <div css={{
      textAlign: 'center'
    }}>
      <h1>The Squeezer Team</h1>
      <Member 
        name="Nick Chisiu" 
        title="Founder" 
        twitter="https://twitter.com/nickchisiu" 
        linkedin="https://www.linkedin.com/in/nick-chisiu" 
        github="https://github.com/nickchisiu" 
        pic={NickPic} />
      <Member 
        name="Vlad Nicula" 
        title="Core Developer" 
        twitter="https://twitter.com/agilius" 
        linkedin="https://linkedin.com/in/vladnicula" 
        github="https://github.com/vladnicula" 
        pic={VladPic} />
      <Member 
        name="Karl Eastwood" 
        title="Advisor" 
        linkedin="https://www.linkedin.com/in/karl-eastwood-35b8b343/" 
        pic={KarlPic} />
    </div>
  )
}

export default Team
