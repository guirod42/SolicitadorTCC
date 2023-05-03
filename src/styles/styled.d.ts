import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      Background: string;

      Primary_900: string;
      Primary_800: string;
      Primary_700: string;
  
      Info: string;
      Alert: string;
  
      Principal_001: string;
  
      Text_Prymary: string;
      Text_Secondary: string;
    }
  }
};