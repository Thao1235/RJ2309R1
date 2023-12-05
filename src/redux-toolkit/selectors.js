import { createSelector } from "@reduxjs/toolkit"

export const productListSelector = (state) => state.productList.products
export const recommendedSelector = (state) => state.filters.recommended
export const colorSelector = (state) => state.filters.color
export const categorySelector = (state) => state.filters.category
export const priceSelector = (state) => state.filters.price
export const searchTextSelector = (state) => state.filters.searchText
export const cartSelector = (state) => state.cart

export const remainProducts = createSelector(
    productListSelector,
    searchTextSelector,
    recommendedSelector,
    colorSelector,
    categorySelector,
    priceSelector,
    (products, searchText, recommended, color, category, price) => {
        let queryProductList = [...products]
        if (searchText) {
            queryProductList = queryProductList.filter((p) => p.title.toLowerCase().includes(searchText.toLowerCase()))
        }
        if (recommended !== 'All') {
            queryProductList = queryProductList.filter((p) => p.company.toLowerCase().includes(recommended.toLowerCase()))
        }
        if (color !== 'All') {
            queryProductList = queryProductList.filter((p) => p.color.toLowerCase().includes(color.toLowerCase()))
        }
        if (category !== 'All') {
            queryProductList = queryProductList.filter((p) => p.category.toLowerCase().includes(category.toLowerCase()))
        }
        if (price !== '0,0') {
            const [min, max] = price.split(',')
            if (min !== max) {
                queryProductList = queryProductList.filter((p) => p.newPrice > Number (min) && p.newPrice <= Number(max))
            }
            else{
                queryProductList = queryProductList.filter((p) => p.newPrice > Number(min))
            }  
        }
        return queryProductList;
    }
)