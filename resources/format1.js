// Returns 1 if x is bar, 2 otherwise
function foo(x) {
  var result = x == "bar" ? 1 : 2

  if (result == 2) console.log("Was not bar")

  return result
}

console.log(foo("baz"))