npm install -g explo-cli
npm install --global yarn

expo init SolicitadorTCC
npm yarn start

atualizar versão do node.js
verificar versão: node -v
v18.16.0

- Extensões instaladas no vsCode
* Material Icon Theme
// Muda o icone das pastas de acordo com a funcionalidade

* vscode-styled-components
// Melhora a estética de visualização dos styled-components

* Color Highlight
// Renderiza as cores pelo valor hexadecimal


- separação de pastas
- criacao dos primeiros arquivos base

npx expo install react@18.2.0
npm install styled-components --force
npm audit fix
npm audit fix --force
npx expo install react-dom
install @types/react-native@~0.69.1
npx expo install react@18.0.0 react-native@0.69.9

- importar styled-components no arquivo styles.ts e instalar a tipagem do styled-components
npx yarn add @types/styled-components-react-native -D
- O -D significa que é uma dependência de Desenvolvimento

- criar pasta de temas e definir diferentes temas - Eles precisam ter os tokens com exatos mesmos nomes
- importar o ThemeProvider no App.tsx para que o tema possa ser aplicado
- importar os temas no App.tsx e aplicar um deles
- alterar o arquivo de tipagem styled.d.ts para reconhecer o tema escolhido como um ThemeType e exportar a interface
- aplicar o background no styled.ts com a cor do tema "background"

git status
git add .
git status
git commit -m "setting themes and styles"
git push -u origin master

-- ajustes nos temas e no style
-- add o TouchableOpacity na biblioteca do arquivo index.d.ts dentro da node_modules/@types/styled-components-react-native/index.d.ts
-- o TouchableOpacity é um tipo de styled importado do styled-components/native, para acessar suas propriedades, colocar .attrs({ propriedade: valor})

-- criar uma variável exportável type dentro de styles.ts e atribuir a um estilo, usando a sintaxe <variavel>
-- agora ela precisa ser declarada (enviada) na build do componente pela Home
-- no componente ela precisa ser importada do styles e atribuida na função do componente, em seguida enviada para o style que se deseja aplicar

-- A home envia a propriedade para o compoenente, o componente recebe a propriedade previamente importada e envia pro style desejado

-- importar o css dentro do styles.ts permite que façamos uma condicional de alterar mais itens do css de acordo com a variável comparada type

git status
git add .
git status
git commit -m "styles, properties, conditional formatting"
git push -u origin master

-- FlatList com condicionais
-- No estilo da Home, criar um componente List do tipo FlatList e Importar este na Home
-- Na Home, dentro da FlatList importada com nome de List, enviar os parâmetros
<List
	data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
	keyExtractor={item => item}
	renderItem={() => <Professor type="primary" />}
	numColumns={2}
>

-- Para fazer a tipagem da FlatList, dentro do styles.ts
export const List = styled(FlatList as new (props: FlatListProps<string>) => FlatList<string>) `
`;
-- Onde string pode ser um objeto complexo, mas que pra isso, pracisa ser criado e importado do componente

-- FlatList renderizada

git status
git add .
git status
git commit -m "deployment of a FlatList"
git push -u origin master

-- Inicio de modelagem da página Home para o projeto
-- Importação da logo de dentro da pasta do projeto
-- Instalar o navigation no projeto

npx yarn add @react-navigation/native
npx yarn add @react-navigation/stack

-- Ajuste de pacotes e dendências para uso futuro: package.json

  "dependencies": {
    "@expo/webpack-config": "^0.17.0",
    "@react-native-async-storage/async-storage": "1.17.11",
    "@react-native-picker/picker": "2.4.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/stack": "^6.3.16",
    "@types/react-native": "~0.69.1",
    "axios": "^1.3.4",
    "expo": "^46.0.21",
    "expo-status-bar": "~1.4.4",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "react-native": "0.69.9",
    "react-native-gesture-handler": "~2.5.0",
    "react-native-safe-area-context": "4.3.1",
    "react-native-web": "~0.18.11",
    "styled-components": "^5.3.10"
  },
  
-- Formatação base do arquivo App.tsx PARA funcionar:
NavigationContainer, o ThemeProvider, e o Stack.Navigator com importação da página Home

npx expo install react-native-screens@~3.15.0
npx yarn add @expo/vector-icons@13.0.0
npx yarn add @types/vector-icons
npx yarn add @types/react-native-vector-icons

-- Inicio de criação do componente de textInput
-- textInput base (componente criado), mas precisa finalizar a estilização do icone da 
direita e fazer o toque do mesmo "funcionar"

git status
git add .
git status
git commit -m "home and input design"
git push -u origin master

-- Refatorando os inputs
-- importar nova biblioteca de icones

npx yarn add react-native-vector-icons 

-- Ajustado o componente de textInput
-- Criar o alert no topo da tela, importar o useDispatch e o showToast na Home
-- Botão criado, com definição de cor e funcionalidade de click
-- Botão aceita os icones da biblioteca

npm install -g dts-gen

git status
git add .
git status
git commit -m "home and input design pt2"
git push -u origin master

-- Criação das rotas das páginas, ajustes de layout

git status
git add .
git status
git commit -m "route creation, layout adjustments"
git push -u origin master

-- Pacote do switch
npx yarn add react-switch

-- Ajustes da tematização e tipagem ts na pasta styles

-- Pacotes de alerta
npx yarn add expo-device
npx yarn add expo-notifications
npx yarn add expo-device@~4.3.0 expo-notifications@~0.16.1

-- Correções de tipagem dos inputs {deu erro}

git status
git add .
git status
git commit -m "lesson applications and corretions in Input"
git push -u origin master

-- Correções diversas de tipagem e incompatibilidade com a biblioteca 
import { dtsGenerator } from 'dts-gen';

-- Usando agora a biblioteca própria do react
const userInput = React.createRef<StyledTextInputProps>();

git status
git add .
git status
git commit -m "bug fix in inputs"
git push -u origin master