import { create } from "zustand";
import { CartItem, CartItemArray, CartStore } from "@/utils/project-types";

export const useCartStore = create<CartStore>((set) => ({
    list: [],

    addItem: (item: CartItem) => set((state) => {
        const newList = [...state.list];
        const targetList = newList.find((product) => product.id === item.id);

        if (!targetList) {
            newList.push(item);
        } else {
            targetList.quantity++;
        }

        return {
            list: newList
        };
    }),

    deleteItem: (id: number) => set((state) => ({
        list: state.list.filter((item) => { return item.id != id })
    })),

    increaseItem: (id: number) => set((state) => {
        const newList: CartItemArray = [...state.list];
        const targetProduct: CartItem | undefined = newList.find((product) => product.id === id);

        if (!targetProduct) {
            return state;
        }

        targetProduct.quantity++;
        return {
            list: newList
        };
    }),

    decreaseItem: (id: number) => set((state) => {
        const item: CartItem | undefined = state.list.find((theItem) => theItem.id == id);

        if (item) {
            if (item.quantity > 1) {
                return {
                    list: state.list.map((item) =>
                        item.id == id ? { ...item, quantity: item.quantity - 1 } : item
                    )
                }
            } else {
                return {
                    list: state.list.filter(item => item.id !== id)
                };
            }
        } else {
            return state;
        }
    }),
}))

