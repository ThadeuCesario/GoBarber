/* Veja que estamos criando nosso próprio elemento input pois esse se repete diversas vezes em nossa aplicação.
*  Para definirmos a tipagem de nosso elemento, podemos extender os atributos do input padrão do HTML.
*
*
*
*/

import React, {InputHTMLAttributes, useCallback, useEffect, useRef, useState} from 'react';
import {useField} from '@unform/core';
import {IconBaseProps} from 'react-icons';

/* Import CSS*/
import {Container} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string; // O Atributo nome não é obrigatório para o input, porém para meu elemento estou colocando como obrigatório. (Estamos alterando)
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<InputProps> = ({name, icon:Icon, ...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {fieldName, defaultValue, error, registerField} = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  },[])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if(inputRef.current?.value){
      /* Passamos o interrogação para caso o valor seja nulo.
       *  Então o campo é previamente verificado, antes de tentar acessar o atributo value.
       */
      setIsFilled(true);
    }
    else{
      setIsFilled(false);
    }
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return(
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon && <Icon size={20} />}
      <input {...rest} ref={inputRef} defaultValue={defaultValue} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
    </Container>
  )
}

export default Input;
