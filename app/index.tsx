import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";
import { router } from "expo-router";
import { images } from "../constants/index";

const StartPage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          className={
            "flex justify-center items-center h-full w-fulls bg-primary"
          }
        >
          <Text className={"flex text-blue-support font-bold text-3xl"}>
            PokeTinder
          </Text>
          <View className={"flex flex-row relative"}>
            <Image
              source={images.bulbasaur}
              className={"max-w-[400px]"}
              resizeMode="contain"
            />
            <Image
              source={images.primape}
              className={"max-w-[150px] absolute top-[33%] left-1/2"}
              resizeMode="contain"
            />
          </View>
          <ButtonCustom text={"Login"} onPress={() => router.push("/home")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartPage;
