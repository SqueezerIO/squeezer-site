import React from "react"
import Helmet from "react-helmet"

import { rhythm  } from "../utils/typography"
import Container from "../components/container"
import EditOnGithub from "../components/edit-on-github"
import createReactClass from "create-react-class"

const formatTitle = (title) => {
  const splittedTitle = title.split(' - ')
  let text = ''
  splittedTitle.forEach((val, index) => {
    const headerIndex = index + 1
    text += `<h${headerIndex} style="margin-top:0">${val}</h${headerIndex}>`
  })
  return (text)
}

const DocsTemplate = createReactClass({
  render() {
    const page = this.props.data.markdownRemark
    
    let gitHubLocation

    if (this.props.location) {
      gitHubLocation = `${this.props.location.pathname.replace(/\/$/, "")}.md`;
    }

    return (
      <Container className="content">
        <Helmet>
          <title>{page.frontmatter.title}</title>
          <meta name="description" content={page.excerpt} />
          <meta name="og:description" content={page.excerpt} />
          <meta name="twitter:description" content={page.excerpt} />
          <meta name="og:title" content={page.frontmatter.title} />
          <meta name="og:type" content="article" />
          <meta name="twitter.label1" content="Reading time" />
          <meta name="twitter:data1" content={`${page.timeToRead} min read`} />
        </Helmet>
        <div css={{
          textAlign: 'right'
        }}>
          <EditOnGithub path={gitHubLocation}/>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: formatTitle(page.frontmatter.title),
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: page.html,
          }}
        />
      </Container>
    )
  },
})

export default DocsTemplate

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      frontmatter {
        title
      }
    }
  }
`
