function Person(firstName, lastName, dob, countryOfOrigin){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.countryOfOrigin = countryOfOrigin;
    this.fullName =()=>{
        return firstName + ' ' + lastName
    };
    this.age =()=>{
        let dateOfBirth = new Date(dob);
        let todaysDate = new Date();
        let approximateAge = todaysDate.getYear() - dateOfBirth.getYear(); 
        return approximateAge;
    };

}

const John = new Person('John', 'Doe', '1988-02-14', 'America');
const Mary = new Person('Mary', 'Smith', '1990-01-01', 'Germany');
const Karen = new Person('Karen', 'Martin', '1974-07-26', 'Wales');

console.log(Mary.fullName()) // Mary Smith
console.log(Mary.age()); // 31 (in 2021)
