let randomNumbers = [];

for (i=0; i < 10; i++) {
randomNumbers.push(Math.random())
}

randomNumbers.forEach(
    number => {
        console.log('\n')
        console.log(` number: ${number}`)
        console.log(` number rounded off: ${Math.round(number)}`)
        console.log(` number rounded up: ${Math.ceil(number)}`)
        console.log(` number rounded down: ${Math.floor(number)}`)
        console.log(` positive square root of number : ${Math.sqrt(number)}`)
        console.log(` number squared: ${Math.pow(number, 2)}`)
        console.log('\n')
    }
)


console.log(` Max out of the random numbers ${Math.max(...randomNumbers)}`)
console.log(` Min out of the random numbers ${Math.min(...randomNumbers)}`)