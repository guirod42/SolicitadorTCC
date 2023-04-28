import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home'
import light from './src/theme/light';
import dark from './src/theme/dark';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Home />
    </ThemeProvider>
  );
}