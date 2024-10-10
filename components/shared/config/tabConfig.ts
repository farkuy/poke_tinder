import { ImageSourcePropType } from "react-native";
import icons from "@/constants/icons";

export interface ITab {
  title: string;
  name: string;
  icon: ImageSourcePropType;
}

export const tabConfig: ITab[] = [
  {
    name: "home",
    title: "Home",
    icon: icons.home,
  },
  {
    name: "tinder",
    title: "Tinder",
    icon: icons.search,
  },
];
