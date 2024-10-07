import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, ImageSourcePropType } from "react-native";
import icons from "../../constants/icons";

interface ITab {
  title: string;
  name: string;
  icon: ImageSourcePropType;
}

const tabConfig: ITab[] = [
  {
    name: "home",
    title: "Home",
    icon: icons.home,
  },
  {
    name: "tinder",
    title: "Tinder",
    icon: icons.search,
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      {tabConfig.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => <Image source={tab.icon} />,
          }}
        />
      ))}
    </Tabs>
  );
}
