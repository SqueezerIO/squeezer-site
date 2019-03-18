import React from "react"
import { withNamespaces } from "react-i18next"
import { FaAngleDown } from "react-icons/fa"
import onClickOutside from "react-onclickoutside"

const languages = [
  { code: "en-US", label: "english" },
  { code: "zh-Hans", label: "chinese" }
]

const findByCode = (code) => {
  const normalizedCode = code.split('-')[0]

  let ret = null

  for (var i = 0; i < languages.length; i++) {
    const lang = languages[i]

    if (code === lang.code) {
      ret = lang
    }
  }

  for (var i = 0; i < languages.length; i++) {
    const lang = languages[i]

    if (!ret && normalizedCode === lang.code.split('-')[0]) {
      ret = lang
    }
  }

  return ret
}

class LanguageSelector extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.props = props

    const { i18n } = this.props
    this.state = {
      language: i18n.language,
      showSelector: false
    }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }


  handleChangeLanguage(lng) {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  showSelector() {
    const val = this.state.showSelector ? false : true

    this.setState({
      showSelector: val
    })
  }

  handleClickOutside(evt) {
    this.setState({
      showSelector: false
    })
  }

  renderLanguageChoice({ code, label }) {
    return (
      <button
        key={code}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    );
  }

  render() {
    const { t } = this.props

    const selectedLanguage = findByCode(localStorage.i18nextLng)

    const langContent = languages.map((val, i) => {
      return (
        <div onClick={() => this.handleChangeLanguage(val.code)} key={i} css={{
          color: val.code === selectedLanguage.code ? 'blue' : 'auto',
          borderBottom: i + 1 < languages.length ? '1px solid #f2f2f2' : 0,
          padding: '5px 12px',
          ':hover': {
            background: 'rgba(0, 0, 0, 0.1)'
          }
        }}>
          <div css={{
            display: 'inline-block',
            verticalAlign: 'middle',
            marginLeft: '10px'
          }}>
            {t(val.label)}
          </div>
        </div>
      );
    });

    return (
      <div css={{
        marginTop: '3px',
        display: 'inline-block',
        verticalAlign: 'middle'
      }}>
        <div onClick={() => this.showSelector()} css={{
          cursor: 'pointer',
          padding: '4px 5px 4px 5px',
          ':hover': {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '4px'
          }
        }}>
          <FaAngleDown css={{
            color: this.props.isTop ? '#000' : '#cccccc',
            display: 'inline-block',
            verticalAlign: 'middle',
            marginRight: '5px'
          }} />
          {t(selectedLanguage.label)}
          <div css={{
            display: this.state.showSelector ? 'auto' : 'none',
            position: 'absolute',
            marginTop: '12px',
            background: '#FFF',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.3)',
            borderRadius: '4px'
          }}>
            {langContent}
          </div>
        </div>
      </div>
    )
  }
}

export default withNamespaces('LanguageSwitcher')(onClickOutside(LanguageSelector))
