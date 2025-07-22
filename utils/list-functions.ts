import { Product, ProductArray } from "./project-types";

export function getCategoryList(list: ProductArray): string[] {
    let categories: string[] = [];

    list.forEach(item => {
        if (!(categories.includes(item.category))) {
            categories.push(item.category);
        }
    });
    return categories;
}

export function filterList(list: ProductArray, category: string, searchText: string): ProductArray {
    let resultList: ProductArray = [];

    if (category) {
        const result: ProductArray = filterListByCategory(list, category);

        if (searchText) {
            resultList = filterListBySearchText(result, searchText);
        } else {
            resultList = result;
        }
        return resultList;
    }

    if (searchText) {
        resultList = filterListBySearchText(list, searchText);
    } else {
        resultList = list;
    }
    return resultList;
}

function filterListByCategory(list: ProductArray, category: string): ProductArray {
    const filteredList: ProductArray = list.filter(item => {
        return item.category.toLowerCase() === category.toLowerCase();
    });
    return filteredList;
}

function filterListBySearchText(list: ProductArray, searchText: string) {
    const filteredList: ProductArray = list.filter(item => {
        return item.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredList;
}