<h1>Projeto GoBarber</h1>
<hr/>
<em>Estou utilizando nesse projeto o ESLint, EditorConfig e Prettier.</em>
<br/>
<br/>
<h2>Anotações Gerais</h2>
<strong>react-scripts</strong>
<br/>
O <em>react-scripts</em> é uma dependência que vem instalada junto com o projeto,
e dentro dentro dela está toda a parte do webpack, babel e outras ferramentas
necessárias para compilar a aplicação.<br/>
Além disso, o webpack que vem importado dentro do <em>react-scripts</em>, já
vem configurado a importação de CSS e de imagens. Assim podemos focar mesmo
no código de nossa aplicação.
<br/><br/>
<strong>react-scripts eject</strong>
<br/>
Esse <em>react-scripts eject</em> importa todas as configurações do
webpack e do babel, para a raíz de nosso projeto. Assim, temos acesso
para modificar da maneira que quisermos.
<br/>Mas cuidado, após executar o <em>react-scripts eject</em>, não será
possível voltar para a estrutura original de pastas.
<br/><br/>
<strong>Outra forma de criar componente funcional</strong>
<br/>
Outra forma que podemos utilizar para criação de componentes fucionais é:
<br />
<code>
<pre>
const App: React.App = () => {
  return(
    < h1 >Hello World< h1 >
  )
}
</pre>
</code>
<br/>
<br/>
<hr/>
<h2>Passos do projeto</h2>
<strong>Estilos Globais</strong>
<br/>
Inicialmente vamos criar uma pasta para configurarmos os estilos globais
de nosso projeto. Isso nos ajudará quando desejarmos mudar de tema.
<br/> Por exemplo, um tema dark para a Black Friday.
<br/><br/>
<strong>Styled Components</strong>
<br/>
Estamos utilizando <em>styled-components</em> para montarmos o css
de nosso projeto.
<br/><br/><em>yarn add styled-components</em>
<br/><br/>
Precisamos também instalar as tipagens do styled-component também.
<br/><br/><em>yarn add @types/styled-components -D</em>
<br><br>
Um ponto de atenção é que ao utilizar os styles-components, precisamos
importar da seguinte forma nosso css.

import GlobalStyle from './styles/global';
<br><br>
Além disso, utilizando o styled-components, temos algumas vantagens.
Por exemplo:<br/>

Temos uma referência direta para nosso css global, utilizando
createGlobalStyle. Claro que depois precisamos importá-lo
em nosso arquivo principal e englobar o componente < App />.
<pre>
<code>
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;


/* App.tsx */

import React from 'react';

/* Style import */
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return(
    < >
      < h1 > Hello World < / h1 >
      < /GlobalStyle >
    < />
  );
};

export default App;

</code>
</pre>

<br/><br/>
<strong>react-icons</strong>
<br/>Uma dependência que podemos utilizar é a <em>react-icons</em>, que
nos permite aplicar uma série de ícones para nossa aplicação.
<br/> <em>react-icons/fi</em> é o diretório de ícones que estamos utilizando.

<br><br>
<strong>polished</strong><br/>
O polished é um dependência que podemos utilizar para tratarmos manipulação dar cores.
Por exemplo, o <em>shade</em> é uma ótima opção para trabalharmos com efeitos de hover.
