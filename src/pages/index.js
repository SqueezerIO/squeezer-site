import React from "react"
// import Link from "gatsby-link"

import presets from "../utils/presets"
// import colors from "../utils/colors"
import { rhythm, scale, options } from "../utils/typography"
import { JSIcon, WebpackIcon, ReactJSIcon, GraphQLIcon } from "../assets/logos"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import Container from "../components/container"
import MastheadContent from "../components/masthead"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"
import Techs from "../components/techs"
import HeadlineFeatures from "../components/headline-features"
import Cards from "../components/cards"
import Card from "../components/card"
import CardHeadline from "../components/card-headline"
import Diagram from "../components/diagram"
import FuturaParagraph from "../components/futura-paragraph"
import CtaButton from "../components/cta-button"
import EventsIcon from "../assets/events.svg"
import NodevopsIcon from "../assets/nodevops.svg"
import InfiniteIcon from "../assets/infinite.svg"
import NuclearIcon from "../assets/nuclear.svg"
import MonolithicIcon from "../assets/monolithic.svg"
import CloudSunIcon from "../assets/cloud-sun.svg"

const CardIcon = ({icon}) => {
  return (
    <img css={{
      width: 48,
      display : 'block'
    }} src={icon}/>
  )
};

const IndexRoute = React.createClass({
  render() {
    // const blogPosts = this.props.data.allMarkdownRemark
    return (
      <div css={{ position: `relative`  }}>
        <div
          css={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
          }}
        >
          <MastheadContent />
          <HeadlineFeatures />
          <Techs/>
          <div
            css={{
              padding: rhythm(presets.gutters.default / 2),
              flex: `0 0 100%`,
              marginTop : rhythm(4),
              marginBottom : rhythm(2),
              [presets.Hd]: {
                padding: vP,
                paddingTop: 0,
              },
            }}
          >
            <Cards>
              <Card>
                <CardIcon icon={EventsIcon}/>
                <CardHeadline>Event driven ecosystem</CardHeadline>
                <FuturaParagraph>
                  Add as many events you want to trigger you microservice's functions.
                  <b> HTTP</b> requests , <b>cron</b> events  and much more.
                </FuturaParagraph>
              </Card>
              <Card>
                <CardIcon icon={NodevopsIcon}/>
                <CardHeadline>No devops requirements</CardHeadline>
                <FuturaParagraph>
                  Forget the  <b>server guy</b> that owns your infrastructure velocity .
                  Just stay focused on adding new features to your business logic.
                </FuturaParagraph>
              </Card>
              <Card>
                <CardIcon icon={InfiniteIcon}/>
                <CardHeadline>Infinite architectures</CardHeadline>
                <FuturaParagraph>
                  Split your project features on how many microservices you want, sky is the limit !
                </FuturaParagraph>
              </Card>
              <Card>
                <CardIcon icon={NuclearIcon}/>
                <CardHeadline>
                  <em css={{ color: presets.brand, fontStyle: `normal` }}>
                    CDN
                  </em>
                  &nbsp; + Functions = Nuclear
                </CardHeadline>
                <FuturaParagraph>
                  Combine the power of <b>Content Delivery Network</b> with <b>Functions</b> .
                  Deliver on any demand, allow your app to get visitors even from other galaxies :)
                </FuturaParagraph>
              </Card>
              <Card>
                <CardIcon icon={MonolithicIcon}/>
                <CardHeadline>
                  Monolithic as modular
                </CardHeadline>
                <FuturaParagraph>
                  Don't be scared by the early adoption of microservices.
                  Share components between functions , like doing on any other <b>traditional</b> project .
                </FuturaParagraph>
              </Card>
              <Card>
                <CardIcon icon={CloudSunIcon}/>
                <CardHeadline>Development climate</CardHeadline>
                <FuturaParagraph>
                  Simulates the cloud provider environment on your local machine ,
                  no need to deploy the code at every iteration.
                  Speed up the entire development cycle <b>10x</b>
                </FuturaParagraph>
              </Card>

              <Diagram
                containerCSS={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  flex: `1 1 100%`,
                  borderTop: `1px solid ${presets.veryLightBlue}`,
                }}
              />

              <div css={{ flex: `1 1 100%` }}>
                <Container hasSideBar={false}>
                  <div
                    css={{
                      textAlign: `center`,
                      padding: `${rhythm(1)} 0 ${rhythm(2)}`,
                    }}
                  >
                    <h1 css={{ marginTop: 0 }}>Interested !?</h1>
                    <FuturaParagraph>
                      It only takes a few moments to get up and running!
                    </FuturaParagraph>
                    <CtaButton to="/docs/" overrideCSS={{ marginTop: `1rem` }}>
                      Get Started
                    </CtaButton>
                  </div>
                </Container>
              </div>
            </Cards>
          </div>
        </div>
        <Newsletter/>
        <Footer/>
      </div>
    )
  },
})

export default IndexRoute

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
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
