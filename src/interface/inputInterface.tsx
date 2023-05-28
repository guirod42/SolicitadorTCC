import { NotificationContentInput } from "expo-notifications";

export interface StyledNotificationBody extends NotificationContentInput {
    borderAlert?: boolean;
    lockIcon?: boolean;
    focus(): void;
    resetError(): void
  };