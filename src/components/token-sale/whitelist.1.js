import { rhythm, scale } from "../../utils/typography"
import presets from "../../utils/presets"
import CtaButton from "../../components/cta-button"
import ArrowForwardIcon from "react-icons/lib/md/arrow-forward"
import React from "react"
import Input from "../../components/input"

class Whitelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      formSubmitted : false,
      formSent : false,
      form: {
        email: '',
        number: ''
      }
    };
  }

  showWhitelistForm(e) {
    e.preventDefault();
    this.setState({ showForm: true });
  }

  handleChange(event) {
    this.state.form[event.target.name] = event.target.value;

    this.setState({ form: this.state.form });
  }

  handleSubmit(event) {
    this.setState({formSubmitted : true})

    event.preventDefault();
    
    this.setState({
      showForm : false,
      formSent : true
    })
  }

  render() {
    return (
      <div css={{
        marginTop: '50px'
      }}>
        <div css={{
          display: this.state.showForm ? 'block' : 'none'
        }}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Input placeholder="Email address" name="email" type="email" onChange={this.handleChange.bind(this)} value={this.state.form.email} required="true" overrideCss={{
              margin: 0,
              display: 'inline-block',
              height: '60px'
            }} />
            <Input placeholder="Amount (USD)" name="amount" type="text" onChange={this.handleChange.bind(this)} value={this.state.form.amount} required="true" overrideCss={{
              margin: 0,
              height: '60px',
              marginLeft: '15px',
              display: 'inline-block',
              width: '150px'
            }} />
            <input disabled={this.state.formSubmitted} type="submit" value="Submit" required="true" css={{
              padding: '15px 25px',
              cursor: 'pointer',
              height: '60px',
              fontSize: '25px',
              width: rhythm(6),
              backgroundColor: `transparent`,
              borderRadius: 0,
              color: '#fff !important',
              border: '1px solid #fff !important',
              marginLeft: '15px',
              display: 'inline-block',
              verticalAlign: `middle`
            }} />
          </form>
        </div>
        <div onClick={this.showWhitelistForm.bind(this)} css={{
          display: (this.state.showForm && this.state.formSubmitted === false) ? 'none' : 'block',
          padding: '15px 25px',
          cursor: 'pointer',
          fontSize: '25px',
          width: rhythm(15),
          color: '#fff !important',
          border: '1px solid #fff !important'
        }}>
          <span css={{ verticalAlign: `middle`, fontWeight: 'bold' }}>ADD ME ON WHITELIST</span>
          {` `}
          <ArrowForwardIcon
            css={{ verticalAlign: `baseline`, marginLeft: `.2em` }}
          />
        </div>
        <div css={{
          display: this.state.formSent ? 'block' : 'none',
          fontSize: '25px',
          color: '#fff !important',
        }}>
          You have been successfully added to our whitelist ! 
        </div>
      </div>
    );
  }
}

export default Whitelist;