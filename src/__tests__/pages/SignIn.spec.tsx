import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import SignIn from 'pages/SignIn';

describe('Page: SignIn', () => {
  it('should be able to sign in', () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    const emailField = getByLabelText('E-mail');
    const passwordField = getByLabelText('Senha');
    const buttonElement = getByText(
      (_, el) => el.getAttribute('type') === 'submit',
    );

    fireEvent.change(emailField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: 'secret' } });
    fireEvent.click(buttonElement);
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    const emailField = getByLabelText('E-mail');
    const passwordField = getByLabelText('Senha');
    const buttonElement = getByText(
      (_, el) => el.getAttribute('type') === 'submit',
    );

    fireEvent.change(emailField, { target: { value: 'wrong-email-format' } });
    fireEvent.change(passwordField, { target: { value: 'secret' } });

    await act(async () => {
      fireEvent.click(buttonElement);
    });
  });

  it('should not be able to sign in with empty credentials', async () => {
    const { getByLabelText, getByText } = render(<SignIn />);

    const emailField = getByLabelText('E-mail');
    const passwordField = getByLabelText('Senha');
    const buttonElement = getByText(
      (_, el) => el.getAttribute('type') === 'submit',
    );

    fireEvent.change(emailField, { target: { value: '' } });
    fireEvent.change(passwordField, { target: { value: '' } });

    await act(async () => {
      fireEvent.click(buttonElement);
    });
  });
});
