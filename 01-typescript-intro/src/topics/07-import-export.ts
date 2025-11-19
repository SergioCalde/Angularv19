import { type Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 200
    }
];

// Tax = 0.15
const [ total, taxAmount ] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total:', total);
console.log('Tax:', taxAmount);
