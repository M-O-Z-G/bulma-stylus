# Bulma Stylus Plus

![Bulma Stylus Plus: an Improved versions of Stylus translation of a Flexbox CSS framework](https://i.imgur.com/fhM0nae.png)

**Bulma Stylus Plus** is the fork of original [Bulma translation](https://github.com/groenroos/bulma-stylus) by [Oskari Groenroos](https://github.com/groenroos), contains some fixes, enhancements and additions. Following the full compliance with the original [Bulma, Saas-based CSS framework,](https://github.com/jgthms/bulma) is not the goal of this fork, any additions and improvements (including Stylus-only) can be made.

## Installation

If you simply want to include the built CSS file ([`/css/bulma.css`](https://github.com/m-o-z-g/bulma-stylus-plus/blob/master/css/bulma.css)), you can. However, 10 out of 10 times a better bet is to instead include [built CSS file of the original Bulma](https://github.com/jgthms/bulma/blob/master/css/bulma.css).

_* npm verison is not available at the moment._

## Documentation

Since Bulma Stylus Plus is functionally identical to the original Bulma mostly, you can refer to the original [Bulma documentation](http://bulma.io/documentation/overview/start/) for instructions, examples, syntax and browser support. Any additions will be outlined in wiki.

All variable and mixin names mostly are the same.

## Comparsion

| Feature          | Bulma(_-stylus_)                 | Bulma-stylus-plus                                            |
| ---------------- | -------------------------------- | ------------------------------------------------------------ |
| Grid columns     | 12                               | **Optional** (_Default: 12_)                                 |
| Repeatable rules | Separated                        | **Generated** within loop mixins.                            |
| Column names     | 1 hardcoded name for each ratio. | **Multiple** user defined names.<br />(_Numerical names are included as addition_) |
| Contrast formula | HSL                              | **HSL** or **YIQ**.                                          |

## Bugs & support

Any bugs or support requests can be posted into [the GitHub issue tracker](https://github.com/M-O-Z-G/bulma-stylus-plus/issues).

**Please note:** Bulma Stylus Plus is a translation of Bulma from Sass to Stylus. Therefore, before submitting a bug, please make sure the issue is actually related specifically to the translation, and the Sass edition of Bulma does not exhibit the same bug. If it does, please submit your issue to [Bulma's issue tracker](https://github.com/jgthms/bulma/issues) instead.

## License

Released under the MIT license.
