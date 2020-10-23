import Typography from "typography"
import {
  MOBILE_MEDIA_QUERY, TABLET_MEDIA_QUERY,
} from "typography-breakpoint-constants"
import fairyGateTheme from "typography-theme-fairy-gates";

import DIN from '../../static/d-din/D-DIN.ttf';

const options = {
  baseFontSize: `18px`,
  baseLineHeight: 1.45,
  blockMarginBottom: 0.75,
  scaleRatio: 2.15,
  headerFontFamily: ['Nunito', DIN, "sans-serif",],
  bodyFontFamily: ["Georgia", 'Nunito', DIN, "serif"],
  overrideStyles: ({rhythm, scale}, options) => {
    return {
      "h1,h2,h3,h4": {
        lineHeight: 1.2,
      }, [TABLET_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 17px.
        html: {
          fontSize: `${(17 / 16) * 100}%`,
        },
      }, [MOBILE_MEDIA_QUERY]: {
        // Make baseFontSize on mobile 16px.
        html: {
          fontSize: `${(16 / 16) * 100}%`,
        },
      },
    }
  },
  googleFonts: [
    {
      name: 'Nunito', styles: ['300', '400', '500', '600', '700'],
    }
  ]
};

const typography = new Typography({...fairyGateTheme, ...options});

export const {rhythm, scale} = typography;
export default typography
