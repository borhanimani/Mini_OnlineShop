export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

export type CartItem = {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    quantity: number;
}

export const productList: Product[] = [
    { id: 1, title: 'Footbal Ball', description: '6 mini size blue/red', price: 12.33, category: 'Sport', image: "" },
    { id: 2, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 3, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' }
]