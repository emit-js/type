# @dot-event/type

![type](type.gif)

## Install

```bash
npm install @dot-event/type
```

## Setup

```js
var dot = require("dot-event")()
require("@dot-event/type")(dot)
```

## Usage

```js
expect(dot.type({ arg: "" })).toBe("string")

expect(
  dot.typeCheck({ check: "", type: "string" })
).toBeTruthy()

expect(
  dot.typeCheck({ check: true, type: "any" })
).toBeTruthy()

expect(
  dot.typeCheck({ check: true, type: "boolean | string" })
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
