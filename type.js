var classToType = {
  "[object Array]": "array",
  "[object Boolean]": "boolean",
  "[object Date]": "date",
  "[object Error]": "error",
  "[object Function]": "function",
  "[object Number]": "number",
  "[object Object]": "object",
  "[object RegExp]": "regexp",
  "[object String]": "string",
  "[object Symbol]": "symbol",
}

module.exports = function(emit) {
  if (emit.type) {
    return
  }

  emit.any("type", type)
  emit.any("typeCheck", typeCheck)
}

function type(arg) {
  if (arg == null) {
    return arg + ""
  }

  // prettier-ignore
  return arg && arg.then
    ? "promise"
    : typeof arg === "object" || typeof arg === "function"
      ? classToType[toString.call(arg)] || "object"
      : typeof arg
}

function typeCheck(arg, prop, emit) {
  var type = emit.type(prop, arg.check),
    types = arg.type.split(/\s+\|\s+/)
  return (
    types.indexOf("any") > -1 || types.indexOf(type) > -1
  )
}
