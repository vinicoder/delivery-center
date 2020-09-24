import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Select from 'components/Form/Select';

describe('Component: Select', () => {
  it('should be able to render an select', () => {
    const { getByLabelText } = render(
      <Select
        name="test"
        label="Test"
        options={[{ value: 'Testevalue', label: 'Test Label' }]}
      />,
    );

    expect(getByLabelText('Test')).toBeTruthy();
  });

  it('should render highlight on select focus', async () => {
    const { getByLabelText } = render(
      <Select
        name="test"
        label="Test"
        options={[{ value: 'Testevalue', label: 'Test Label' }]}
      />,
    );

    const selectElement = getByLabelText('Test');

    selectElement.focus();

    await waitFor(() => {
      expect(selectElement).toHaveFocus();
    });
  });

  it('should render highlight on select blur', async () => {
    const { getByLabelText } = render(
      <Select
        name="test"
        label="Test"
        options={[{ value: 'Testevalue', label: 'Test Label' }]}
      />,
    );

    const selectElement = getByLabelText('Test');

    selectElement.focus();

    await waitFor(() => {
      expect(selectElement).toHaveFocus();
    });

    selectElement.blur();

    await waitFor(() => {
      expect(selectElement).not.toHaveFocus();
    });
  });
});
