import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NewCountries from '../components/Countries/NewCountries';
import store from '../redux/configureStore.js';

it('should render the NewCountry component Correctly', () => {
  const newCountries = render(
    <BrowserRouter>
      <Provider store={store}>
        <NewCountries />
      </Provider>
    </BrowserRouter>,
  );
  expect(newCountries).toMatchSnapshot();
});
