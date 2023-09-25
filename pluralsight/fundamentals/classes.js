class employee {
    //private fields
    #firstname;
    #lastName;
    //constructor
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let employee1 = new employee('Sandeep', 'Dikshit');
console.log(employee1.toFullName());