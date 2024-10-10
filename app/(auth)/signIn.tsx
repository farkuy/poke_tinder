import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Input from "@/components/shared/ui/Input/Input";
import DismissKeyboard from "@/components/shared/ui/DismissKeyboard";
import { useForm } from "react-hook-form";
import {
  LoginInput,
  loginValidationSchema,
} from "@/components/shared/type/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInPage = () => {
  const [mail, changeMail] = useState("");
  const [password, setPassword] = useState("");

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginValidationSchema),
  });

  return (
    <DismissKeyboard>
      <View
        className={"flex justify-center items-center h-full w-full bg-primary"}
      >
        <Text className={"text-amber-300 text-[30px] left-24 mb-[10px]"}>
          Sign in
        </Text>
        <Input
          inputStyle={"w-[90%] mb-[10px]"}
          placeholder={"Enter your email"}
          keyboardType={"email-address"}
          textAlign={"center"}
          onChangeText={changeMail}
          value={mail}
        />
        <Input
          inputStyle={"w-[90%] mb-[10px]"}
          placeholder={"Enter your password"}
          keyboardType={"visible-password"}
          textAlign={"center"}
          onChangeText={setPassword}
          value={password}
        />
        <Text className={"text-white"}>
          If your dont have account:{" "}
          <Link className={"text-[20px] text-blue-support"} href={"/signUp"}>
            Sing up
          </Link>
        </Text>
      </View>
    </DismissKeyboard>
  );
};

export default SignInPage;
