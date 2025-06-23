

export class Person {
    public name: string;
    private address: string;

    constructor( name: string, address: string ){
        this.name = name;
        this.address = address;
    }

    // constructor(
    //     public name: string,
    //     public address: string
    // ){}

}

const ironman = new Person('Ironman', 'New York');
console.log(ironman);
