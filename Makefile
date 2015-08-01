default: publish

publish: dist
	git subtree push --prefix dist origin gh-pages
.PHONY: publish

dist: gulpfile.js node_modules
	@gulp build

node_modules: package.json
	@npm install