import { Keyboard, TouchableWithoutFeedback } from "react-native";
import React, { FC, ReactNode } from "react";

interface DismissKeyboardProps {
  children: ReactNode;
}

const DismissKeyboard: FC<DismissKeyboardProps> = (props) => {
  const { children } = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
