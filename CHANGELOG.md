# Changelog

<details>
	<summary><b>U̲N̲R̲E̲L̲E̲A̲S̲E̲D̲:</b></summary>

### Added

- *No-conflict* aliases for *mixins* and *functions*.
- New predefined *font family* presets.
- New default color variables, and optional redefined default CSS color names (**Stylus-only**).
- [**BEM 101**](http://getbem.com/introduction/) naming methodology for all *components*, *elements,* and *helpers*. It could be set with the variable `$naming-methodology`.
- Modifiers can now have dot-free selector names.
- Printer-oriented styles.
- `$naming-methodology` string variable. `'SMACSS'` by default. Any value other than `'BEM'` returns Bulma's default behavior.
- Shaded and pseudo-3D styles for buttons.
- Extra animation rules.
- `mediaQuery()` mixin with options `$deviceName` and `$orientation`.
- `bulma-stylus-plus.js` now can be imported to add default script for Bulma's *navbar* (and other interactive features in future)

### Changed

- `$family-…` variables now can be overrided with values from `$fonts`, based on node names.

------

</details>

## 0.8.5-beta - 2020-XX-XX

### Added

- `mediaQuery` block mixin.

### Changed

- `from` and `until` block mixins now accept `$orientation` and `$par` variables. For orientation of the device, and pixel ratios accordingly.

------

## 0.8.4-beta - 2020-04-12

This is a minor release. See [0.8.3-beta release notes](https://github.com/M-O-Z-G/bulma-stylus-plus/releases/tag/v0.8.3-beta) for additional information.

### Bug fixes

* Fix [#2885](https://github.com/jgthms/bulma/issues/2885) -> Revert `$input-color: $text-strong`


------

## 0.8.3-beta - 2020-03-30

### Added

- `fontFace()` mixin to generate `@font-face` rule for font by their `name`, `path`, `weight` and `style`, `format`, `version`.
- `$prefix` string variable. **Used always for _CSS variables_**, optional for selectors with boolean variable `$prefixed-selectors`.
- `banner` component with predefined banner sizes.
- 11 new image ratios could be activated with `$silent:= { plus: { ratios: false }}`. *Slows down the generation process*.
- Units conversion with function `convertUnit()`. Supports next units:
	- **Scale:** **`em`**, **`rem`**, `px`, `in`, `cm`, `mm`, `pt`, `pc`, `q`
	- **Angle:** `deg`, `grad`, `rad`, `turn`
	- **Time:** `s`, `ms`
	- **Audio:** `hz`, `khz`
	- **Resolution:** `dpi`, `dpcm`, `dppx`
	*`$body-size` and `$body-font-size` are key variables for conversion between relative units, such as `em`/`rem`. The function detects the ability to convert one unit to another, and break execution with an error if there will be nonconvertible units.*
- `bulmaRgba()` function.
- [#2740](https://github.com/jgthms/bulma/pull/2740) Fixes [#2739](https://github.com/jgthms/bulma/issues/2739) -> Add variables size for layout hero
- Fix [#2741](https://github.com/jgthms/bulma/issues/2741) -> Create `bulmaRgba()` function to support `inherit` value.
- [#2709](https://github.com/jgthms/bulma/pull/2709) Add light colors to the `notification` element
- CSS variables.
- `updateGlobalOptions()` function checks for changes of `$silent` and `$prefix` variables then rewrite cache and use it for all further calls. Use it each time when you make changes in global options in the middle of your code. All built-in mixins and functions use it whenever called and it makes sense in their processing.

### Changed

- *Components*, *helpers*, and *elements* now abstracted and could be called mixins with(out) [block](https://stylus-lang.com/docs/mixins.html#block-mixins). You could even disable auto-generated rules for them with `$silent` hash array, but keep them available for reuse. You don't need to comment separate styl files manually anymore, to add/remove features, but you still can.
- *Components/elements/form/layout/helpers* now has nested structure with [Root Reference](https://stylus-lang.com/docs/selectors.html#root-reference). *(Some exceptions are there for selectors which used in multiple components). Therefore, the main selector name affects children, and you always know the structure of further HTML code. If you want to break the parenting, use any of [available Stylus references](https://stylus-lang.com/docs/selectors.html)*.
- Each default selector name for *the component*, *element* or *helper* can be redefined manually with variable, *see initial-variables.styl:89 for examples*.
	**BEWARE! Some \*components\* and \*elements\* contain not CSS pseudo-class. Therefore, it will give an inadequate result, if you will use a dot-free class name for \*modifiers\*. I will try to find how to resolve it in a more-less elegant way. Just keep it in mind about all $XXX-modifier variables.**
- `$silent-mode` boolean variable. If `true`, any rules will not be generated in the resulted CSS file by default, regardless of their values in `$slient` array.
- Bulma Stylus Plus is an NPM module for now and could be called within Gulp, Grunt, or via CLI. See [README](https://github.com/M-O-Z-G/bulma-stylus-plus/blob/master/README.md) for more info about usage.
- Auto-generated rules for all default and custom colors now can be turned off/on for partial components/elements with `$silent.colorful.[NAME-OF-COMPONENT-ELEMENT]`.
- Portrait image ratios are now optional and auto-generated. You could disable it with `$silent:= { plus: { ratios-portrait: true }}`.
- Generated size rules for all *component* and *elements* (exclude `banner`, because this component is senseless without sizes) are now optional like *colors* with `$silent.sizes.[NAME-OF-COMPONENT]`.
- Generated color rules now can be redefined with variables for all *components* and *elements*, not only for `message` and `panel`.
- All selector names now supports custom prefix with variable `$prefix-bsp` to prevent conflicts with anything else. `$prefix` by default if `$prefixed-selectors` else `''`.
- `$columns-max` variable transferred to `initial-variables.styl`.
- `$message-colors` and `$panel-colors` transferred to `derived-variables.styl`.
- `$body-size` and `$body-font-size` variables has moved from `generic` to `initial-variables`. Because now they are essential variables for some functions.
- For uniformity and improved readability, colons between a property and a value are now required. The Stylus allows you to not use them, however, in the case, when the property name is generated from one or more variables, colons are necessary. Such a mismatch can be confusing for users.
- *Tiles* now respects `$column-max` variable.
- `column-ratios` variable name starts with `$` character. Please, rename, if you're using it separately. My mistake, perhaps, but initially I planned it like a utilitarian feature only, not reusable.
- `@charset` parameter is now optional and regards `$charset` variable. Silent if `""`.
- `mixins.styl` generates nothing by itself when imported.
- [autoprefixer](https://www.npmjs.com/package/autoprefixer) dependency replaced with [autoprefixer-stylus](https://www.npmjs.com/package/autoprefixer-stylus)
- `$unselectable`, `$arrow`, `$block`, `$delete`, `$loader`, `$overlay` moved to new `placeholders.styl`.

### Deprecated

- `$colorContrastFormula` is now alias. Use `$color-luminance-formula` instead.
- `bulma-stylus-darken` is now an alias of `bulmaDarken`.

### Fixed

- [stylelint](https://www.npmjs.com/package/stylelint) is optional dependency for now. Because it fixes source mapping and has no critical value. [Oskari Groenroos](https://github.com/groenroos) uses it to add empty lines between rules like in original Bulma.io. But source-map is more significant.

------

## 0.8.2 - 2020-03-03

### Added

- `$devices` indent variable is the list of all media query mixins like `mobile`, `tablet-only`, `fullhd`, etc. By default: `mobile tablet tablet-only touch desktop desktop-only widescreen widescreen-only fullhd`. It can be shortened or expanded at your discretion. But a mixin for each name **must exist before the variable is declared**. Used for all repeatable media query rules such as *columns*. **Some mixins ignore XXX-only media queries.**
- `lengthList()` function, because actual Stylus built-in `length` function works weirdly with lists that contain one item. *This's **just a fix** for partial cases. It could be deprecated with a next Stylus release.*

### Changed

- The maximum number of columns per row now optional and defined with variable `$columns-max`. 12 by default.
- Selector names for ratio sized columns now stored within the hash array and support any number of aliases for each of them. For instance: `.is-three-quarters` now is `.is-3of4` also.
- Repeatable media rules for `helpers` and `columns` now generated within loop mixins. *Use conditional statements, if you need some exceptions. `@extend` directive works as usual.*

### Fixed

- `$scheme-invert-bis` returned to original default value `$black-bis`.
- `colorLuminance()` syntax error. All generated colors returned to initial values.
- Hovered button color lightness set to original 2.5% instead of 3.5% from last commits. It was a mistake.

------

## 0.8.1.1 - 2020-02-23

### Added

- `$button-solid` boolean variable. Default: `false` if true, all default buttons will have look like if they have class `is-primary`.
- Hardcoded lot of Bulma colors, used for auto-generated classes like `is-primary` or `is-success`, now in the variable `$default-colors`. You can set it to `null`/`false` to disable them just to reduce the size of resulted CSS code when not needed, or when you need only your custom colors.
- `$button-solid-background-color` color variable. Default: `$primary`.
- `colorContrastFormula` string variable. Default: `'bulma'`. If `'yiq'` or `'YIQ'`, uses [YIQ colorspace](https://en.wikipedia.org/wiki/YIQ) to get contrast ratio.
- **This** file.

### Fixed

- `mergeColorMaps()` now works. The literal translation of the SASS code just didn't work with Stylus.
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
- `findColorInvert` now accepts second optional Boolean value `$tint`. If true, inverted color is 80% brighter / darker than original instead of white / "black". Good, if you need some artistic effect of the surrounding light or something.
