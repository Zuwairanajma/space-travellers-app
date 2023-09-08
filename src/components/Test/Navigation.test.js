import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigations from '../Navigation';

test('Navigations component matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Navigations />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
