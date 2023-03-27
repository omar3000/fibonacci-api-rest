# fibonnaci-rest-api

Define the API endpoint:
The API should have an endpoint that accepts an index parameter "n". 
'http://localhost:3000/calculations/fibonacci/500000'

tested with n values up to 500k


In this implementation, I use a loop to calculate the Fibonacci value iteratively instead of re
sively. We initialize prev to 0 and current to 1, and then in each iteration of the loop, I calculate the next Fibonacci value by adding prev 
and current
and assigning it to next. I then update prev to current and current
to next before moving on to the next iteration. After the loop finishes, current
will hold the Fibonacci value for the input index n.

This implementation should be faster and more memory-efficient for very large input values compared to the recursive 
implementation with memoization, as it avoids the overhead of function calls and does not require storing results in memory.

Using BigInt should allow you to calculate the Fibonacci value for very large input values. However, note that BigInt values 
require more memory than Number values, so very large input values can still lead to memory-related issues.
