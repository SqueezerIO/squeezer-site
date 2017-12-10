import React from "react"
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import Footer from "../../components/footer"

class CreateWallet extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
  }

  render() {
    return (
      <div>
        <div css={{
          maxWidth: rhythm(30),
          margin: '0 auto',
          paddingTop: rhythm(5),
          paddingBottom: rhythm(5)
        }}>
          <h1>Thanks for your contribution !</h1>
          <p>
            We will send you further details about tokens status .
          </p>
          <p>
            Sincerely,
          </p>
          <p>
            The Squeezer Team
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default CreateWallet