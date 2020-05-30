function padLeft(val, num, str) {
	return '00000'.replace(/0/g, str).slice(0, num - val.length) + val;
}

//console.log(padLeft('foo', 5, ' '));

module.exports = {padLeft};