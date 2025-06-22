

export class Person {
    public name: string;
    private address: string;

    constructor(){
        this.name = 'Sergio';
        this.address = 'San Jose';
    }
}

const ironman = new Person();
console.log(ironman);

