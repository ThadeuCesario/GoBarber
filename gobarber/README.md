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

const App: React.App = () => {
  return(
    < h1 >Hello World< h1 >
  )
}

</code>

