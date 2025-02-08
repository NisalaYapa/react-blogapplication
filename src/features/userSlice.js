import {createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "name",
    initialState:{
        isSignedIn: false,
        userDate: null,
        searchInput: "tech",
        blogData: null,
    },

    reducers: {
        setSignedIn: (state, action) => {
            state.isSignedIn = action.payload;
        },

        setUserData: (state, action) => {
            state.userData 
        },

        setInput:(state, action) =>{
            state.searchInput = action.payload;
        },

        setBlogData: (state, action) => {
            state.blogData = action.payload
        }
    }
});

export const {
    setSignedIn,
    setUserData,
    setInput,
    setBlogData,
} = userSlice.actions;





