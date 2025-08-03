NPM := ./scripts/npm.sh

install:
	$(NPM) install

build:
	$(NPM) run build

dev:
	$(NPM) run dev

preview:
	$(NPM) run preview
