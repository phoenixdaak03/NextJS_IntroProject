import ShoppingCartList from "./ShoppingCartList";


export default async function CartPage(){
    const response = await fetch('https://vigilant-spoon-qrpqq9wr56vc44qv-3000.app.github.dev/api/users/2/cart', {
        cache: 'no-cache',
    }
    );
   const cartProducts = await response.json();

   return(
    <ShoppingCartList initialCartProducts={cartProducts}/>
   )
}