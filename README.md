# @emit-js/type

[emit](https://github.com/emit-js/emit#readme) type checking

![type](type.gif)

## Install

```bash
npm install @emit-js/type
```

## Setup

```js
var emit = require("@emit-js/emit")()
require("@emit-js/type")(emit)
```

## Usage

```js
expect(emit.type("")).toBe("string")

expect(
  emit.typeCheck({ check: "", type: "string" })
).toBeTruthy()

expect(
  emit.typeCheck({ check: true, type: "any" })
).toBeTruthy()

expect(
  emit.typeCheck({ check: true, type: "boolean | string" })
).toBeTruthy()
```

## Valid types

- array
- boolean
- date
- error
- function
- null
- number
- object
- promise
- regexp
- string
- symbol
