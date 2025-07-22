import { create } from "zustand";
import { CartItem, CartItemArray, CartStore } from "@/utils/project-types";

export const useCartStore = create<CartStore>((set) => ({
    list: [],

    addItem: (item: CartItem) => set((state) => {
        const newList: CartItemArray = [...state.list];
        const targetProduct: CartItem | undefined = newList.find((product) => product.id === item.id);

        if (!targetProduct) {
            newList.push(item);
        } else {
            targetProduct.quantity++;
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
        const newList: CartItemArray = [...state.list];
        const targetProduct: CartItem | undefined = newList.find(product => product.id === id)

        if (!targetProduct) {
            return state
        }

        if (targetProduct.quantity > 1) {
            targetProduct.quantity--;
            return { list: newList }
        } else {
            return { list: newList.filter(product => product.id !== id) };
        }
    }),
}))

