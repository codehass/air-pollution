import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getCountries } from '../../redux/countries';
import './NewCountries.css';

const NewCountries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {countries.map((item) => (
          <div key={item.name.common} className="country">
            <div key={item.name.common} className="country-header">
              {' '}
              <Link to={`/country/${item.name.common}`}>
                {item.name.common}
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </Link>
              {' '}
            </div>

            <img src={item.flags.png} alt={name} />
            <div className="country-population">
              <p>Population :</p>
              <p>{item.population}</p>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default NewCountries;
