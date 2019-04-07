/* global Promise */
/* eslint-env jest */

test("type", function() {
  var emit = require("@emit-js/emit")()
  require("../")(emit)

  expect(emit.type("")).toBe("string")
  expect(emit.type([])).toBe("array")
  expect(emit.type({})).toBe("object")
  expect(emit.type(Promise.resolve())).toBe("promise")
})

test("typeCheck", function() {
  var emit = require("@emit-js/emit")()
  require("../")(emit)

  expect(
    emit.typeCheck({ check: "", type: "string" })
  ).toBeTruthy()

  expect(
    emit.typeCheck({ check: [], type: "array" })
  ).toBeTruthy()

  expect(
    emit.typeCheck({ check: {}, type: "object" })
  ).toBeTruthy()

  expect(
    emit.typeCheck({
      check: Promise.resolve(),
      type: "promise",
    })
  ).toBeTruthy()
})

test("typeCheck (fail)", function() {
  var emit = require("@emit-js/emit")()
  require("../")(emit)

  expect(
    emit.typeCheck({ check: [], type: "string" })
  ).not.toBeTruthy()

  expect(
    emit.typeCheck({ check: "", type: "array" })
  ).not.toBeTruthy()

  expect(
    emit.typeCheck({
      check: Promise.resolve(),
      type: "object",
    })
  ).not.toBeTruthy()

  expect(
    emit.typeCheck({ check: {}, type: "promise" })
  ).not.toBeTruthy()
})

test("typeCheck (any)", function() {
  var emit = require("@emit-js/emit")()
  require("../")(emit)

  expect(
    emit.typeCheck({ check: true, type: "any" })
  ).toBeTruthy()

  expect(
    emit.typeCheck({ check: "", type: "any" })
  ).toBeTruthy()
})

test("typeCheck (or)", function() {
  var emit = require("@emit-js/emit")()
  require("../")(emit)

  expect(
    emit.typeCheck({
      check: true,
      type: "boolean | string",
    })
  ).toBeTruthy()

  expect(
    emit.typeCheck({ check: "", type: "boolean | string" })
  ).toBeTruthy()

  expect(
    emit.typeCheck({ check: {}, type: "boolean | string" })
  ).not.toBeTruthy()
})
