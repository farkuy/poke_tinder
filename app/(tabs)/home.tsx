import { StyleSheet, View, Text, Image } from "react-native";
import images from "../../constants/image";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Image source={images.bulbasaur} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
