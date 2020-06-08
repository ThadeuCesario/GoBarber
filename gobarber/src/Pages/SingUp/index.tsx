/* Import libs*/
import React from 'react';
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi';

/* Import CSS */
import {Container, Content, Background} from './styles';

/* Import Image */
import logoImg from '../../Assets/logo.svg';

/* Import Components */
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp: React.FC = () => {
  return(
    <Container>
      <Background/>
      <Content>
        <img src={logoImg} alt="Logo GoBarber" />
        <form>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name={'name'} placeholder={'Nome'}/>
          <Input icon={FiMail} name={'email'} type="text" placeholder={'E-mail'} />
          <Input icon={FiLock} name={'password'} type={'password'} placeholder={'Senha'}/>


          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="login">
          <FiArrowLeft />
          Voltar parar Logon
        </a>
      </Content>
    </Container>
  )
}

export default SignUp;
