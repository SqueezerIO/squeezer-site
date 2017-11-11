import React from "react"
import { css } from "glamor"

import { rhythm, scale, options } from "../utils/typography"
import colors from "../utils/colors"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "../components/gutters"
import FuturaParagraph from "../components/futura-paragraph"
import ArchiveIcon from "react-icons/lib/fa/archive"

const stripeColor = `239, 245, 255, 1`
const stripeSize = 15
const stripeAnimation = css.keyframes({
  "0%": {
    backgroundPosition: `${rhythm(stripeSize)} ${rhythm(stripeSize * 2)}`,
  },
  "100%": { backgroundPosition: `0 0` },
})
const stripeBg = {
  backgroundColor: presets.sidebar,
  backgroundSize: `${rhythm(stripeSize)} ${rhythm(stripeSize)}`,
  backgroundImage: `linear-gradient(45deg, rgba(${stripeColor}) 25%, transparent 25%, transparent 50%, rgba(${stripeColor}) 50%, rgba(${stripeColor}) 75%, transparent 75%, transparent)`,
  animation: `${stripeAnimation} 14s linear infinite`,
}
const lineAnimation = css.keyframes({
  to: {
    strokeDashoffset: 1000,
  },
})

const bold = {
  fontWeight: 'bold'
};


const Segment = ({ className, children }) => (
  <div
    className={`Segment ${className}`}
    css={{
      maxWidth: rhythm(30),
      margin: `0 auto`,
      textAlign: `center`,
    }}
  >
    {children}
  </div>
)

const SegmentTitle = ({ children }) => (
  <h2
    className="Segment-title"
    css={{
      display: `inline`,
      background: presets.accent,
      color: `#fff`,
      borderRadius: presets.radius,
      margin: `0 auto`,
      position: `relative`,
      bottom: `-.5rem`,
      padding: `.35rem .6rem`,
      fontWeight: `normal`,
      letterSpacing: `.5px`,
      ...scale(-2 / 5),
      lineHeight: 1,
      textTransform: `uppercase`,
    }}
  >
    {children}
  </h2>
)

const VerticalLine = () => (
  <svg
    width="20"
    height="30"
    viewBox="0 0 20 30"
    css={{ margin: `0 auto`, display: `block` }}
  >
    <line
      className="path"
      x1="10"
      x2="10"
      y1="110"
      y2="-10"
      stroke={presets.brandLight}
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="0.5, 10"
      css={{ animation: `${lineAnimation} 40s linear infinite` }}
    />
  </svg>
)

const box = {
  border: `1px solid ${colors.b[0]}`,
  borderRadius: presets.radiusLg,
  padding: `${rhythm(1)} ${rhythm(1)} 0`,
  background: presets.sidebar,
}

const borderAndBoxShadow = {
  border: `1px solid ${presets.veryLightBlue}`,
  background: `#fff`,
  width: `100%`,
  boxShadow: `0 5px 15px rgba(0,0,0,0.035)`,
  borderRadius: presets.radius,
}

const SourceItems = ({ children }) => (
  <div
    css={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `center`,
      ...box,
    }}
  >
    {children}
  </div>
)

const boxPadding = { padding: `${rhythm(1 / 3)} ${rhythm(2 / 4)}` }

const SourceItem = ({ children }) => (
  <div
    css={{
      boxSizing: `border-box`,
      padding: `0 ${rhythm(2 / 3)} ${rhythm(1)}`,
      display: `flex`,
      [presets.Mobile]: {
        flex: `1 1 50%`,
      },
      [presets.Phablet]: {
        flex: `1 1 33%`,
      },
    }}
  >
    <div
      css={{
        ...borderAndBoxShadow,
        ...boxPadding,
        lineHeight: 1.2,
        textAlign: `left`,
      }}
    >
      {children}
    </div>
  </div>
)

const ItemTitle = ({ children }) => (
  <h3
    css={{
      color: presets.brand,
      margin: 0,
      fontStyle: `normal`,
      ...scale(0),
    }}
  >
    {children}
  </h3>
)

const ItemDescription = ({ children }) => (
  <small
    css={{
      lineHeight: 1.2,
      display: `block`,
      color: presets.brandLight,
      [presets.Hd]: {
        fontSize: scale(-1 / 5).fontSize,
      },
    }}
  >
    {children}
  </small>
)

const Build = ({ children }) => (
  <div
    css={{
      ...borderAndBoxShadow,
      padding: rhythm(1),
      margin: `0 auto`,
      width: rhythm(5.5),
      height: rhythm(5.5),
      [presets.Desktop]: {
        width: rhythm(7),
        height: rhythm(6),
      },
    }}
  >
    <ItemDescription>Install Packages</ItemDescription>
    <ItemDescription>...</ItemDescription>
    <br/>
    <ItemDescription>Compile Functions</ItemDescription>
    <ItemDescription>...</ItemDescription>
  </div>
)

const Diagram = ({ containerCSS }) => (
  <section
    className="Diagram"
    css={{
      borderRadius: presets.radiusLg,
      fontFamily: options.headerFontFamily.join(`,`),
      padding: vP,
      marginTop: rhythm(1),
      textAlign: `center`,
      ...containerCSS,
      [presets.Tablet]: {
        marginTop: 0,
      },
    }}
  >
    <h1 css={{ marginBottom: rhythm(1.5), ...scale(1.2) }}>How Squeezer works</h1>
    <div css={{ maxWidth: rhythm(20), margin: `0 auto ${rhythm(2)}` }}>
      <FuturaParagraph>
        Squeezer lets you create event-driven apps , with various triggers.
      </FuturaParagraph>
    </div>

    <Segment className="Source">
      <SegmentTitle>Functions</SegmentTitle>
      <SourceItems>
        <SourceItem>
          <ItemTitle>Function A</ItemTitle>
          <ItemDescription>event</ItemDescription>
          <ItemDescription>&nbsp;- type: http</ItemDescription>
          <ItemDescription>&nbsp;&nbsp;&nbsp;path: /rest/v1/hello</ItemDescription>
        </SourceItem>
        <SourceItem>
          <ItemTitle>Function B</ItemTitle>
          <ItemDescription>event</ItemDescription>
          <ItemDescription>&nbsp;- type: cron</ItemDescription>
          <ItemDescription>&nbsp;&nbsp;&nbsp;value: 0 10 * * * *</ItemDescription>
        </SourceItem>
        <SourceItem>
          <ItemTitle>Function C</ItemTitle>
          <ItemDescription>event</ItemDescription>
          <ItemDescription>&nbsp;- type: s3</ItemDescription>
          <ItemDescription>&nbsp;&nbsp;&nbsp;value: s3:ObjectCreated:*</ItemDescription>
        </SourceItem>
      </SourceItems>
    </Segment>

    <Segment className="Build">
      <VerticalLine />
      <SegmentTitle>Build</SegmentTitle>
      <div
        css={{
          ...box,
          ...stripeBg,
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <VerticalLine />
        <Build />
        <VerticalLine />
        <div
          css={{
            ...borderAndBoxShadow,
            ...boxPadding,
            paddingTop: rhythm(1 / 2),
            paddingBottom: rhythm(1 / 2),
            width: `auto`,
            display: `inline-block`,
          }}
        >
          <ItemDescription>
            <ArchiveIcon css={{
              display: 'inline-block',
              verticalAlign : 'middle',
              marginRight : rhythm(0.3)
            }}/>
            <span css={{
              display: 'inline-block',
              verticalAlign : 'middle'
            }}>Packaging</span>
          </ItemDescription>
        </div>
        <VerticalLine />
      </div>
    </Segment>

    <Segment className="Deploy">
      <VerticalLine />
      <SegmentTitle>Deploy</SegmentTitle>
      <div
        css={{
          ...box,
          paddingBottom: rhythm(1),
        }}
      >
        <ItemTitle>Cloud Provider</ItemTitle>
        <ItemDescription>
          Amazon Web Services, Microsoft Azure, Google Cloud , IBM Openwhisk ...
        </ItemDescription>
      </div>
    </Segment>
  </section>
)

export default Diagram
