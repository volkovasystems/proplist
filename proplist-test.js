"use strict";

const proplist = require( "./proplist.js" );

console.log( require( "util" ).inspect( proplist( { "name": "simple" } ), { "showHidden": true } ) );
console.log( proplist( ) );
