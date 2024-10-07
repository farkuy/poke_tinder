import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ImageSourcePropType } from "react-native";
import icons from "../../constants/icons";
import TabIcon from "@/components/shared/ui/TabIcon/TabIcon";
import { Colors } from "@/constants/Colors";

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
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      {tabConfig.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={tab.icon}
                name={tab.title}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
