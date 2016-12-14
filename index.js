function createColorMap(opacity) {
  if (!opacity) opacity = 1;

  const colorMap = new Map([
    ['veryLightGray', `rgba(219, 230, 236, 1)`],
    ['lightGray',     `rgba(153, 169, 179, 1)`],
    ['gray',          `rgba(103, 116, 124, 1)`],
    ['darkGray',      `rgba(59, 68, 79, 1)`],
    ['veryDarkGray',  `rgba(44, 54, 68, ${opacity})`],
    ['mostDarkGray',  `rgba(33, 41, 51, ${opacity})`],
    ['cyan',          `rgba(16, 222, 189, 1)`],
    ['blue',          `rgba(40, 138, 214, 1)`],
    ['purple',        `rgba(255, 112, 142, 1)`],
    ['green',         `rgba(22, 201, 141, 1)`],
    ['red',           `rgba(250, 94, 91, 1)`],
    ['orange',        `rgba(255, 200, 62, 1)`],
    ['lightOrange',   `rgba(254, 239, 109, 1)`],
    ['softblue',      `rgba(139, 191, 230, 1)`],
    ['softgreen',     `rgba(199, 230, 170, 1)`],
    ['white',         `rgba(255, 255, 255, 1)`],
  ]);

  return colorMap;
}


let vibrancy = 'ultra-dark';

exports.decorateConfig = config => {
  if (config.hyperChester.vibrancy) {
    vibrancy = config.hyperChester.vibrancy;
  }

  const hyperChesterOpacity = config.hyperChester.opacity;
  const colorMap = createColorMap(hyperChesterOpacity);

  const veryLightGray = colorMap.get('veryLightGray');
  const lightGray     = colorMap.get('lightGray');
  const gray          = colorMap.get('gray');
  const darkGray      = colorMap.get('darkGray');
  const veryDarkGray  = colorMap.get('veryDarkGray');
  const mostDarkGray  = colorMap.get('mostDarkGray');
  const cyan          = colorMap.get('cyan');
  const blue          = colorMap.get('blue');
  const purple        = colorMap.get('purple');
  const green         = colorMap.get('green');
  const red           = colorMap.get('red');
  const orange        = colorMap.get('orange');
  const lightOrange   = colorMap.get('lightOrange');
  const softblue      = colorMap.get('softblue');
  const softgreen     = colorMap.get('softgreen');
  const white         = colorMap.get('white');

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

exports.onWindow = browserWindow => browserWindow.setVibrancy(vibrancy);
