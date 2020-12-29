const fs = require('fs');

module.exports = function (eleventyConfig) {
	eleventyConfig.setTemplateFormats(['ejs', 'md', 'html', 'txt']);

	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addPassthroughCopy('images/');
	eleventyConfig.addPassthroughCopy({ 'site/_processed': 'assets/' });

	eleventyConfig.setEjsOptions({
		rmWhitespace: true,
	});

	eleventyConfig.setBrowserSyncConfig({
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware('*', (req, res) => {
					const content_404 = fs.readFileSync('dist/404.html');
					// Provides the 404 content without redirect.
					res.write(content_404);
					// Add 404 http status code in request header.
					// res.writeHead(404, { "Content-Type": "text/html" });
					res.writeHead(404);
					res.end();
				});
			},
		},
	});

	return {
		dir: {
			input: 'site',
			output: 'dist',
			includes: '_includes',
			layouts: '_layouts',
			data: '_data',
			markdownTemplateEngine: 'ejs',
		},
	};
};
