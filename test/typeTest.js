/* global Promise */
/* eslint-env jest */

test("type", function() {
  var dot = require("dot-event")()
  require("../")(dot)

  expect(dot.type({ arg: "" })).toBe("string")
  expect(dot.type({ arg: [] })).toBe("array")
  expect(dot.type({ arg: {} })).toBe("object")
  expect(dot.type({ arg: Promise.resolve() })).toBe(
    "promise"
  )
})

test("typeCheck", function() {
  var dot = require("dot-event")()
  require("../")(dot)

  expect(
    dot.typeCheck({ check: "", type: "string" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({ check: [], type: "array" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({ check: {}, type: "object" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({
      check: Promise.resolve(),
      type: "promise",
    })
  ).toBeTruthy()
})

test("typeCheck (fail)", function() {
  var dot = require("dot-event")()
  require("../")(dot)

  expect(
    dot.typeCheck({ check: [], type: "string" })
  ).not.toBeTruthy()

  expect(
    dot.typeCheck({ check: "", type: "array" })
  ).not.toBeTruthy()

  expect(
    dot.typeCheck({
      check: Promise.resolve(),
      type: "object",
    })
  ).not.toBeTruthy()

  expect(
    dot.typeCheck({ check: {}, type: "promise" })
  ).not.toBeTruthy()
})

test("typeCheck (any)", function() {
  var dot = require("dot-event")()
  require("../")(dot)

  expect(
    dot.typeCheck({ check: true, type: "any" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({ check: "", type: "any" })
  ).toBeTruthy()
})

test("typeCheck (or)", function() {
  var dot = require("dot-event")()
  require("../")(dot)

  expect(
    dot.typeCheck({ check: true, type: "boolean | string" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({ check: "", type: "boolean | string" })
  ).toBeTruthy()

  expect(
    dot.typeCheck({ check: {}, type: "boolean | string" })
  ).not.toBeTruthy()
})
