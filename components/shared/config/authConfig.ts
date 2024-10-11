import { KeyboardTypeOptions } from "react-native";

type LoginInputName = "email" | "password";
type RegisterInputName = "email" | "password" | "passwordConfirm";

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

export const registerInputs: IInput<RegisterInputName>[] = [
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
  {
    name: "passwordConfirm",
    placeholder: "Confirm your password",
    keyboardType: "visible-password",
  },
];
