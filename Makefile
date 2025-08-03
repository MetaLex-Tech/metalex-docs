NPM_ENV := npm_config_http_proxy= npm_config_https_proxy=

install:
	$(NPM_ENV) npm install

build:
	$(NPM_ENV) npm run build

dev:
	$(NPM_ENV) npm run dev

preview:
	$(NPM_ENV) npm run preview
