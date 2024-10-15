import { AppDispatch } from "@/store/store";
import axios from "axios";
import { IPoce } from "@/components/shared/type/poce";

export const fetchPoce = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<IPoce[]>(
      "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    );
    return response.data;
  } catch (e) {}
};
