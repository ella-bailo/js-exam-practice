# Variables Data Types and Functions notes 

## Primative Data Types 

| Data type     | Example         
| :---          | :---                  
| number        | 12.34      
| boolean       | true/false 
| string        | 'I am a string'

### Data type methods 

**typeof operator**

The below example has been taken from [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) Mozilla article

The typeof operator returns a string indicating the type of the unevaluated operand.

For example: 

```
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

```

**Type checking functions**

The below example has been taken from [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) Mozilla article

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

```
Syntax:

```
object instanceof constructor

//object: The object to test.
//constructor: Function to test against

```
**use strict**

writing "use strict"; at the top of a js file or inside of a function defines that the code should be exectuted in "strict mode".

e.g. no undefined variables 

For example 

```
"use strict";

x = 10; // will cause an error as x is undefined

```

```
x = 10; // will not cause an error

function myFunction(){
    "use strict"; 

    y = 5; // will cause an error
}

```
### Data type operations 

#### **Converting between types** 

**parseInt()**

The parseInt() function parses a string and returns an integer. 

For example: 

```
let x = "10"

console.log(parseInt(x)) // 10

```

#### **Formatting numbers**

**toFixed()**

The toFixed() method converts a number into a string, rounding to a specified number of decimals.

Syntax: 

```
number.toFixed([significantDigits]);

```
For example: 

```
let number = 1.2345678

console.log(number.toFixed()) // "1.2345678"
console.log(number.toFixed(1)) // "1"
console.log(number.toFixed(2)) // "1.2"
console.log(number.toFixed(3)) // "1.235"

```

**toPrecision()**

The toPrecision() method formats a number to a specified length.

A decimal point and nulls are added (if needed), to create the specified length.

Syntax: 

```
number.toPrecision([significantDigits]);

```

For example: 

```
let number = 1.2345678

console.log(number.toPrecision()) // 1.2345678
console.log(number.toPrecision(1)) // 1
console.log(number.toPrecision(2)) // 1.2
console.log(number.toPrecision(3)) // 1.235

```

#### **String operations**

(The following definitions are taken from W3schools)

**length**

The length property returns the length of a string (number of characters).

The length of an empty string is 0.

Syntax:

```
string.length

```

For example: 

```
let string = "I am a string"

console.log(string.length) // 13, blank spaces are also characters

```

**slice()**

The slice() method extracts parts of a string and returns the extracted parts in a new string.

Use the start and end parameters to specify the part of the string you want to extract.

The first character has the position 0, the second has position 1, and so on.

Tip: Use a negative number to select from the end of the string.

Syntax:

```
string.slice(start, end)

```

For example: 

```
let string = "I am a string"

console.log(string.slice(0, 5)) // "I am " inclues 0-4

```

**replace**

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.

This method does not change the original string.

Syntax:

```
string.replace(searchvalue, newvalue)

```

For example: 

```
let string = "I am a string"

console.log(string.replace("am a", "like")) // "I like string"

```
## Arrays 

### Single-dimention arrays 

For example:

```
let x = [1,2,3]

```

### Multi-dimention arrays 

For example: 

```
let x =[[1,2], [3], [4,5,6]]

```

### Iteration 

Syntax:

```
array.forEach(myFunction())

```

### Sort and Search 

**sort()**

sorts items in an array alphbetically / or from low to high numerically.

For example: 

```
let array = [c, b, a, e, g];

console.log(array.sort()) // [a, c, b, e, g]

```
**indexOf()**

The indexOf() method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

Note: The indexOf() method is case sensitive.

syntax: 

```
string.indexOf(searchvalue, start)

```
For example: 

```
let string = "Hello World!"

console.log(string.indexOf("World")) //6

```
### Updating

**push()**

**pop()**

**shift()**

**unshift()**

### Length

### Access and element



