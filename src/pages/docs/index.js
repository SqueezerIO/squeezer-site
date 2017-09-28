import React from "react"
import Link from "gatsby-link"

import SidebarBody from "../../components/sidebar-body"
import docsSidebar from "../../../content/docs/doc-links.yaml"
import Container from "../../components/container"
import presets from "../../utils/presets"
import MarkdownIt from "markdown-it"
import WelcomeMd from 'raw-loader!../../../content/docs/README.md';
import EditOnGithub from "../../components/edit-on-github"

const md = new MarkdownIt({
  html: true,
  breaks: false
});

class IndexRoute extends React.Component {
  render() {
    const welcomeData = md.render(WelcomeMd)

    return (
      <Container>
        <EditOnGithub path="/docs/README.md" />
        <div dangerouslySetInnerHTML={{ __html: welcomeData }} />
      </Container>
    )
  }
}

export default IndexRoute
