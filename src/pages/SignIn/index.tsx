import React, { FormEvent, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { useAuth } from 'hooks/AuthContext';

import figureSignin from 'assets/figure-signin.svg';
import logo from 'assets/logo.png';
import Input from 'components/Form/Input';
import Button from 'components/Button';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn({ email });
  }

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) body.classList.add('signin');

    return () => {
      if (body) body.classList.remove('signin');
    };
  }, []);

  return (
    <Container className="container">
      <div className="row">
        <div className="col">
          <img
            src={figureSignin}
            alt="Entregador segurando caixas para entregar"
            className="img-fluid"
            width={420}
            height={420}
          />
        </div>
        <div className="col">
          <img
            src={logo}
            alt="Logotipo da Delivery Center"
            width={219}
            height={49}
          />
          <div className="card">
            <h1>Entrar</h1>
            <p className="description">
              Entre com sua conta e admnistre os seus pedidos.
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                className="input-control"
                name="email"
                type="email"
                label="E-mail"
                onChange={({ target }) => setEmail(target.value)}
                required
              />
              <Input
                className="input-control"
                name="password"
                type="password"
                label="Senha"
                required
              />
              <Button type="submit" icon={FiArrowRight} iconPosition="right">
                Entrar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
