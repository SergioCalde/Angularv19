

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

export class Hero extends Person {
    
    public alterEgo: string;
    public age: number;
    public realName: string;

    constructor( 
        alterEgo: string, 
        age: number, 
        realName: string){
        super( realName, 'New York' );
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
}


const ironman = new Hero('Ironman', 45, 'Tony');

console.log(ironman);
