import { IUser } from "@/components/shared/type/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSlice {
  user: IUser;
  isLoading: boolean;
  error: string;
}
const initialState: UserSlice = {
  user: {
    id: "",
    email: "",
  },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
