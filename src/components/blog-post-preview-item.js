import React from "react"
import Link from "gatsby-link"

import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"

class BlogPostPreviewItem extends React.Component {
  render() {
    const post = this.props.post
    const avatar =
      post.frontmatter.author.avatar.childImageSharp.responsiveResolution

    return (
      <article className={this.props.className} css={{ position: `relative` }}>
        <Link to={post.fields.slug}>
          <h2>{post.frontmatter.title}</h2>
          <p css={{ fontWeight: `normal` }}>
            {post.frontmatter.excerpt ? post.frontmatter.excerpt : post.excerpt}
          </p>
        </Link>
        <div
          css={{
            display: `flex`,
            alignItems: `center`,
            marginBottom: rhythm(2),
          }}
        >
          <img
            alt={`Avatar for ${post.frontmatter.author.id}`}
            src={avatar.src}
            srcSet={avatar.srcSet}
            height={avatar.height}
            width={avatar.width}
            css={{
              borderRadius: `100%`,
              display: `inline-block`,
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              verticalAlign: `top`,
            }}
          />
          <div
            css={{
              display: `inline-block`,
              fontFamily: typography.options.headerFontFamily.join(`,`),
              color: presets.calm,
              ...scale(-2 / 5),
              [presets.Mobile]: {
                ...scale(-1 / 5),
              },
              [presets.Desktop]: {
                ...scale(0),
              },
            }}
          >
            <div>
              <Link
                to={post.frontmatter.author.fields.slug}
                css={{
                  boxShadow: `none !important`,
                  borderBottom: `0 !important`,
                  position: `relative`,
                  zIndex: 1,
                  "&&": {
                    fontWeight: `normal`,
                    ":hover": {
                      color: presets.brand,
                      background: `transparent`,
                    },
                  },
                }}
              >
                {post.frontmatter.author.id}
              </Link>
              {` `}
              on
              {` `}
              {post.frontmatter.date}
            </div>
          </div>
        </div>
        <Link
          to={post.fields.slug}
          css={{
            position: `absolute`,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: `hidden`,
            textIndent: `-100%`,
            whiteSpace: `nowrap`,
            zIndex: 0,
            "&&": {
              border: 0,
              boxShadow: `none`,
              "&:hover": {
                background: `none`,
              },
            },
          }}
        >
          Read more
        </Link>
      </article>
    )
  }
}

export default BlogPostPreviewItem

export const blogPostPreviewFragment = graphql`
  fragment BlogPostPreview_item on MarkdownRemark {
    excerpt
    fields {
      slug
    }
    frontmatter {
      excerpt
      title
      date(formatString: "MMMM Do YYYY")
      author {
        id
        fields {
          slug
        }
        avatar {
          childImageSharp {
            responsiveResolution(width: 30, height: 30) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
