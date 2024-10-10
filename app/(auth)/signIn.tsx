import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";
import Input from "@/components/shared/ui/Input/Input";
import DismissKeyboard from "@/components/shared/ui/DismissKeyboard";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  LoginInput,
  loginValidationSchema,
} from "@/components/shared/type/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";

const SignInPage = () => {
  const [mail, changeMail] = useState("");
  const [password, setPassword] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
  };

  return (
    <DismissKeyboard>
      <View
        className={"flex justify-center items-center h-full w-full bg-primary"}
      >
        <Text className={"text-amber-300 text-[30px] left-24 mb-[10px]"}>
          Sign in
        </Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              inputStyle={"w-[90%] mb-[10px]"}
              placeholder={"Enter your email"}
              keyboardType={"email-address"}
              textAlign={"center"}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              inputStyle={"w-[90%] mb-[10px]"}
              placeholder={"Enter your password"}
              keyboardType={"visible-password"}
              textAlign={"center"}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
          name="password"
        />
        <ButtonCustom
          onPress={handleSubmit(onSubmit)}
          buttonStyle={"w-[90%] h-[30px]"}
          textStyle={"text-[14px]"}
          text={"Login"}
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
