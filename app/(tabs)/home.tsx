import { Text, View } from "react-native";
import { useAppSelector } from "@/components/shared/hooks/redux";

const HomePage = () => {
  const { user } = useAppSelector((state) => state.userReducer);
  return (
    <View
      className={"flex justify-center items-center h-full w-fulls bg-primary"}
    >
      <Text>{user.email}</Text>
    </View>
  );
};

export default HomePage;
