const assert = require( "assert" );
const proplist = require( "./proplist.js" );

assert.ok( JSON.stringify( proplist( { "name": "simple" } ) ) );

console.log( "ok" );
