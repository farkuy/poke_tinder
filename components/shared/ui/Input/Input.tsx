import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";
import { TextInputProps } from "react-native/Libraries/Components/TextInput/TextInput";
import { FC } from "react";

interface InputProps extends TextInputProps {
  loading?: boolean;
  inputStyle?: string;
}

const Input: FC<InputProps> = (props) => {
  const { loading, inputStyle, ...anyProps } = props;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInput
        textAlign={"center"}
        className={"w-full bg-red-700"}
        {...anyProps}
      />
    </TouchableWithoutFeedback>
  );
};

export default Input;
