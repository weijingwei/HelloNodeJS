/**
 * http://usejsdoc.org/
 */
var util = require('util'); 
function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
		return this.name; 
	}; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
// object, show more detail, depth #, color
console.log(util.inspect(obj, true, undefined, true));