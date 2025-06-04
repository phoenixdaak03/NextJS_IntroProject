import { NextRequest } from 'next/server';
import { products } from '@/app/product-data';

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
    '1': ['123', '234'],
    '2': ['345', '456'],
    '3': ['456'],
}

type Params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }){
    const userID = params.id;
    const productsIds = carts[userID];

    if (productsIds === undefined){
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    const cartProducts = productsIds.map(id => products.find(p => p.id === id));

    return new Response(JSON.stringify(cartProducts), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

type CartBody = { productID: string };

export async function POST(request: NextRequest, { params }: { params: Params }){
    const userID = params.id;
    const body: CartBody = await request.json();
    const productID = body.productID;

    carts[userID] = carts[userID] ? carts[userID].concat(productID) : [productID];
    const cartProducts = carts[userID].map(id => products.find(p => p.id === id));

    return new Response(JSON.stringify(cartProducts), {
        status: 201,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function DELETE(request: NextRequest, { params }: { params: Params }){
    const userID = params.id;
    const body= await request.json();
    const productID = body.productID; // getting the product id to del from cart

    carts[userID] = carts[userID] ? carts[userID].filter(id => id !== productID) : []; // make new instance of array without the deleted product
    
    const cartProducts = carts[userID].map(id => products.find(p => p.id === id)); // mapping the products of the cart
    
    return new Response(JSON.stringify(cartProducts),{
        status: 202,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}