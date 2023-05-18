import { TextInput } from "react-native-gesture-handler";
import { NotificationContentInput } from "expo-notifications";

export interface StylesNotificationBody extends NotificationContentInput {
    borderAlert?: boolean;
    lockIcon?: boolean;
    focus(): void;
    resetError(): void
  };