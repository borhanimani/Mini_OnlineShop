import { CartItemArray } from "./project-types";

export function getTotalPrice(list: CartItemArray): number {
    let totalPrice: number = 0;
    list.forEach(item => {
        totalPrice = totalPrice + (item.price * item.quantity);
    })
    return totalPrice;
}