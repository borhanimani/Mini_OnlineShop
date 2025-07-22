export async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
        throw new Error('Fetching Products Error');
    }

    const products = await response.json();
    return products
}

export async function fetchUser() {
    const response = await fetch('https://fakestoreapi.com/users/1');

    if (!response.ok) {
        throw new Error('Fetching Products Error');
    }

    const user = await response.json();
    return user;
}