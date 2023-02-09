import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

// Actions
const FETCH_COUNTRIES = 'countries/FETCH_COUNTRIES';

// API
const URL = 'https://restcountries.com/v3.1/region/africa';

const initialState = [];

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;

    default:
      return state;
  }
}

// Fetch Countries
export const getCountries = createAsyncThunk(
  FETCH_COUNTRIES,
  async (_, { dispatch }) => {
    const response = await Axios.get(URL);
    dispatch({
      type: FETCH_COUNTRIES,
      payload: response.data,
    });
  },
);
