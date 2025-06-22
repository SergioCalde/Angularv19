/*
    ===== TypeScript Code =====
    Homework: Create a super hero interface
*/

// --------------------- Homework solution ---------------------

interface Address {
    street: string;
    country: string;
    city: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress(): string;
}
// --------------------- Finish Solution ---------------------


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress(): string {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );


export {};