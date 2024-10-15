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
    setPoce(state, action: PayloadAction<IPoce[]>) {
      state.poce = action.payload;
    },
  },
});

export default poceSlice.reducer;
