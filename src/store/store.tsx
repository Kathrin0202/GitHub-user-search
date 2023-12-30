import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlices";
import searchReducer from "./slices/searchSlices";
import { useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;