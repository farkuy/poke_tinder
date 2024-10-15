import { AppDispatch } from "@/store/store";
import axios from "axios";
import { IPoke } from "@/components/shared/type/poke";

export const fetchPoke = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IPoke[]>(
      "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    );
    return response.data;
  } catch (e) {}
};
