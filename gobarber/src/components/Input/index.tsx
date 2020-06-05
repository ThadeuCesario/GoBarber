/* Veja que estamos criando nosso próprio elemento input pois esse se repete diversas vezes em nossa aplicação.
*  Para definirmos a tipagem de nosso elemento, podemos extender os atributos do input padrão do HTML.
*
*
*
*/

import React, {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons';

/* Import CSS*/
import {Container} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string; // O Atributo nome não é obrigatório para o input, porém para meu elemento estou colocando como obrigatório. (Estamos alterando)
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({icon:Icon, ...rest}) => {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  )
}

export default Input;
