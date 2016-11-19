// Color variables
const veryLightGray = '#DBE6EC';
const lightGray     = '#99A9B3';
const gray          = '#67747C';
const darkGray      = '#3B444F';
const veryDarkGray  = '#2C3643';
const mostDarkGray  = '#212933';
const cyan          = '#0FDEBD';
const blue          = '#288AD6';
const purple        = '#FF708E';
const green         = '#16C98D';
const red           = '#FA5E5B';
const orange        = '#FFC83F';
const lightOrange   = '#FEEF6D';
const softblue      = '#8ABEE5';
const softgreen     = '#C7E6AA';
const white         = '#FFFFFF';


// Definitions
const backgroundColor = veryDarkGray;
const foregroundColor = veryLightGray;
const cursorColor     = foregroundColor;
const borderColor     = backgroundColor;

const colors = [
  backgroundColor,
  red,            // red
  green,          // green
  orange,         // yellow
  blue,           // blue
  orange,         // pink
  cyan,           // cyan
  veryLightGray,  // light gray
  lightGray,      // medium gray
  red,            // red
  green,          // green
  orange,         // yellow
  blue,           // blue
  orange,         // pink
  cyan,           // cyan
  white,          // white
  foregroundColor,
];


exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: ${mostDarkGray} !important;
        border-bottom-color: ${mostDarkGray} !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: ${backgroundColor} !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  });
}
