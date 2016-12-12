// Color variables
const veryLightGray = 'rgba(219, 230, 236, 1)';
const lightGray     = 'rgba(153, 169, 179, 1)';
const gray          = 'rgba(103, 116, 124, 1)';
const darkGray      = 'rgba(59, 68, 79, 1)';
const veryDarkGray  = 'rgba(44, 54, 68, 0.7)';
const mostDarkGray  = 'rgba(33, 41, 51, 0.7)';
const cyan          = 'rgba(16, 222, 189, 1)';
const blue          = 'rgba(40, 138, 214, 1)';
const purple        = 'rgba(255, 112, 142, 1)';
const green         = 'rgba(22, 201, 141, 1)';
const red           = 'rgba(250, 94, 91, 1)';
const orange        = 'rgba(255, 200, 62, 1)';
const lightOrange   = 'rgba(254, 239, 109, 1)';
const softblue      = 'rgba(139, 191, 230, 1)';
const softgreen     = 'rgba(199, 230, 170, 1)';
const white         = 'rgba(255, 255, 255, 1)';


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


exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      span {
        background-color: transparent !important;
      }
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
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: ${backgroundColor} !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
      .tabs_borderShim {
        opacity: 0;
      }
      .term_fit:not(.term_term) {
        opacity: 0.7;
      }
      .term_fit.term_active {
        opacity: 1;
        transition: opacity 0.1s ease;
        will-change: opacity;
      }
      .splitpane_divider {
        background-color: ${mostDarkGray} !important;
        opacity: 0.7;
      }
    `
  });
}
