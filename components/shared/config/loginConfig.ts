import { KeyboardTypeOptions } from "react-native";

type LoginInputName = "email" | "password";

interface IInput<TName> {
  name: TName;
  placeholder: string;
  keyboardType: KeyboardTypeOptions | undefined;
}

export const loginInputs: IInput<LoginInputName>[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    keyboardType: "email-address",
  },
  {
    name: "password",
    placeholder: "Enter your password",
    keyboardType: "visible-password",
  },
];
