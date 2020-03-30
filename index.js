/*!
 * Bulma Stylus Plus
 * Improved and expanded version of Bulma Stylus translation of Bulma.io,
 * flexbox-based CSS framework.
 *
 * https://github.com/M-O-Z-G/bulma-stylus-plus
 *
 * MIT Licensed
 */

const stylus = require( "stylus" ),
	path     = require( "path" ),
	nodes    = stylus.nodes,
	utils    = stylus.utils;

exports = module.exports = function() {
	return function( oStyle ){
		oStyle.include( __dirname );
	};
};

exports.version = require( path.join( __dirname, "package.json" ) ).version;

exports.path = __dirname;
