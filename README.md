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
```
