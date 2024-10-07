import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";
import { router } from "expo-router";
import images from "../constants/image";

const StartPage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View
          className={
            "flex justify-center items-center h-full w-fulls bg-primary"
          }
        >
          <Text className={"flex text-blue-support"}>Start page</Text>
          <Image source={images.bulbasaur} resizeMode="contain" />
          <ButtonCustom
            text={"Войти в аккаунт"}
            onPress={() => router.push("/home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartPage;
