# react-ellipsis-with-tooltip

> truncates (with ellipsis) overflowing text elements and adds a tooltip https://amirfefer.github.io/react-ellipsis-with-tooltip

[![Package Version](https://img.shields.io/npm/v/react-ellipsis-with-tooltip.svg?style=flat-square)](https://www.npmjs.com/package/react-ellipsis-with-tooltip)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Downloads Status](https://img.shields.io/npm/dm/react-ellipsis-with-tooltip.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-ellipsis-with-tooltip&from=2016-04-01)
[![Build Status: Linux](https://img.shields.io/travis/amirfefer/react-ellipsis-with-tooltip/master.svg?style=flat-square)](https://travis-ci.org/amirfefer/react-ellipsis-with-tooltip)
[![Coverage Status](https://coveralls.io/repos/github/amirfefer/react-ellipsis-with-tooltip/badge.svg?branch=master)](https://coveralls.io/github/amirfefer/react-ellipsis-with-tooltip?branch=master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![dependencies Status](https://david-dm.org/amirfefer/react-ellipsis-with-tooltip/status.svg)](https://david-dm.org/amirfefer/react-ellipsis-with-tooltip)
[![devDependencies Status](https://david-dm.org/amirfefer/react-ellipsis-with-tooltip/dev-status.svg)](https://david-dm.org/amirfefer/react-ellipsis-with-tooltip?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT License](https://img.shields.io/npm/l/stack-overflow-copy-paste.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Recognizes whether a text element is overflowed,
truncates (with ellipsis) it and adds bootstrap's tooltip.
Try via [stroybook](https://amirfefer.github.io/react-ellipsis-with-tooltip)

## Installation

```console
npm install --save react-ellipsis-with-tooltip
```
or
```console
yarn add react-ellipsis-with-tooltip
```

## Usage

### Table cell
```js
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip'

<td>
  <EllipsisWithTooltip placement="bottom">
     Lorem Ipsum
  </EllipsisWithTooltip>
<td>   
```
### Anchor element

```js
import EllipsisWithTooltip from 'react-ellipsis-with-tooltip'

<td>
  <EllipsisWithTooltip placement="bottom">
    <a href="#">  Lorem Ipsum </a> 
  </EllipsisWithTooltip>
<td> 
```

## License

MIT &copy; [Amir Fefer](https://github.com/amirfefer/react-ellipsis-with-tooltip)
