# expressjs-vuejs-brunch-skeleton

Simple brunch skeleton for web app using combined expressjs for backend and vuejs for frontend.

Follows vue [best practices](https://vuejs.org/v2/guide/single-file-components.html), and is uses a simple example from the [vue-cli generator](https://github.com/vuejs/vue-cli).

Uses [vue-mdc-adapter](https://github.com/stasson/vue-mdc-adapter), the most full-featured Vue.js MDC wrapper.

## Installation

1. Install Brunch globally

```bash
npm install -g brunch
```

2. Create a new Brunch project using _this_ skeleton

```bash
brunch new -s express-vue
```

## Getting Started

> Taken from the official Brunch docs

* Install (if you don't have them):
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Brunch](http://brunch.io): `npm install -g brunch`
  * Backend and Frontend app dependencies: `npm install`
* Run:
  * `npm run devstart` — watches the project with continuous rebuild. This will also launch HTTP server at port 3000.
  * `npm run build` — builds minified project for production
* Learn:
  * `backend/public/` dir is fully auto-generated and served by HTTP server.  Write your frontend code in `frontend/app/` dir.
  * Place static files you want to be copied from `frontend/app/assets/` to `backend/public/`.
  * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
