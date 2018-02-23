import React from "react"
import Container from "../../components/container"
import BlogPostPreviewItem from "../../components/blog-post-preview-item"
import Newsletter from "../../components/newsletter"
import Footer from "../../components/footer"
import presets from "../../utils/presets"
import { rhythm, scale, options } from "../../utils/typography"
import footerLogo from "../../icon-positive.png"

class BlogPostsIndex extends React.Component {
  render() {
    const { allMarkdownRemark } = this.props.data

    return (
      <div
        css={{
          [presets.Tablet]: {
            background: presets.sidebar,
            paddingBottom: rhythm(options.blockMarginBottom * 4),
          },
        }}
      >
        <Container
          css={{
            [presets.Tablet]: {
              background: `url(${footerLogo})`,
              paddingBottom: `${rhythm(
                options.blockMarginBottom * 4
              )} !important`,
              backgroundSize: `30px 30px`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `bottom center`,
            },
          }}
        >
          <h1
            css={{
              marginTop: 0,
              [presets.Tablet]: {
                marginTop: 0,
                position: `absolute`,
                width: 1,
                height: 1,
                padding: 0,
                overflow: `hidden`,
                clip: `rect(0,0,0,0)`,
                whiteSpace: `nowrap`,
                clipPath: `inset(50%)`,
              },
            }}
          >
            Blog
          </h1>
          {allMarkdownRemark.edges.map(({ node }) => (
            <BlogPostPreviewItem
              post={node}
              key={node.fields.slug}
              css={{
                marginBottom: rhythm(options.blockMarginBottom),
                [presets.Tablet]: {
                  background: `#fff`,
                  borderRadius: presets.radiusLg,
                  boxShadow: `0 3px 10px rgba(25, 17, 34, 0.05)`,
                  padding: rhythm(options.blockMarginBottom * 2),
                  paddingLeft: rhythm(options.blockMarginBottom * 3),
                  paddingRight: rhythm(options.blockMarginBottom * 3),
                  marginLeft: rhythm(-options.blockMarginBottom * 2),
                  marginRight: rhythm(-options.blockMarginBottom * 2),
                  transition: `transform ${presets.animation
                    .speedDefault} ${presets.animation
                    .curveDefault},  box-shadow ${presets.animation
                    .speedDefault} ${presets.animation
                    .curveDefault}, padding ${presets.animation
                    .speedDefault} ${presets.animation.curveDefault}`,
                  "&:hover": {
                    transform: `translateY(-4px)`,
                    boxShadow: `0 10px 42px rgba(25, 17, 34, 0.1)`,
                  },
                },
                [presets.Desktop]: {},
                [presets.Hd]: {},
              }}
            />
          ))}
        </Container>
        <Newsletter/>
        <Footer/>
      </div>
    )
  }
}

export default BlogPostsIndex

export const pageQuery = graphql`
  query BlogPostsIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/posts/" }
      }
    ) {
      edges {
        node {
          ...BlogPostPreview_item
        }
      }
    }
  }
`
