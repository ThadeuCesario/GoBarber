/* Import libs*/
import React from 'react';
import {FiLogIn} from 'react-icons/fi';

/* Import CSS */
import {Container, Content, Background} from './styles';

/* Import Image */
import logoImg from '../../Assets/logo.svg';

const SignIn: React.FC = () => {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder={'E-mail'} />
          <input type="password" placeholder={'Password'} />
          <button type="submit">Entrar</button>
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
