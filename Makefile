default: publish

clean: dist
	@rm -rf dist
.PHONY: clean

publish: dist
	git subtree push --prefix dist origin gh-pages
.PHONY: publish

build: gulpfile.js node_modules clean
	gulp build

node_modules: package.json
	npm install