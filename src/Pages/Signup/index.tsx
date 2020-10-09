import React from 'react';
import { Form } from '@unform/web';
import {
  FiLogIn, FiArrowLeft, FiUser, FiLock, FiMail,
} from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Logo" />
        <Form initialData={{ name: '' }} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="bola/gato">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default Signup;
