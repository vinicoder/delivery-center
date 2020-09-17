import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Input from 'components/Form/Input';

describe('Component: Input', () => {
  it('should be able to render an input', () => {
    const { getByLabelText } = render(<Input name="email" label="E-mail" />);

    expect(getByLabelText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByLabelText } = render(<Input name="email" label="E-mail" />);

    const inputElement = getByLabelText('E-mail');

    inputElement.focus();

    await waitFor(() => {
      expect(inputElement).toHaveFocus();
    });
  });

  it('should render highlight on input blur', async () => {
    const { getByLabelText } = render(<Input name="email" label="E-mail" />);

    const inputElement = getByLabelText('E-mail');

    inputElement.focus();

    await waitFor(() => {
      expect(inputElement).toHaveFocus();
    });

    inputElement.blur();

    await waitFor(() => {
      expect(inputElement).not.toHaveFocus();
    });
  });
});
