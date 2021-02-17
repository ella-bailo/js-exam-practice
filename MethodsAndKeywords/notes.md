# Methods and Keywords Notes 

## var let and const

### var

* function scoped
* hoisted and initilized, undefined before declaration
* **is** available globally in window object when defined at the top level
* **can** be redeclared
* **can** be redeffined

### let 

* block scoped
* hoisted but **not** initilized, refferance error before declaration
* is **not** available globally in window object when defined at the top level 
* **can't** be redeclared
* **can** be redeffined

### const

* block scoped
* refferance error before declaration
* cannot have value reassigned
* is **not** available globally in window object when defined at the top level
* **can't** be redeclared
* **can't** be redeffined 

The below example is a stack overflow answer by [Michal Perlakowski](https://stackoverflow.com/users/3853934/micha%c5%82-per%c5%82akowski), edited by [ketchupisred](https://stackoverflow.com/users/5578477/ketchupisred). The full thread can be found [here](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var#:~:text=The%20main%20difference%20is%20the,outside%20the%20loop%20for%20example.&text=let%20allows%20you%20to%20declare,on%20which%20it%20is%20used.). 


**Block scope**

Variables declared using the let keyword are block-scoped, which means that they are available only in the block in which they were declared.

**At the top level (outside of a function)**


At the top level, variables declared using let don't create properties on the global object.

```
var globalVariable = 42;
let blockScopedVariable = 43;

console.log(globalVariable); // 42
console.log(blockScopedVariable); // 43

console.log(this.globalVariable); // 42
console.log(this.blockScopedVariable); // undefined

```


**Inside a function**

Inside a function (but outside of a block), let has the same scope as var.

```
(() => {
  var functionScopedVariable = 42;
  let blockScopedVariable = 43;

  console.log(functionScopedVariable); // 42
  console.log(blockScopedVariable); // 43
})();

console.log(functionScopedVariable); // ReferenceError: functionScopedVariable is not defined
console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined

```


**Inside a block**

Variables declared using let inside a block can't be accessed outside that block.

```

{
  var globalVariable = 42;
  let blockScopedVariable = 43;
  console.log(globalVariable); // 42
  console.log(blockScopedVariable); // 43
}

console.log(globalVariable); // 42
console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined

```


**Inside a loop**

Variables declared with let in loops can be referenced only inside that loop.

```

for (var i = 0; i < 3; i++) {
  var j = i * 2;
}
console.log(i); // 3
console.log(j); // 4

for (let k = 0; k < 3; k++) {
  let l = k * 2;
}
console.log(typeof k); // undefined
console.log(typeof l); // undefined
// Trying to do console.log(k) or console.log(l) here would throw a ReferenceError.

```


**Loops with closures**

If you use let instead of var in a loop, with each iteration you get a new variable. That means that you can safely use a closure inside a loop.

```

// Logs 3 thrice, not what we meant.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}

// Logs 0, 1 and 2, as expected.
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}

```


**Temporal dead zone**

Because of the temporal dead zone, variables declared using let can't be accessed before they are declared. Attempting to do so throws an error.

```
console.log(noTDZ); // undefined
var noTDZ = 43;
console.log(hasTDZ); // ReferenceError: hasTDZ is not defined
let hasTDZ = 42;

```


**No re-declaring**

You can't declare the same variable multiple times using let. You also can't declare a variable using let with the same identifier as another variable which was declared using var.

```
var a;
var a; // Works fine.

let b;
let b; // SyntaxError: Identifier 'b' has already been declared

var c;
let c; // SyntaxError: Identifier 'c' has already been declared
```

### Good Reading

https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
https://medium.com/swlh/local-vs-global-scope-and-let-vs-var-in-javascript-6d577d0a2750
https://josephcardillo.medium.com/the-difference-between-var-let-and-const-in-javascript-part-2-60fa568d0a0


## Increment/decrement

The below section is directly taken from a [codeburst article](https://codeburst.io/javascript-increment-and-decrement-8c223858d5ed)

### Using ++/-- After the Operand

When you use the increment/decrement operator after the operand, the value will be returned before the operand is increased/decreased.

example:

```

// Increment
let a = 1;
console.log(a++);    // 1
console.log(a);      // 2
// Decrement
let b = 1;
console.log(b--);    // 1
console.log(b);      // 0

```

### Using ++/-- Before the Operand

If you’d rather make the variable increment/decrement before returning, you simply have to use the increment/decrement operator before the operand:

```
// Increment
let a = 1;
console.log(++a);    // 2
console.log(a);      // 2
// Decrement
let b = 1;
console.log(--b);    // 0
console.log(b);      // 0

```
## Addition/subtraction

The below masterpeice is by me 

Operators: + and - 

example: 

```
let one = 1;
let two = 2;

console.log(one + two);      // 3
console.log(one - two);      // -1

```

## Division/Multiplication

And another by me 

Operators: * and / 

example: 

```
let one = 1;
let two = 2;

console.log(one * two);      // 2
console.log(one / two);      // 0.5 
console.log(Math.floor(one / two)) // 0

```

## Modulus

Operator: %

Note: the modulo opperator does not always return the correct result when opperands are negative. 

example: 

```
let one = 1
let two = 2
let three = 3
let four = 4
let twoPointFive = 2.5
let minusFour = -4
let minusFiveHundred = -500 

console.log(`One modulo two: ${one % two}`) // 1 Using circle method: 0,1
console.log(`Four modulo three: ${four % three}`) // 1 Using circle method: 0, 1, 2, 0, 1 
console.log(`Three modulo four: ${three % four}`) // 3 Using circle method: 0, 1, 2, 3
console.log(`Two point five modulo one: ${twoPointFive % one}`) // 0.5 Using circle method: 0, 0, 0.5 (half turn)
console.log(`Two point five modulo four: ${twoPointFive % four}`) // 2.5 Using circle method: 0, 1, 2, 2.5 (half turn)
console.log(`Minus five hundred modulo four: ${minusFiveHundred % four}`) // 0 
console.log(`Two modulo minus five hundred: ${two % minusFiveHundred}`) // 2
console.log(`- Four modulo three : ${-four % three}`) // -1
console.log(`Minus four modulo three : ${minusFour % three}`) 

```

The circle method can also be used to work out modulo, I have found [this article](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/what-is-modular-arithmetic) by [Khan Acadmey](https://www.khanacademy.org/computing/computer-science/) particularly useful.

my proof: 

```

// where x%y deals with postive int operands
const circleMethodProof = (x, y) => {
  var passes = x; //passes equals turns on the circle
  var points = [];
  while (passes > 0) {
    for (let i = 0; i < y; i++) {
      points.push(i);
      --passes;
      if (passes < 0) {
        break;
      }
    }
  }
  return points[points.length - 1];
};

console.log(circleMethodProof(6, 4)); // 1.5

// where x%y deals with negative and decimal x opperand 
const negativeModulo = (x, y) => {
  try {
    if (Math.sign(x) != -1) {
      throw " first parameter is not a negative number";
    }
  } catch (err) {
    console.log(err);
  } finally {
    var passes = -x - 1; // needs one less pass as we are not starting from zero in this method
    var points = [];
    while (passes >= 0) {
      for (let i = y - 1; i >= 0; i--) {
        points.push(i);
        --passes;
        if (passes >= 0 && passes < 1) {
          var decimal = passes;
        }
        if (passes < 0) {
          break;
        }
      }
    }
    return points[points.length - 1] + decimal;
  }
};

console.log(negativeModulo(-5.5, 3)); // 1.5


```

## Compound assignment operators 

The below table is taken from [W3schools.com](https://www.w3schools.com/jsref/jsref_operators.asp)

Given that x = 10 and y = 5, the table below explains the assignment operators:

| Operator          | Example     | Same as       | Result in x
| :---              | :---        | :---          | :--- 
| =                 | x = y       | x = y         | x = 5
| +=                | x += y      | x = x + y     | x = 15
| -=                | x -= y      | x = x - y     | x = 5
| *=                | x *= y      | x = x * y     | x = 50
| /=                | x /= y      | x = x / y     | x = 2
| %=                | x %= y      | x = x % y     | x = 0


## No script 
Defines alternate content to be displayed to users who have JS disabled in there browser 

for example: 

```
<script>console.log("Hello world!")<\script>

<noscript>You need to have JS enabled to access all features of this site<\noscript>

```
## Reserved words 

Reserved words are words that cannot be used as variable, function or label names in JavaScript. 

A list of these can be found [here](https://www.w3schools.com/js/js_reserved.asp).

## Debugger statement 

The Debugger statment acts as a breakpoint in code, launching a debugger if one is available. If no debugger is available the debugger statment does nothing.

for example: 

```
let a = 1;

debugger;

a = 2; 

```
## Inline and external scripts

Inline example: 

```
<!DOCTYPE html>  
<html>    
<body>  
<script> // code here </script> 
</body>  
</html>  

```
external script example: 

```
<!DOCTYPE html>  
<html>    
<body>  
<src = "/path"> 
</body>  
</html> 

```
