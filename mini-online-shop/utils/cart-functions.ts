import { CartItem, CartItemArray } from "./project-types";

export function getTotalPrice(list: CartItemArray): String {
    let totalPrice: number = 0;
    list.forEach(item => {
        totalPrice = totalPrice + (item.price * item.quantity);
    })
    return totalPrice.toFixed(2);
}

export function getItemTotalPrice(item: CartItem): number {
    return (item.price * item.quantity);
}