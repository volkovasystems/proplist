"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"clazof": "clazof",
              			"meto": "meto",
              			"repram": "repram"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var clazof = require("clazof");
var meto = require("meto");
var repram = require("repram");

var proplist = function proplist(entity) {
	/*;
                                          	@meta-configuration:
                                          		{
                                          			"entity:required": "*"
                                          		}
                                          	@end-meta-configuration
                                          */

	return (0, _getOwnPropertyNames2.default)(entity).map(repram(meto.bind(entity), STRING)).
	filter(function (definition) {return clazof(definition, "Meta");});
};

module.exports = proplist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BsaXN0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2xhem9mIiwicmVxdWlyZSIsIm1ldG8iLCJyZXByYW0iLCJwcm9wbGlzdCIsImVudGl0eSIsIm1hcCIsImJpbmQiLCJTVFJJTkciLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1HLFdBQVcsU0FBU0EsUUFBVCxDQUFtQkMsTUFBbkIsRUFBMkI7QUFDM0M7Ozs7Ozs7O0FBUUEsUUFBTyxtQ0FBNEJBLE1BQTVCLEVBQXFDQyxHQUFyQyxDQUEwQ0gsT0FBUUQsS0FBS0ssSUFBTCxDQUFXRixNQUFYLENBQVIsRUFBNkJHLE1BQTdCLENBQTFDO0FBQ0xDLE9BREssQ0FDRyxVQUFFQyxVQUFGLEVBQWtCLENBQUUsT0FBT1YsT0FBUVUsVUFBUixFQUFvQixNQUFwQixDQUFQLENBQXNDLENBRDdELENBQVA7QUFFQSxDQVhEOztBQWFBQyxPQUFPQyxPQUFQLEdBQWlCUixRQUFqQiIsImZpbGUiOiJwcm9wbGlzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwcm9wbGlzdFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicHJvcGxpc3QvcHJvcGxpc3QuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInByb3BsaXN0LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInByb3BsaXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9wcm9wbGlzdC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInByb3BsaXN0LXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0U21hcnQgbGlzdCBvZiBvYmplY3QgcHJvcGVydGllcy5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcIm1ldG9cIjogXCJtZXRvXCIsXG5cdFx0XHRcInJlcHJhbVwiOiBcInJlcHJhbVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IG1ldG8gPSByZXF1aXJlKCBcIm1ldG9cIiApO1xuY29uc3QgcmVwcmFtID0gcmVxdWlyZSggXCJyZXByYW1cIiApO1xuXG5jb25zdCBwcm9wbGlzdCA9IGZ1bmN0aW9uIHByb3BsaXN0KCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggZW50aXR5ICkubWFwKCByZXByYW0oIG1ldG8uYmluZCggZW50aXR5ICksIFNUUklORyApIClcblx0XHQuZmlsdGVyKCAoIGRlZmluaXRpb24gKSA9PiB7IHJldHVybiBjbGF6b2YoIGRlZmluaXRpb24sIFwiTWV0YVwiICk7IH0gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGxpc3Q7XG4iXX0=
//# sourceMappingURL=proplist.support.js.map
