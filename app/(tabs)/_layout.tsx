import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabIcon from "@/components/shared/ui/TabIcon/TabIcon";
import { Colors } from "@/constants/Colors";
import { tabConfig } from "@/components/shared/config/tabConfig";

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
          key={tab.name}
        />
      ))}
    </Tabs>
  );
}
