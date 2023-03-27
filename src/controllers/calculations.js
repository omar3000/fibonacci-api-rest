exports.getFibonacci = (req, res) => {
    const n = parseInt(req.params.n)
    const fibValue = fibonacci(n)
    const response = {
      index: n,
      value: fibValue
    }
    res.send(response)
}

function fibonacci(n) {
  if (n < 0) {
    return "Invalid input"
  }
  
  let pre = BigInt(0);
  let current = BigInt(1)
  
  for (let i = 2; i <= n; i++) {
    let next = pre + current
    pre = current
    current = next
  }
  
  return current.toString()
}