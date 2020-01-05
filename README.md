# NVM Global Installs [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/nvm-global-installs/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/nvm-global-installs)

Get the globally installed packages for any nvm-selectable version.

[![NPM Badge](https://nodei.co/npm/nvm-global-installs.png)](https://npmjs.com/package/nvm-global-installs)

## Install

```sh
npm install nvm-global-installs
```

## Usage

```js
const nvmGlobalInstalls = require("nvm-global-installs");

nvmGlobalInstalls("v13.5.0");
//=> { 'v13.5.0': { npm: '6.13.4', yarn: '1.21.1' } }
```

## API

### nvmGlobalInstalls(version?)

#### version

Type: `string`

The version to get the globally installed packages for.

## CLI Usage

```sh
$ ngi
\ Traversing dependencies
├─ v0.10.48
│  └─ npm
├─ v12.14.0
│  ├─ active-win
│  ├─ npm
│  ├─ windows-build-tools
│  └─ yarn
└─ v13.5.0
   ├─ ngi
   ├─ npm
   └─ yarn
```
