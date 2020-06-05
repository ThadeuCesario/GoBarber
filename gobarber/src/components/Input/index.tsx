/* Veja que estamos criando nosso próprio elemento input pois esse se repete diversas vezes em nossa aplicação.
*  Para definirmos a tipagem de nosso elemento, podemos extender os atributos do input padrão do HTML.
*
*
*
*/

import React, {InputHTMLAttributes} from 'react';

/* Import CSS*/
import {Container} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string; // O Atributo nome não é obrigatório para o input, porém para meu elemento estou colocando como obrigatório. (Estamos alterando)
}

const Input: React.FC<InputProps> = () => {
  return(
    <Container>
      <input type={'text'} />
    </Container>
  )
}

export default Input;
