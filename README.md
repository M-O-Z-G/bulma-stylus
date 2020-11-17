[Bulma Stylus Plus](https://github.com/M-O-Z-G/bulma-stylus-plus)
---
[![Bulma core](https://img.shields.io/badge/based%20on%20Bulma-v0.8.2-00D1B2?logo=bulma)](https://github.com/jgthms/bulma/tree/0.8.2) [![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/m-o-z-g/bulma-stylus-plus?logo=github)](https://github.com/M-O-Z-G/bulma-stylus-plus) [![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/m-o-z-g/bulma-stylus-plus/master?logo=github&label=version)](https://github.com/M-O-Z-G/bulma-stylus-plus) [![npm](https://img.shields.io/npm/v/bulma-stylus-plus.svg)](https://www.npmjs.com/package/bulma-stylus-plus) [![npm downloads](https://img.shields.io/npm/dm/bulma-stylus-plus.svg?logo=npm)](https://www.npmjs.com/package/bulma-stylus-plus) [![AppVeyor](https://img.shields.io/appveyor/build/m-o-z-g/bulma-stylus-plus?logo=appveyor&logoColor=white)](https://ci.appveyor.com/project/M-O-Z-G/bulma-stylus-plus) [![pipeline status](https://img.shields.io/gitlab/pipeline/m-o-z-g/bulma-stylus-plus?logo=gitlab&label=pipeline)](https://gitlab.com/M-O-Z-G/bulma-stylus-plus/pipelines) [![Travis (.org) branch](https://img.shields.io/travis/m-o-z-g/bulma-stylus-plus/master?logo=travis-ci&logoColor=white)](https://travis-ci.org/github/M-O-Z-G/bulma-stylus-plus) [![DevDependencies](https://img.shields.io/david/dev/m-o-z-g/bulma-stylus-plus?logo=github)](https://david-dm.org/m-o-z-g/bulma-stylus-plus?type=dev) [![OptDependencies](https://img.shields.io/david/optional/m-o-z-g/bulma-stylus-plus?logo=github)](https://david-dm.org/m-o-z-g/bulma-stylus-plus?type=optional) [![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/m-o-z-g/bulma-stylus-plus/dev/stylus)](https://github.com/stylus/stylus) [![node](https://img.shields.io/node/v/bulma-stylus-plus?logo=node.js&logoColor=white&labelColor=339933)](https://github.com/nodejs/node) [![License](https://img.shields.io/npm/l/bulma-stylus-plus)](https://github.com/M-O-Z-G/bulma-stylus-plus/blob/master/LICENSE) [![GitHub commit activity](https://img.shields.io/github/commit-activity/y/m-o-z-g/bulma-stylus-plus?logo=github&label=commits)](https://github.com/M-O-Z-G/bulma-stylus-plus/commits/master) [![GitHub commits since latest release (by date including pre-releases)](https://img.shields.io/github/commits-since/m-o-z-g/bulma-stylus-plus/v0.8.1-rc.1/master?include_prereleases&label=commits%20since%20forked&logo=github)](https://github.com/M-O-Z-G/bulma-stylus-plus/commits/master) [![GitHub commits since latest release (by date including pre-releases)](https://img.shields.io/github/commits-since/m-o-z-g/bulma-stylus-plus/latest/master?include_prereleases&logo=github&label=commits%20since%20latest%20release)](https://github.com/M-O-Z-G/bulma-stylus-plus/commits/master) 

![Bulma Stylus Plus: an Improved versions of Stylus translation of a Flexbox CSS framework](https://i.imgur.com/fhM0nae.png)

**[Bulma Stylus Plus](https://github.com/M-O-Z-G/bulma-stylus-plus)** is the fork of original [Bulma translation](https://github.com/groenroos/bulma-stylus) by [Oskari Groenroos](https://github.com/groenroos), contains some fixes, enhancements and additions. Following the full compliance with the original [Bulma, Saas-based CSS framework](https://github.com/jgthms/bulma) is not the goal of this fork, any additions and improvements (including Stylus-only) can be made. Main goal, otherwise, is to take users more control over the output. As many other CSS frameworks, Bulma's CSS is full of hundreds useless rules, for example: _default_ and _custom_ colors are generated for each colorful element like _buttons_ or *navbar*. Not to mention the fact that standard colors are not subject to user redefining through settings. But it's should be OK if user wants or don't want at all to add all of them or partially. I provide you over 300 new variables and hash arrays to control output as much accurate as you want.

## Installation

If you simply want to include the built CSS file ([`/css/bulma.css`](https://github.com/m-o-z-g/bulma-stylus-plus/blob/master/css/bulma.css)), you can.

#### Install from [npm](https://github.com/npm/npm)

```sh
npm install --only=dev bulma-stylus-plus --latest
```

#### Install with [Yarn](https://github.com/yarnpkg)

```sh
yarn add bulma-stylus-plus --dev
```

#### Install with [Bower](https://github.com/bower/bower)

```sh
bower install bulma-stylus-plus --save-dev
```

## Usage

### CLI

For CLI, use [stylus](https://www.npmjs.org/package/stylus) and set **bulma-stylus-plus** as option for `use` attribute. `import` attrubutes are optional, you can add them inside `styl` file manually.

```sh
stylus my-styles/styles.styl --out my-output/styles.css --sourcemap --use bulma-stylus-plus --import my-styles/_settings.styl --import bulma-stylus-plus
```

### Gulp

For [gulp](https://github.com/gulpjs/gulp), use [gulp-stylus](https://www.npmjs.org/package/gulp-stylus) and include **bulma-stylus-plus** in your `use` option for the task.

<details>
<summary><b>E̲X̲A̲M̲P̲L̲E̲:</b></summary>

```javascript
const gulp = require( "gulp" ),
	stylus = require( "gulp-stylus" ),
	bsp    = require( "bulma-stylus-plus" );

function styles() {
	return gulp.src("styles/styles.styl")
		.pipe( stylus( {
			"use": bsp(),
        	"import": ["_settings", "bulma-stylus-plus"] // Optional, you can add them inside `styl` file manually.
		} ) )
		.pipe(gulp.dest("css"));
}

exports.styles = styles
```

</details>

### Included in compilation with Grunt

For [grunt](https://github.com/gruntjs/grunt), you can use [grunt-contrib-stylus](https://www.npmjs.org/package/grunt-contrib-stylus), and include **bulma-stylus-plus** in your `use` option for the task.

<details>
<summary><b>E̲X̲A̲M̲P̲L̲E̲:</b></summary>

```javascript
module.exports = function( grunt ) {
	grunt.loadNpmTask( "grunt-contrib-stylus" );
	grunt.initConfig( {
		"stylus": {
			"options": {
				"compress": false,
				"use": [
					require( "bulma-stylus-plus" )
				],
                "import": ["_settings", "bulma-stylus-plus"] // Optional, you can add them inside `styl` file manually.
			},
			"styles": {
				"files": {
					"css/bulma.css": "bulma-stylus-plus.styl"
				}
			}
		}
	};
};
```

</details>

To generate all Bulma styles within your Stylus files, simply add:

```stylus
@import "_settings" // Place where you can redefine default variables of Bulma Stylus Plus.
@import "bulma-stylus-plus" // All CSS code with the changes defined above will be generated here, if `$silent-mode == false`.

/* Your main styles */
```

## Stats

[![NPM](https://nodei.co/npm/bulma-stylus-plus.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bulma-stylus-plus/)

## Documentation

Since Bulma Stylus Plus is mostly functionally identical to the original Bulma, you can refer to the original [Bulma documentation](http://bulma.io/documentation/overview/start/) for instructions, examples, syntax and browser support. Any additions will be outlined in [wiki](https://github.com/M-O-Z-G/bulma-stylus-plus/wiki).

## Comparison

| Feature                     | Bulma(_‑stylus_)                             | Bulma‑stylus‑plus                                            |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| Abstracted components       | No                                           | **Yes**                                                      |
| _Silent_ features           | No                                           | **Yes**. Allows to hide rendered/generated components/elements or part of rules in resulted CSS, but keeps it available for reuse. |
| Column ratios               | 1 hardcoded name for each ratio.             | **Multiple** user defined names.<br />(_Numerical names are included as addition_) |
| Prefixed selectors          | No                                           | **Optional.** (_Default: No_)                                |
| Solid default buttons       | No                                           | **Optional** (Default: No)                                   |
| Grid columns                | 12                                           | **Optional** (_Default: 12_)                                 |
| Repeatable rules            | Separated                                    | **Generated** within loop mixins.                            |
| Image ratios                | 15 predefined landscape and portrait ratios. | 15 **+ 22** optional additional ratios. **Portrait rules are generated automatically and optional too.** _All ratios has altered names also._ |
| Contrast formula            | HSL                                          | **Optional: HSL** or **YIQ**.                                |
| Ralative names for children | No                                           | **Yes**\*<br />_* Not if the same selector is used inside different components, in this case the inheritance works only through variables `initial-variables.styl`._ |
| Selector names              | Hardcoded                                    | **Stored in variables**                                      |
| Banner element              | No                                           | **Yes**                                                      |

## Bugs & support

Any bugs or support requests can be posted into [the GitHub issue tracker](https://github.com/M-O-Z-G/bulma-stylus-plus/issues).

**Please note:** Bulma Stylus Plus is a translation of Bulma from Sass to Stylus. Therefore, before submitting a bug, please make sure the issue is actually related specifically to the translation, and the Sass edition of Bulma does not exhibit the same bug. If it does, please submit your issue to [Bulma's issue tracker](https://github.com/jgthms/bulma/issues) instead.

## License

Released under the MIT license.
