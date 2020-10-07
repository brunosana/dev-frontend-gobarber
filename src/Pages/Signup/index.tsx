import React from 'react';
import {
  FiLogIn, FiArrowLeft, FiUser, FiLock, FiMail,
} from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Logo" />
      <form>
        <h1>Faça seu Cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="bola/gato">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default Signup;
