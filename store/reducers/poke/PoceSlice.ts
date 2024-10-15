import { IPoke } from "@/components/shared/type/poke";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokeState {
  poke: IPoke[];
  isLoading: boolean;
  error: string;
}

const initialState: PokeState = {
  poke: [],
  isLoading: false,
  error: "",
};

export const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    pokeFetching(state) {
      state.isLoading = true;
    },
    pokeFetchingSuccess(state, action: PayloadAction<IPoke[]>) {
      state.isLoading = false;
      state.error = "";
      state.poke = action.payload;
    },
    pokeFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default pokeSlice.reducer;
