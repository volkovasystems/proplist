"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "proplist",
			"path": "proplist/proplist.js",
			"file": "proplist.js",
			"module": "proplist",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/proplist.git",
			"test": "proplist-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Smart list of object properties.
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"protype": "protype"
		}
	@end-include
*/

if( typeof require == "function" ){
	var harden = require( "harden" );
	var protype = require( "protype" );
}

if( typeof window != "undefined" && !( "harden" in window ) ){
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" && !( "protype" in window ) ){
	throw new Error( "protype is not defined" );
}

harden( "METHOD", "method" );
harden( "PROPERTY", "property" );

this.proplist = function proplist( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	return Object.getOwnPropertyNames( entity )
		.map( function onEachProperty( property ){
			let holder = { };
			let definition = harden.bind( holder );

			definition( "property", property );
			definition( "type", protype( property, FUNCTION )? METHOD : PROPERTY );

			let descriptor = Object.getOwnPropertyDescriptor( entity, property );
			definition( "enumerable", descriptor.enumerable );
			definition( "configurable", descriptor.configurable );
			definition( "writable", descriptor.writable );

			definition( "get", descriptor.get );
			definition( "set", descriptor.set );

			definition( "value", descriptor.value );

			return holder;
		} );
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = this.proplist;
}
