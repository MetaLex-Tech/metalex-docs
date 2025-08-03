# MetaLeX OS Docs

This is a [Vocs](https://vocs.dev) project bootstrapped with the Vocs CLI.

## Development

Use the provided `Makefile` targets to work with the project without seeing
npm proxy warnings:

```sh
make install   # install dependencies
make dev       # start local dev server
make build     # create production build
make preview   # preview the production build
```

The make targets call `scripts/npm.sh`, which clears proxy-related
environment variables before invoking `npm`. This eliminates warnings such as
`Unknown env config "http-proxy"`. You can also run the wrapper directly, for
example `./scripts/npm.sh test`.

To keep dependencies current, periodically run `./scripts/npm.sh update` (or
`npm update`) and commit the resulting changes rather than using `latest`
versions in `package.json`.
