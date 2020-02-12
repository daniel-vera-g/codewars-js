// https://www.codewars.com/kata/514a024011ea4fb54200004b/
module.exports = function domainName(url) {
	const urlRegx = /(?:(?:w{3}\.)|(?:(?:ht{2}ps?:\/\/)(?:w{3})\.*))*([a-z0-9-]+)(?:\.[\/a-z]+)/;
	return url.match(urlRegx)[1];
};
