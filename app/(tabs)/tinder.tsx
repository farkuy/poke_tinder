import { Image, Text, View } from "react-native";
import images from "@/constants/image";

const TinderPage = () => {
  return (
    <View className={""}>
      <Text>TinderPage</Text>
      <Image source={images.bulbasaur} resizeMode="contain" />
    </View>
  );
};

export default TinderPage;
