import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGPTSearch: false,
        showSearchedMoviesList:null
    },
    reducers:{
        toggleSearchView(state,action){
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult(state,action){
            state.showSearchedMoviesList = action.payload
        }
    }
});
export const { toggleSearchView,addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;