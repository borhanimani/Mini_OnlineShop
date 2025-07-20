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

export type User = {
    id: number;
    name: { firstname: string, lastname: string };
    username: string;
    email: string;
    password: string;
}

export type Products = {
    list: Product[];
}

export type CategoryComponent = {
    list: string[];
    onCategoryChange: (value: string) => void;
}

export type SearchComponent = {
    onSearchChange: (value: string) => void;
}

export type UserModalComponent = {
    data: User;
    open: boolean;
    setOpen: () => void;
}

export type Filters = {
    list: string[];
    onCategoryChange: (value: string) => void;
    onSearchChange: (value: string) => void;
}

export type ProductArray = Product[];

export type CartItemArray = CartItem[];

export type CartStore = {
    list: CartItemArray;
    increaseItem: (id: number) => void;
    decreaseItem: (id: number) => void;
    addItem: (item: CartItem) => void;
    deleteItem: (id: number) => void;
}

export type tanstackProviderProps = {
    children: React.ReactNode;
}

export type UseQueryProduct = {
    data: ProductArray | undefined;
    isLoading: boolean;
    isError: boolean;
}

export type UseQueryUser = {
    data: User | undefined;
    isLoading: boolean;
    isError: boolean;
}

export const productList: Product[] = [
    { id: 1, title: 'Footbal Ball', description: '6 mini size blue/red', price: 12.33, category: 'Sport', image: "" },
    { id: 4, title: 'Tennis', description: '6 mini size blue/red', price: 12.33, category: 'Sport', image: "" },
    { id: 2, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 3, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 5, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 6, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 7, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 8, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 9, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 10, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 11, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 12, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 13, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 14, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 15, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },
    { id: 16, title: 'Sunglasses', description: 'UV sunglasses with golder frame', price: 34.50, category: 'Accessory', image: '' },

]