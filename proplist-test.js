const assert = require( "assert" );
const proplist = require( "./proplist.js" );

assert.ok( JSON.stringify( proplist( { "name": "simple" } ) ) );

assert.ok ( proplist( [ 1, 2, 3 ] ) );

console.log( "ok" );
