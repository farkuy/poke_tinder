import { Text, View } from "react-native";
import { Link } from "expo-router";
import Input from "@/components/shared/ui/Input/Input";
import DismissKeyboard from "@/components/shared/ui/DismissKeyboard";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  LoginInput,
  loginValidationSchema,
} from "@/components/shared/type/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonCustom from "@/components/shared/ui/Button/ButtonCustom";
import { loginInputs } from "@/components/shared/config/authConfig";
import { loginUser } from "@/lib/appwrite";
import { userSlice } from "@/store/reducers/user/UserSlice";
import { useAppDispatch } from "@/components/shared/hooks/redux";

const SignInPage = () => {
  const { setUserData } = userSlice.actions;
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const res = await loginUser(data.email, data.password);
      if (res)
        dispatch(
          setUserData({
            id: res.$id,
            email: res.providerUid,
          }),
        );
      console.log(res);

      //logout();
    } catch (e) {
      return e;
    }
  };

  return (
    <DismissKeyboard>
      <View
        className={"flex justify-center items-center h-full w-full bg-primary"}
      >
        <Text className={"text-amber-300 text-[30px] left-24 mb-[10px]"}>
          Sign in
        </Text>
        {loginInputs.map((item) => (
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
            key={item.name}
          />
        ))}
        <ButtonCustom
          onPress={handleSubmit(onSubmit)}
          buttonStyle={"w-[90%] h-[30px]"}
          textStyle={"text-[14px]"}
          text={"Login"}
        />
        <Text className={"text-white"}>
          If you dont have account:{" "}
          <Link className={"text-[20px] text-blue-support"} href={"/signUp"}>
            Sing up
          </Link>
        </Text>
      </View>
    </DismissKeyboard>
  );
};

export default SignInPage;
