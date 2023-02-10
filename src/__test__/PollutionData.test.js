import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PollutionData from '../components/Countries/PollutionData';

it('should render the PollutionData component Correctly', () => {
  const pollutionData = render(
    <BrowserRouter>
      <PollutionData lat={51.5128} lon={-0.0918} />
    </BrowserRouter>,
  );
  expect(pollutionData).toMatchSnapshot();
});
