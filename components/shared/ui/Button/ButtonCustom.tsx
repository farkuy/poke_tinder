import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
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
      className={`flex justify-center items-center min-h-[40px] w-full px-4 bg-blue-support rounded-xl ${loading ? "opacity-50 disabled" : ""} ${buttonStyle}`}
      activeOpacity={0.7}
      disabled={loading}
      {...anyProps}
    >
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <Text className={`text-white text-xl ${textStyle}`}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCustom;
