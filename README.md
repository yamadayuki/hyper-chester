# Chester for Hyper

[Hyper](https://hyper.is) theme based on [the Chester syntax theme](https://github.com/csutter/chester-atom-syntax).

### Install

1. Open Hyper's preferences with `Cmd+,` (or manually at ~/.hyper.js) with your editor.
2. Update your list of plugins to include `hyper-chester`, like so:

  ```js
  plugins: [
    'hyper-chester',
  ],
  ```
3. Fully reload Hyper (`Cmd+Shift+R`), and tada!

#### Vibrancy

Zeit released Hyper.app ver 1.0.0 🎉
This version includes **Vibrancy** support on macOS. So this `hyper-chester` support that vibrancy.
If you hope to use this, you can add vibrancy and opacity in your config.
You can choose the vibrancy from a [list of available vibrancy types](0https://github.com/electron/electron/blob/master/docs/api/browser-window.md#winsetvibrancytype-macos).

```js
module.exports = {
  config: {
    ...
    hyperChester: {
      vibrancy: 'ultra-dark',
      opacity: 0.3,
    },
  },
  ...
};
```

### License

MIT
