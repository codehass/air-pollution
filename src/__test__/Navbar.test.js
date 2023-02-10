import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';

it('should render the Navbar component Correctly', () => {
  const navbar = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  expect(navbar).toMatchSnapshot();
});
