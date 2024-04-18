import { createSlice } from "@reduxjs/toolkit";
import { TCategory } from "src/types/category";
import { TLoading } from "src/types/shared";

interface ICategoriesState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const Categrays_Slice = createSlice({
  name: "Categrays",
  initialState,
  reducers: {},
});

export default Categrays_Slice.reducer;
