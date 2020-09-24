import React, { FormEvent, useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from 'hooks/AuthContext';

import figureSignin from 'assets/figure-signin.svg';
import logo from 'assets/logo.png';
import Input from 'components/Form/Input';
import Button from 'components/Button';

import { Container } from './styles';

interface DataParams {
  email: string;
  password: string;
}

interface FormEventData extends FormEvent<HTMLFormElement> {
  target: HTMLElement;
}

interface ErrorData {
  [index: string]: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [errors, setErrors] = useState<ErrorData>({});

  async function handleSubmit(event: FormEventData) {
    event.preventDefault();

    try {
      const form = event.target;

      const inputValue = (name: string) =>
        form.querySelector<HTMLInputElement>(`input[name=${name}]`)?.value ||
        '';

      const data: DataParams = {
        email: inputValue('email'),
        password: inputValue('password'),
      };

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: ErrorData = {};

        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        setErrors(validationErrors);
      }
    }
  }

  useEffect(() => {
    const body = document.querySelector('body');

    if (body) body.classList.add('signin');

    return () => {
      if (body) body.classList.remove('signin');
    };
  }, []);

  return (
    <Container>
      <div className="container">
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
                  error={errors.email}
                />
                <Input
                  className="input-control"
                  name="password"
                  type="password"
                  label="Senha"
                  error={errors.password}
                />
                <Button type="submit" icon={FiArrowRight} iconPosition="right">
                  Entrar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
