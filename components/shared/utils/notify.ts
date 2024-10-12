import { Platform, ToastAndroid } from "react-native";

export const notifyMessage = (message: string) => {
  switch (Platform.OS) {
    case "android":
      ToastAndroid.show(message, ToastAndroid.LONG);
      break;
    /*case "ios":
      AlertIOS.alert(msg);
      break;*/
  }
};
