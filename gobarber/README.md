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

<br><br>
<strong>Criando componente Input</strong>
Após análise de nossa aplicação, podemos ver que nosso input de login, aparece
diversas vezes em nossa aplicação. Portanto o ideal é criar um componente global,
para que seja utilizado de forma geral.
<br>
Entretanto ao fazermos isso, precisamos declarar quais atributos nosso componente
estará herdando. Veja o código abaixo:

<code>
<pre>

import React, {InputHTMLAttributes} from 'react';


import {Container} from "./styles";

interface InputProps extends InputHTMLAttributes< HTMLInputElement >{
  name: string;
}

const Input: React.FC< InputProps > = () => {
  return(
    < Container >
      <input type={'text'} />
    < /Container >
  )
}

export default Input;


</pre>
</code>
Com o código anterior temos todas as propriedades que um input padrão recebe.
Além disso, forçamos para que o 'name' seja obrigatório.
Veja que importei de dentro do react, todos os atributos do input do HTML.
Ainda assim preciso extender o código na nossa tipagem e após a tipagem estar
criada, precisamos declarar em nosso componente funcional.
<br><br>

Como disse, no componente Input eu sobreescrevi um atributo padrão do Input.
Porém quando não precisamos sobreescrever nada, temos uma forma mais reduzida de aplicarmos
nossa tipagem.<br>
Veja:
<br>
<code>
type ButtonProps = ButtonHTMLAttributes< HTMLButtonElement >;
</code>

O código acima é uma interface sem nenhum atributo além dos que são padrões
do proprio button extendido do HTML.
Então, basta importarmos do React o atributo do button e tipá-lo como HTMLButtonElement.
Feito isso, como não vamos alterar nada podemos criar um <em>type</em>.

<br/><br/>
<strong>unform (criado pela Rocketseat)</strong><br/>
No início, estavamos trabalhando com formulários seguindo um estado para cada input. Mas se lembrarmos o conceito
de estados, sabemos que a cada atualização do estado, o componente que armazena aquele estado é atualizado.
Isso acaba desgastando a performance de nossa aplicação.
<br/>
Para trabalharmos com formulário de uma forma melhor, vamos utilizar uma lib criada pela propria RocketSeat que é o unform.
<br/>
Execute os seguintes comandos:
<br/><br/>
<code>yarn add @unform/core @unform/web</code>
<br/><br/>
Feito, isso basta importarmos de dentro de '@unform/web' o 'Form' e trocar nosso form tradicional do HTML, por esse form que
importamos.<br/>
Será necessário passar em seguida uma função de onSubmit={}, dentro do componente de < Form >.
<br/>
Porém previamente, precisamos informar para o unform, quais campos, desejamos que ele monitore o valor. Caso contrário
o retorno será sempre um objeto vazio. (Conhecido dentro dessa biblioteca, como registro, ou seja, estou fazendo
o registro dos campos.) [Veja o componente de Input para obter mais detalhes.].

<hr/>
<strong>ref</strong>
<br/>
Utilizamos ref dentro do React para que o React consiga acessar diretamente um elemento,
como se fosse um 'document.getElementById'.
Mas dentro do React criamos esse Ref.
<br/>
Para criar uma Ref é muito simples. Basta importar dentro de React o 'useRef', em seguida declaramos
dentro de nosso componente esse Ref com algum valor inicial (pode ser null), depois basta inserir no elemento
que desejarmos o seguinte: <code>ref={nomeDaConstDeRef}</code>. Veja o código do componente input.
<hr/>
<strong>useCallback</strong><br/>
Esse Hook é uma forma de criarmos funções dentro de nosso componente que não são recriadas na memória, toda vez que
aquele componente atualiza. Elas ficam salvas na memória e podemos informar os momentos que elas devem ser alteradas.
<br/>
Veja o código abaixo é a forma que podemos definir uma função de callBack.
Veja que semelhante ao Hook de useEffect, ela também recebe um segundo parâmetro que informamos, quando essa função
deverá ser recriada.
<br/>
Quando passamos como vazio, significa que ela nunca deverá ser recriada.
<code>
<pre>
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
</pre>
</code>
<hr/>
<strong>Yup</strong>
<br/>
Biblioteca para validação de formulários. <br/>
<code>
yarn add yup
</code>
<br/>
Um ponto importante, é que o Yup possui uma configuração por padrão, que
para no primeiro erro encontrado. Para não termos esse comportamento,
dentro do schema valitador, precisamos passar a seguinte
configuração:
<code>
<pre>
await schema.validate(data, {
        abortEarly: false,
      });
</pre>
</code>
<br/>
Com o abortEarly configurado para false, não será interrompido o processo
logo ao primeiro erro.
<hr/>
<strong>Trabalhando com erros no formulário - utilizando o unform</strong>
<p>
Primeiramente precisaremos utilizar o conceito de ref, para o formulário.
Portanto, podemos utilizar o <strong>useRef</strong> e referenciar em nosso,
formulário.
<br/>
Fazendo isso, teremos acesso em algumas funções que são:
</p>
<ul>
<li>clearField</li>
<li>getData</li>
<li>getErrors</li>
<li>getFieldError</li>
<li>getFieldRef</li>
<li>getFieldValue</li>
<li>reset</li>
<li>setData</li>
<li>setErrors</li>
<li>setFieldError</li>
<li>setFieldValue</li>
<li>submitForm</li>
</ul>

<strong>
Porém antes de utilizarmos essas funções, precisamos importar de dentro do '@unform/core',
o FormHandles.<br/>
Esse FormHandles, é uma interface que contem a tipagem de todas as funções que listamos.
Portanto, basta passar a formHandles que importamos como parametro da nossa Ref.
</strong>
<hr/>
<strong>Context API</strong>
<p>
Como conseguimos passar a informação que está armazenada em um componente para outro componente?
<strong>utilizando o context api =D</strong>
</p>
<p>
O contexto é basicamente uma variável que ficará acessível de forma global ou não global. Podemos escolher o local que ela ficará acessível dentro de nossa aplicação.
</p>

A função mais importante do AuthContext é o Provider, que englobamos com os componentes que queremos que tenham acesso em nossa aplicação.
<br/>
Portanto se queremos que nossa aplicação inteira tenha acesso em um determinado contexto. Basta colocar por volta de todo o App.
<hr/>
<strong>Mais sobre contexto</strong>
<p>
Podemos definir métodos que fiquem acessíveis de forma global em nossa aplicação.
<br/><br/>
Por exemplo o método de logout.<br/><br/>
Portanto, todos esses métodos de login, logout, cadastro. Vão ficar em um contexto geral de nossa aplicação. Dessa forma, não vamos precisar repetir esses códigos e vamos manter um bom isolamento.
</p>
