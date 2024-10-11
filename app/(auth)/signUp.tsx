import DismissKeyboard from "@/components/shared/ui/DismissKeyboard";
import { Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  RegistrationInput,
  registrationValidationSchema,
} from "@/components/shared/type/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerInputs } from "@/components/shared/config/authConfig";
import Input from "@/components/shared/ui/Input/Input";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";
import { Link } from "expo-router";

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInput>({
    resolver: zodResolver(registrationValidationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationInput> = (data) => {
    console.log(data);
  };

  return (
    <DismissKeyboard>
      <View
        className={"flex justify-center items-center h-full w-full bg-primary"}
      >
        <Text className={"text-red-500 text-[30px] left-24 mb-[10px]"}>
          Sign up
        </Text>
        {registerInputs.map((item) => (
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                inputStyle={"w-[90%] mb-[10px]"}
                placeholder={item.placeholder}
                keyboardType={item.keyboardType}
                textAlign={"center"}
                onChangeText={onChange}
                value={value}
                errorMessage={errors[item.name]?.message}
              />
            )}
            name={item.name}
          />
        ))}
        <ButtonCustom
          onPress={handleSubmit(onSubmit)}
          buttonStyle={"w-[90%] h-[30px]"}
          textStyle={"text-[14px]"}
          text={"Login"}
        />
        <Text className={"text-white"}>
          If your dont have account:{" "}
          <Link className={"text-[20px] text-blue-support"} href={"/signIn"}>
            Sing in
          </Link>
        </Text>
      </View>
    </DismissKeyboard>
  );
};

export default SignUpPage;
