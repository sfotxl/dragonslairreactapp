import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../shared/PRODUCTS';

const initialState = {
    productsArray: PRODUCTS
};

const productsSlice = createSlice({
    name: 'products',
    initialState
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
    return state.products.productsArray;
};

export const selectProductById = (id) => (state) => {
    return state.products.productsArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const selectFeaturedCampsite = (state) => {
    return state.products.productsArray.find((product) => product.featured);
};