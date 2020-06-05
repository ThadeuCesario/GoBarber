import React, {ButtonHTMLAttributes} from 'react';

/* Import CSS*/
import {Container} from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({children, ...rest}) => {
    return(
        <Container type={"button"} {...rest}>{children}</Container>
    )
}

export default Button;
