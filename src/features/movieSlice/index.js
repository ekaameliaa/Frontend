import data from "../../utils/constants/data";

//import createSlice: untuk membuat slice
const { createSlice } = require("@reduxjs/toolkit");

/**
 * Buat slice: untuk menghasilkan action dan reduce
 * menerima param objek: name, intialStase, reduces
 */
const movieSlice = createSlice({
    name: "Movie Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action){
            state.movies.push(action.payload);
        },
        deleteMovie(){},
    },
})

/**
 * Slice: menghasilkan action dan reduces
 * nama action diambil dari nama reduces
 */
const movieReducer = movieSlice.reducer;
const { addMovie, deleteMovie } = movieSlice.actions;

//export reducer dan actions
export default movieReducer;
export { addMovie, deleteMovie };