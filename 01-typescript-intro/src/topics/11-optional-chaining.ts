
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Sergio'
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Luis', 'Ana']
}

// Optional Chaining
const printChildrenNumber = ( passenger: Passenger ) => {
    const { name }  = passenger;
    const howManyChildren = passenger.children?.length ?? 0;

    console.log( name, howManyChildren );
}

// Non-Null Assertion Operator
const returnChildrenNumber = ( passenger: Passenger ): number => {
    const { name }  = passenger;

    if ( !passenger.children ) return 0;

    // ! is a non-null assertion operator
    const howManyChildren = passenger.children!.length;

    console.log( name, howManyChildren );
    return howManyChildren;
}

printChildrenNumber( passenger1 );
printChildrenNumber( passenger2 );

returnChildrenNumber( passenger2 );
returnChildrenNumber( passenger1 );




