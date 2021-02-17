// code that demonstrates the difference between var, let and const 

const MY_CONST_ONE =(x)=> {
    if( x > 10) {
        var varIsFunctionScoped = "var is function scoped"
        console.log(`console log from inside block: ${varIsFunctionScoped} `) // var is function scoped
    }
    console.log(`console log from outside block: ${varIsFunctionScoped} `) // var is function scoped
}

MY_CONST_ONE(20) 

const MY_CONST_TWO =(x)=> {
    if( x > 10) {
        let letIsBlockScoped = "let is block scoped"
        console.log(`console log from inside block: ${letIsBlockScoped}`) // let is block scoped
    }
    console.log(`console log from outside block: ${letIsBlockScoped}`) // no print to console
}

MY_CONST_TWO(20) 

const MY_CONST_THREE =()=> {
    let a = 1 
    var b = 1
    const C = 1 

    console.log(a) // 1
    console.log(b) // 1
    console.log(C) // 1

    a = 2
    b = 2
    // C = 2 const cannot be re deffined 

    console.log(a) // 2
    console.log(b) // 2
    console.log(C) // 1

    // let a = 3 let cannot be re declared 
    var b = 3
    // const C = 3 const cannot be re declared 

    console.log(a) // 2
    console.log(b) // 3
    console.log(C) // 1

}

MY_CONST_THREE()

// code that demonstrates the difference between ++i and i++ 

let i = 1
console.log(i++) // 1
console.log(i) // 2

let j = 1
console.log(++j) // 2
console.log(j) // 2

// code that shows the usage of addition, subtraction, multiplication and modulus

let d = 10
let e = 5

console.log( d + e ) // 15
console.log( d - e ) // 5
console.log( d * e ) // 50
console.log( d / e ) // 2
console.log( d % e ) // 0


// code that shows compound assigment operator for at least four operations

let f = 20
let g = 10

f = g
console.log(f) // 10
f += g
console.log(f) // 20
f -= g
console.log(f) // 10
f *= g
console.log(f) // 100
f /= g
console.log(f) // 10
f %= g
console.log(f) // 0