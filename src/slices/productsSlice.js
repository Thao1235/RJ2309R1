import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'productList',
    initialState: {
      status: 'idle',
      products: []
    },
    reducers: {
      // fetchProducts: (state, action) => {
      //   state = action.payload
      // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductThunkAction.pending, (state, action) => {
                state.status = 'loading'
            })  
            .addCase(fetchProductThunkAction.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload
            })  
    }
})

export const fetchProductThunkAction = createAsyncThunk('productList/fetchProductThunkAction', async() => {
    let productListRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
    let data = await productListRes.json()
    return data;
})

export default productsSlice;