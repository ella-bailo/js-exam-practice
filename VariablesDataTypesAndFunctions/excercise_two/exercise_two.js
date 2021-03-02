let stringArray = ["Hello", "World", "This", "is", "a", "pretty", "random", "array"];

stringArray.forEach(
   item => console.log(item)
);

stringArray.sort();
console.log(stringArray); // [ 'Hello', 'This', 'World', 'a', 'array', 'is', 'pretty', 'random' ]

stringArray.push("im last in the array!"); // [ 'Hello','This','World','a','array','is','pretty','random','im last in the array!' ]
console.log(stringArray);

stringArray.pop();
console.log(stringArray); // [ 'Hello', 'This', 'World', 'a', 'array', 'is', 'pretty', 'random' ]

stringArray.shift(); // [ 'This', 'World', 'a', 'array', 'is', 'pretty', 'random' ]
console.log(stringArray);

stringArray.unshift("I am first in the array!");  // [ 'I am first in the array!', This', 'World', 'a', 'array', 'is', 'pretty', 'random' ]
console.log(stringArray);

console.log(stringArray.length) // 8
console.log(stringArray[2]); // World
