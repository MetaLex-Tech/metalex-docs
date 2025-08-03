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

The make targets clear proxy related environment variables before invoking
npm, eliminating warnings such as `Unknown env config "http-proxy"`.
