const assert = require( "assert" );
const proplist = require( "./proplist.js" );

assert.equal( typeof proplist( { "name": "simple" } ) == "object", true, "should be of object data type" );

console.log( "ok" );
