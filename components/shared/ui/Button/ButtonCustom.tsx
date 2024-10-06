import { Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

interface ButtonCustomProps extends TouchableOpacityProps {
  text: string;
  textStyle?: string;
  buttonStyle?: string;
  loading?: boolean;
}

const ButtonCustom: FC<ButtonCustomProps> = (props) => {
  const { text, textStyle, buttonStyle, loading, ...anyProps } = props;
  return (
    <TouchableOpacity
      className={`flex justify-center items-center w-full py-8 px-4 bg-blue-support ${loading ? "opacity-50 disabled" : ""} ${buttonStyle}`}
      {...anyProps}
    >
      <Text className={`text-white ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
