
export function whatsMyType<T>( argument: T ): T{
    return argument;
}

const amIString = whatsMyType<string>( 'Hello World!!' );
const amINumber = whatsMyType<number>( 123 );
const amIArray = whatsMyType<number[]>( [1, 2, 3, 4, 5] );
// const amIBoolean = whatsMyType( true );

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );




