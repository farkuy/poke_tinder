import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";

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
          <ButtonCustom text={"Авторизироваться"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StartPage;
