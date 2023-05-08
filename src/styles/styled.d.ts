import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      Background: string;

      Primary_100: string;
      Primary_200: string;
      Primary_300: string;
      Primary_400: string;
      Primary_500: string;
      Primary_600: string;
      Primary_700: string;
      Primary_800: string;
      Primary_900: string;
  
      Alert: string;
      Success: string;
  
      Info: string;
      
      Principal_001: string;
  
      Text_Primary: string;
      Text_Secondary: string;
  
      User_Type_1: string;
      User_Type_2: string;
    }
  }
};