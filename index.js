// Color variables
const veryLightGray = '#dbe6ec';
const lightGray = '#99a9b3';
const gray = '#67747c';
const darkGray = '#3b444f';
const veryDarkGray = '#2c3643';
const cyan = '#0fdebd';
const blue = '#288ad6';
const purple = '#ff708e';
const green = '#16c98d';
const red = '#fa5e5b';
const orange = '#ffc83f';
const lightOrange = '#feef6d';
const softblue = '#8abee5';
const softgreen = '#c7e6aa';


// Definitions
const backgroundColor = veryDarkGray;
const foregroundColor = veryLightGray;
const cursorColor = foregroundColor;
const borderColor = backgroundColor;

const colors = [
  backgroundColor,
  red, // red
  green, // green
  orange, // yellow
  blue, // blue
  orange, // pink
  cyan, // cyan
  veryLightGray, // light gray
  lightGray, // medium gray
  red, // red
  green, // green
  orange, // yellow
  blue, // blue
  orange, // pink
  cyan, // cyan
  '#ffffff', // white
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
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  });
}
