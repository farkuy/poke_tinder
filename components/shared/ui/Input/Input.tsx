import React, { FC } from "react";
import { TextInput, Text } from "react-native";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";

interface InputProps extends TextInputProps {
  loading?: boolean;
  inputStyle?: string;
  errorMessage?: string;
}

const Input: FC<InputProps> = (props) => {
  const { loading, inputStyle = "", errorMessage = "", ...anyProps } = props;

  return (
    <>
      <TextInput
        textAlign={"center"}
        className={`w-full bg-gray-200 min-h-[45px] border-4 border-blue-support rounded-xl opacity-80 ${inputStyle}`}
        {...anyProps}
      />
      {errorMessage && (
        <Text className={"text-red-500 mb-2"}>{errorMessage}</Text>
      )}
    </>
  );
};
export default Input;
