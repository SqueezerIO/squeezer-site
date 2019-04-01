import Typography from "typography"
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
import { css } from 'glamor';

import Khula from '../../static/khula1/khula-light.otf';
import DIN from '../../static/d-din1/D-DIN.otf';

css.global('@font-face', { fontFamily: 'Khula', src: Khula });
css.global('@font-face', { fontFamily: 'DIN Condensed', src: DIN });


const options = {
  baseFontSize: `18px`,
  baseLineHeight: 1.45,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  overrideStyles: ({ rhythm, scale }, options) => {
    return {
      "h1,h2,h3,h4": {
        lineHeight: 1.2,
      },
      [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      },
      [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${(16 / 16) * 100}%`,
        },
      },
    }
  },
}

const typography = new Typography(options)

export const { rhythm, scale } = typography
export default typography
