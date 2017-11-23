import Link from "gatsby-link"
import { css } from 'glamor'
import { rhythm, scale, options } from "../../utils/typography"
import presets from "../../utils/presets"
import FuturaParagraph from "../futura-paragraph"
import { vP, vPHd, vPVHd, vPVVHd } from "../../components/gutters"
import CloudWithLogo from "../../components/cloud-with-logo"
import AwsLogo from "../../assets/clouds/aws-logo.png"
import MicrosoftAzureLogo from "../../assets/clouds/microsoft-azure.png"
import GoogleCloudLogo from "../../assets/clouds/google-cloud-logo.png"
import IbmOpenwhiskLogo from "../../assets/clouds/ibm-openwhisk.png"
import PlayIcon from "../../assets/token-sale/play-video.png"
import SubscribeFrom from "../../components/subscribe-form"
import Countdown from "./countdown"
import React from "react"

const videoClass = css({
  position: 'absolute',
  top: 0,
  left: 0,
  width: rhythm(64),
  height: 'auto',
  zIndex: -1
})

class MastheadContent extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
  }

  componentDidMount() {
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 400;

    var stars = [], // Array that contains the stars
      FPS = 60, // Frames per second
      // x = 100, // Number of stars
      x = Math.round(canvas.width / 15),
      mouse = {
        x: 0,
        y: 0
      };  // mouse location

    // Push stars to array

    for (var i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    // Draw the scene

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = 'black';
        ctx.stroke();
      }

      ctx.beginPath();
      for (var i = 0, x = stars.length; i < x; i++) {
        var starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (var j = 0, x = stars.length; j < x; j++) {
          var starII = stars[j];
          if (distance(starI, starII) < 150) {
            //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }

    function distance(point1, point2) {
      var xs = 0;
      var ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    }

    // Update star locations

    function update() {
      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Update and draw

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();
  }

  render() {
    return (
      <div
        className="masthead-content"
        css={{
          width: '100%',
          // background: 'rgba(61, 94, 236, 0.1)',
          // background: '#3D5EEC',
          position: 'relative',
          overflow: 'hidden',
          paddingBottom: rhythm(1),
          [presets.Mobile]: {
            paddingBottom: rhythm(2),
            height: rhythm(38),
            paddingLeft: vP
          },
          [presets.Tablet]: {
            height: rhythm(46),
            paddingTop: rhythm(2)
          },
          [presets.Desktop]: {
            height: rhythm(33),
            paddingTop: rhythm(1),
          }
        }}
      >
        <canvas id="canvas" css={{
          position: 'absolute',
          top: 0,
          left: 0,
          background: '#3D5EEC',
          zIndex: -1
        }}>
        </canvas>
        {/* <Video autoPlay loop muted
      controls={[]}
      poster={BlockchainPic}
      className={`${videoClass}`}
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        [presets.Mobile]: {
          width: rhythm(68)
        },
        [presets.Mobile]: {
          width: rhythm(82)
        },
        [presets.Destkop]: {
          width: rhythm(64)
        },
        height: 'auto',
        zIndex: -1
      }}>
      <source src={BlockchainVideo} type="video/mp4" />
    </Video> */}
        <div css={{
          display: 'inline-block',
          verticalAlign: 'top',
          [presets.Desktop]: {
            width: '50%'
          }
        }}>
          <h1
            css={{
              ...scale(0.7),
              color: '#FFF',
              lineHeight: 1.2,
              marginTop: '25px',
              marginBottom: `1.2em`,
              [presets.Mobile]: {
                width: '90%'
              },
              "@media (min-width: 650px)": {
                fontSize: scale(1).fontSize
              },
              [presets.Tablet]: {
                fontSize: scale(1.1).fontSize
              },
              [presets.Hd]: {
                fontSize: scale(1.4).fontSize
              },
              [presets.VHd]: {
                fontSize: scale(1.5).fontSize
              },
              [presets.VVHd]: {
                fontSize: scale(1.6).fontSize
              },
              [presets.Desktop]: {
                fontSize: scale(1.4).fontSize
              }
            }}
          >
            Create blockchain apps like a pro
      </h1>
          <FuturaParagraph
            overrideCSS={{
              color: presets.brandLighter,
              fontSize: scale(0.5).fontSize,
              [presets.Mobile]: {
                width: '90%'
              }
            }}
          >
            Squeezer is a tool that helps software developers to builds apps easily without tackling the entire blockchain infrastructure !
        <br />
            <br />
          </FuturaParagraph>

          <Countdown />
        </div>
        <div
          css={{
            textAlign: 'center',
            verticalAlign: 'top',
            // opacity: 0.1,
            [presets.Mobile]: {
              width: '90%',
              height: rhythm(14.5),
              marginTop: rhythm(2)
            },
            [presets.Phablet]: {
              height: rhythm(12.5)
            },
            [presets.Tablet]: {
              width: '100%',
              margin: '15px auto',
              paddingRight: `${vP}`,
            },
            [presets.Desktop]: {
              height: rhythm(12),
              display: 'inline-block',
              margin: `${rhythm(4)} ${rhythm(0)} ${rhythm(0)} ${rhythm(2)}`,
              width: rhythm(18.5)
            }
          }}
        >
          <div css={{
            cursor: 'pointer',
            zIndex: 100,
            [presets.Tablet]: {
              paddingTop: rhythm(1)
            }
          }} onClick={() => window.open("https://www.youtube.com/watch?v=_pom9R7KqYQ", "_blank")}>
            <img css={{
              [presets.Desktop]: {
                maxWidth: '550px',
              },
              height: 'auto'
            }}
              src={PlayIcon} alt="play video" />
          </div>
        </div>
      </div>
    )
  }
}


export default MastheadContent
