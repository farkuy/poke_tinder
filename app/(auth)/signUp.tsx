import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const SignUpPage = () => {
  const [mail, changeMail] = useState("");

  return (
    <View
      className={"flex justify-center items-center h-full w-full bg-primary"}
    >
      <Text>Sign up</Text>
      <TextInput onChangeText={changeMail} value={mail} />
      <Link href={"/signIn"}>Sing in</Link>
    </View>
  );
};

export default SignUpPage;
