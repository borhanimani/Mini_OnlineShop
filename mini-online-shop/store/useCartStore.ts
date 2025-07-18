import { create } from "zustand";
import { CartItem, CartStore } from "@/utils/project-types";

export const useCartStore = create<CartStore>((set) => ({
    list: [],
    addItem: (item: CartItem) => set((state) => ({
        list: [...state.list, item]
    })),

    deleteItem: (id: number) => set((state) => ({
        list: state.list.filter((item) => { return item.id != id })
    })),

    increaseItem: (id: number) => set((state) => ({
        list: state.list.map((item) =>
            item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        )
    })),

    decreaseItem: (id: number) => set((state) => ({
        list: state.list.map((item) =>
            item.id == id ? { ...item, quantity: item.quantity - 1 } : item
        )
    })),
}))

