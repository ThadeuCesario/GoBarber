/* Import libs*/
import React from 'react';
import {FiLogIn} from 'react-icons/fi';

/* Import CSS */
import {Container, Content, Background} from './styles';

/* Import Image */
import logoImg from '../../Assets/logo.svg';

/* Import Components */
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <Input name={'email'} type="text" placeholder={'E-mail'} />
          <Input name={'password'} type="password" placeholder={'Password'} />
          <Button type="submit"></Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background/>
    </Container>
  )
}

export default SignIn;
