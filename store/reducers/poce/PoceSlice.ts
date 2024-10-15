import { IPoce } from "@/components/shared/type/poce";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PoceState {
  poce: IPoce[];
  isLoading: boolean;
  error: string;
}

const initialState: PoceState = {
  poce: [],
  isLoading: false,
  error: "",
};

export const poceSlice = createSlice({
  name: "poce",
  initialState,
  reducers: {
    poceFetching(state) {
      state.isLoading = true;
    },
    poceFetchingSuccess(state, action: PayloadAction<IPoce[]>) {
      state.isLoading = false;
      state.error = "";
      state.poce = action.payload;
    },
    poceFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default poceSlice.reducer;
