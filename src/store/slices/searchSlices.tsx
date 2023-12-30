import { createSlice } from "@reduxjs/toolkit";

export interface ISearch {
  userName: string;
  pageNumber: number;
}

const initialState: ISearch = {
  userName: "",
  pageNumber: 1,
};

export const searchSlices = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchUser: (state, action) => {
      state.userName = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setSearchUser, setPageNumber } = searchSlices.actions;

export default searchSlices.reducer;
