import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.Background};
    font-size: 14px;
    color: ${props => props.theme.colors.Text_Prymary};
    font-family: sans-serif;
  }
`;
