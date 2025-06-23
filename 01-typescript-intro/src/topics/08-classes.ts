

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

// export class Hero extends Person {
    
//     public alterEgo: string;
//     public age: number;
//     public realName: string;

//     constructor( 
//         alterEgo: string, 
//         age: number, 
//         realName: string){
//         super( realName, 'New York' );
//         this.alterEgo = alterEgo;
//         this.age = age;
//         this.realName = realName;
//     }
// }
export class Hero {
    
    public alterEgo: string;
    public age: number;
    public realName: string;
    public person: Person;

    constructor( 
        alterEgo: string, 
        age: number, 
        realName: string,
        person: Person){

        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;

        this.person = person;
    }
}

const person = new Person('Tony Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', person);

console.log(ironman);
