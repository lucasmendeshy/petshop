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

## Usando uma api fake para simular processos de consumo de dados dinâmicos

### Instalação global do pacote json-server

`npm install -g json-server`

obs.: se tiver problemas ao executar, utilize o **node.js command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

É necessário criar um **arquivo.json** e, qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta raiz do petshop.). Este arquivodeve ser composto por um grande objeto contendo arrays com outros objetos.

### Executação do servidor da API

1. Usando de preferência o **Node.js command prompt**, acesse a pasta onde está o **nome-do-arquivo.json**
2. Execute o comando `json-server --watch nome-do-arquivo.json --port 2112`

obs.: O número da porta deve ser diferente de 3000 ( que é padrão no json-server) pois esta posta já estará sendo usada pelo **React**;

Dica: Np **package.json** do seu app adicione em `scripts` uma noma propriedade chamada `api` valendo `json-server --watc nome-do-arquivo.json --port 2112`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`.

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessível através da URL _localhost:porta/nome-do-end-point_.

Exemplos:
`http://localhost:2112/categorias`

`http://localhost:2112/posts`

`http://localhost:2112/contatos`

## React Hooks

Introduzidos na versão React 16.8, são funções que permitem manipular estados e outros recursos do React sem a necessidade de programar Classes. Hooks são funções que se conectam aos estados do React e aos recursos do ciclo de vida dos componentes da função. Não funcionam dentro de classes.

Mais informações: https://www.javatpoint.com/react-hooks

## useState

Função que retorna uma variável com o valor do estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.

## useEffect

Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.

Recebe dois parâmetros:

1º: função callback com o que será executado
2º: lista (array) de dependências que indicarão ao `useEffect` quando ele deverá funcionar
Se não passar a lista (ou seja, se deixar sem []), `useEffect` executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

Se passar a lista vazia (ou seja, deixar o [] vazio), `useEffect` executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.
