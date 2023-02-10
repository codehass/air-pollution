import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCountries } from '../../redux/countries';
import './CountyDetails.css';

// Pollution
import PollutionData from './PollutionData';

const CountyDetails = () => {
  const countries = useSelector((state) => state.countries);

  const { name } = useParams();

  useEffect(() => {
    getCountries();
  });

  const country = countries.find((country) => country.name.common === name);

  const countryData = {
    capital: country.capital[0],
    population: country.population,
    area: country.area,
    flag: country.flags.png,
    languages: country.languages.eng,
    lat: country.latlng[0],
    lon: country.latlng[1],
  };

  return (
    <div className="county-container">
      <div className="county-infos">
        <h1>{name}</h1>
        <img src={countryData.flag} alt={name} />
        <div className="item-info">
          <p>Capital </p>
          <p>
            {countryData.capital}
            {' '}
          </p>
        </div>
        <div className="item-info">
          <p>Population</p>
          <p>{countryData.population}</p>
        </div>
        <div className="item-info">
          <p>Area</p>
          <p>{countryData.area}</p>
        </div>
      </div>

      <PollutionData lat={countryData.lat} lon={countryData.lon} />
    </div>
  );
};

export default CountyDetails;
