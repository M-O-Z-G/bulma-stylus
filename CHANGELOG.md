# Changelog

## 0.8.1.1 - 2020-02-23

### Added

- `$button-solid` boolean variable. Default: `false` If true, all default buttons will have look like if they have class `is-primary`.
- Hardcoded lot of Bulma colors, used for auto-generated classes like `is-primary` or `is-success`, now in the variable `$default-colors`. You can set it to `null`/`false` to disable them just to reduce size of resulted CSS code when not needed, or when you need only yours custom colors.
- `$button-solid-background-color` color variable. Default: `$primary`.
- `colorContrastFormula` string variable. Default: `'bulma'`. If `'yiq'` or `'YIQ'`, uses [YIQ colorspace](https://en.wikipedia.org/wiki/YIQ) to get contrast ratio.
- **This** file.

### Fixed

- `mergeColorMaps()` now works. Literal translation of SASS code just didn't work with Stylus.
  Example of usage for setting custom colors:
	
  ```stylus
  $custom-colors:= {
      "lime": (lime),
      "tomato": (tomato white),
      "orange": ($orange $orange-invert $orange-light),
      "lavender": ($lavender $lavender-invert $lavender-light $lavender-dark)
  }
  ```

### Changed

- `colorLuminance` now accepts second optional value `$formula`. Default: `$colorContrastFormula`. See above.
- Indentation changed to tabs.
- `bulma.styl` now imports each `styl` file separately.
- `findColorInvert` now accepts second optional Boolean value `$tint`. If true, inverted color is 80% brighter / darker than original instead of white / "black". Good, if you need some an artistic effect of the surrounding light or something.