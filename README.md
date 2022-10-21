# petshop

Projeto iniciado através do cra [`CRA - Create-react-app`] (https://github.com/facebook/create-react-app)

obs.: este projeto poderia ser criado também a partir do Vite.

## Execução do App

Na primeira vez, é necessário `npm install` para gerar node_modules (com dependências etc). E para executar, sempre use `npm start` e acesse `localhost:300` .

## Dica: desabilitar o Compact Folders do VSCode em Configurações/Settings.

## Sobre Módulos CSS

O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.

Arquivos de módulos devem ser nomeados como `Componente.module.css`.

A importação de módulos CSS deve ser feita com `import nome from caminho-do-modulo`.

## Sobre Media Query

### Mobile First:

Telas a partir de X tamanho (min-width)

### Desktop First

Telas a partir de X tamanho (max-width)

## Uso de rotas com a lib react-router-dom@5 (versão 5)

### instalação

`npm install react-router-dom@5`

### App.jsx

1.  Realizar a importação dos recursos da lib
    `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2.  Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3.  Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`

4.  Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca de componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

### Menu.jsx

1.  Importar o NavLink
    `import { NavLink } from "react-router-dom";`

2.  Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamando Caixa

Em vez de usar uma `div` em cada caixa agrupando conteúdo diferentes, isolamos ela num componente genérico que é o (caixa), aplicamos o CSS em uma única vez usando módulo do componente, e programos atavés de `props` o carregamento dinâmico do conteúdo (**children**) e de classes adicionais (**listaDeClasses**).

**Dica:** Você pode usar **Destructuring** de objetos nas `props`!
