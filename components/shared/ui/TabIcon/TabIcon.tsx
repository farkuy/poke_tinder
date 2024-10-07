import { Image, ImageSourcePropType, Text, View } from "react-native";

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = (props: TabIconProps) => {
  const { icon, color, name, focused } = props;

  return (
    <View className={"items-center justify-center gap-2"}>
      <Image
        source={icon}
        resizeMode="contain"
        className={"w-6 h-6"}
        tintColor={color}
      />
      <Text
        className={`${focused ? "font-psemibold text-blue-support" : "font-pregular text-white"} text-xs`}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
