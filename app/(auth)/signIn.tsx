import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Input from "@/components/shared/ui/Input/Input";

const SignInPage = () => {
  const [mail, changeMail] = useState("");

  return (
    <View
      className={"flex justify-center items-center h-full w-full bg-primary"}
    >
      <Text>sign in</Text>
      <Input
        placeholder={"Enter your email"}
        keyboardType={"email-address"}
        textAlign={"center"}
        onChangeText={changeMail}
        value={mail}
      />
      <Link href={"/signUp"}>Sing up</Link>
    </View>
  );
};

export default SignInPage;
