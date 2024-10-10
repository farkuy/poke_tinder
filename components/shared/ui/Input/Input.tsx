import React, { FC } from "react";
import { TextInput } from "react-native";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";

interface InputProps extends TextInputProps {
  loading?: boolean;
  inputStyle?: string;
}

const Input: FC<InputProps> = (props) => {
  const { loading, inputStyle = "", ...anyProps } = props;

  return (
    <TextInput
      textAlign={"center"}
      className={`w-full bg-gray-200 min-h-[45px] border-4 border-blue-support rounded-xl opacity-80 ${inputStyle}`}
      {...anyProps}
    />
  );
};
export default Input;
