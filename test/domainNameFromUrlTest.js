const assert = require("assert");
const domainName = require("../kyu5/domainNameFromUrl");

describe("domainNameFromUrl", () => {
	it("Extracts the domain name from the given URL with www", () => {
		assert.deepStrictEqual(domainName("http://www.zombie-bites.com"), "zombie-bites");
		assert.deepStrictEqual(domainName("https://www.cnet.com"), "cnet");
		assert.deepStrictEqual(domainName("www.xakep.ru"), "xakep");
	});
	it('Extracts the domain name from the given URL without www', () => {
		assert.deepStrictEqual(domainName("http://github.com/carbonfive/raygun"), "github");
		assert.deepStrictEqual(domainName("http://google.com"), "google");
		assert.deepStrictEqual(domainName("https://youtube.com"), "youtube");
	});
	it('Recognizes subdomains', () => {
		assert.deepStrictEqual(domainName("http://google.co.jp"), "google");
	});
});
