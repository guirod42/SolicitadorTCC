import { TextInput } from "react-native-gesture-handler";

export interface TextInputProps extends TextInput  {
    borderAlert?: boolean;
    lockIcon?: boolean;
    focus(): void;
    resetError(): void
  };