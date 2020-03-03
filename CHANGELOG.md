# Changelog

## UNRELEASED

### Added

- All selector names now supports custom prefix with variable `$prefix` to prevent conflicts with anything else. `''` by default.
- [**BEM 101**](http://getbem.com/introduction/) naming methodology for all *components*, *elements* and *helpers*. Could be set with variable `$naming-methodology`.
- `$naming-methodology` string variable. `'SMACSS'` by default. Any value other than `'BEM'` returns Bulma's default behavior.
- Each default selector name for *component*, *element* of *helper* can be redefined manually with variable, _see `initial-variables.styl:85` for examples_.
- Shaded and pseudo-3D styles for buttons.
- Extra animation rules.

### Changed

- *Components*, *helpers* and *elements* now abstracted and could be called as mixins. You could even disable auto-generated rules for them, but keep them available for use.
- `$default-color` now doesn't require numerical string names for nested hash arrays.

## 0.8.2 - 2020-03-03

### Added

- `$devices` indent variable is the list of all media query mixins like: `mobile`, `tablet-only`, `fullhd`, etc. By default: `mobile tablet tablet-only touch desktop desktop-only widescreen widescreen-only fullhd`. It can be shortened or expanded at your discretion. But a mixin for each name **must exist before the variable is declared**. Used for all repeatable media query rules such like _columns_.
- `lengthList()` function, because actual Stylus built-in `length` function works in a weird way with lists that contain one item. _This's **just a fix** for partial cases. Could be deprecated with a next Stylus release._

### Changed

- The maximum number of columns per row now optional and defined with variable `$columns-max`. 12 by default.
- Selector names for ratio sized columns now stored within hash array and supports any number of aliases for each of them. For instance: `.is-three-quarters` now is `.is-3of4` also.
- Repeatable media rules for `helpers` and `columns` now generated within loop mixins. _Use conditional statements, if you need some exceptions. `@extend` directive works as usual._

### Fixed

- `$scheme-invert-bis` returned to original default value `$black-bis`.
- `colorLuminance` syntax error. All generated colors returned to initial values.
- Hovered button color lightness set to original 2.5% instead 3.5% from last commits. It was a mistake.

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