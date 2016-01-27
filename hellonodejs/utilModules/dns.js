/**
 * http://usejsdoc.org/
 */
var dns = require('dns');

dns.lookup('www.github.com', function onLookup(err, address, family) {
	if (err) {
		return console.error(err.stack);
	}
	console.log('ip 地址:', address);
	dns.reverse(address, function (err, hostnames) {
		if (err) {
			return console.log(err.stack);
		}
		console.log('反向解析: ' + address + ': ' + JSON.stringify(hostnames));
	}); 
});