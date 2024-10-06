import { TouchableOpacity, View } from "react-native";
import { FC, ReactNode } from "react";
import { TouchableOpacityProps } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

interface ButtonCustomProps extends TouchableOpacityProps {
  children?: ReactNode;
  textStyle?: string;
  buttonStyle?: string;
}

const ButtonCustom: FC<ButtonCustomProps> = (props) => {
  const { children, textStyle, buttonStyle, ...anyProps } = props;
  return (
    <TouchableOpacity
      className={`flex justify-center items-center w-full py-8 px-4 bg-blue-support ${buttonStyle}`}
      {...anyProps}
    >
      <View className={`text-white ${textStyle}`}>{children}</View>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
