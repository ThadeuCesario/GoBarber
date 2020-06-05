import React, {ButtonHTMLAttributes} from 'react';

/* Import CSS*/
import {Container} from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = () => {
    return(
      <Container>
        <button type={'button'}>Botão</button>
      </Container>
    )
}

export default Button;
