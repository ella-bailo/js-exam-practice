// pt 1

for (i = 0; i < 10; i++) {
    if (i === 5) {

    } else if (i === 7) {
        break;
    } else {
        console.log(i)
    }
};

i = 0;

while (i < 10) {
    i++;

    if (i === 5) {

    } else if (i === 7) {
        break;
    } else {
        console.log(i)
    }
};

i = 0;

do {
    i++;

    if (i === 5) {

    } else if (i === 7) {
        break;
    } else {
        console.log(i)
    }
} while (i < 10);

// pt 2

const people = [ 
    John = {name: 'John', favouriteColour: 'Blue', dob:'1988-02-14'},
    Mary = { name: 'Mary', favouriteColour: 'Red', dob:'1990-01-01'}, 
    Karen = { name: 'Karen', favouriteColour: 'Yellow', dob:'1974-07-26'}];

for (person of people){
    for (key in person){
        console.log(person[key])
    }
}
