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