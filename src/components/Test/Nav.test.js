import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../Nav';

test('Nav component matches snapshot', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
