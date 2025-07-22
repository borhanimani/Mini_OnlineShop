import { create } from "zustand";
import { CartItem, CartStore } from "@/utils/project-types";

export const useCartStore = create<CartStore>((set) => ({
    list: [],

    addItem: (item: CartItem) => set((state) => {
        if (state.list.some(theItem => theItem.id == item.id)) {
            return {
                list: state.list.map(theItem =>
                    theItem.id == item.id ? { ...theItem, quantity: theItem.quantity + 1 } : theItem
                )
            };
        } else {
            return {
                list: [...state.list, item]
            };
        }
    }),

    deleteItem: (id: number) => set((state) => ({
        list: state.list.filter((item) => { return item.id != id })
    })),

    increaseItem: (id: number) => set((state) => {
        const item: CartItem | undefined = state.list.find((theItem) => theItem.id == id);

        if (item) {
            if (item.quantity < 10) {
                return {
                    list: state.list.map((item) =>
                        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                }
            } else {
                return state;
            }
        } else {
            return state;
        }
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

