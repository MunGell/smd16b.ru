default: publish

publish:
	git subtree push --prefix dist origin gh-pages
.PHONY: publish

dist: gulpfile.js
	@gulp build

node_modules: package.json
	@npm install