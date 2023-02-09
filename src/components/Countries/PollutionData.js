import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const PollutionData = ({ lat, lon }) => {
  const [capitalPollution, setCapitalPollution] = useState([]);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=daba7f2549a936e56abecf8ca198b26b`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const result = {
          main: json.list[0].main,
          components: json.list[0].components,
          dt: json.list[0].dt,
        };

        const PollutionData = {
          airQuality: result.main.aqi,
          ConcentrationOfCO: result.components.co,
          ConcentrationOfNO: result.components.no,
          ConcentrationOfNO2: result.components.no2,
          ConcentrationOfO3: result.components.o3,
          ConcentrationOfSO2: result.components.so2,
          ConcentrationOfPM2_5: result.components.pm2_5,
          ConcentrationOfPM10: result.components.pm10,
          ConcentrationOfNH3: result.components.nh3,
          date: result.dt,
        };
        setCapitalPollution(PollutionData);
        return PollutionData;
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, [lat, lon]);

  function airQuality() {
    if (capitalPollution.airQuality === 1) {
      return (
        <span
          style={{
            color: '#fff',
            background: '#21f00a',
            display: 'flex',
            justifyContent: 'start',
            borderRadius: '15px',
            paddingLeft: '10px',
          }}
        >
          Good
        </span>
      );
    }
    if (capitalPollution.airQuality === 2) {
      return (
        <span
          style={{
            width: '80%',
            color: '#fff',
            background: '#0f7a38',
            display: 'flex',
            justifyContent: 'start',
            borderRadius: '15px',
            paddingLeft: '10px',
          }}
        >
          Fair
        </span>
      );
    }
    if (capitalPollution.airQuality === 3) {
      return (
        <span
          style={{
            width: '60%',
            color: '#fff',
            background: '#abd611',
            display: 'flex',
            justifyContent: 'start',
            borderRadius: '15px',
            paddingLeft: '10px',
          }}
        >
          Moderate
        </span>
      );
    }
    if (capitalPollution.airQuality === 4) {
      return (
        <span
          style={{
            width: '40%',
            color: '#fff',
            background: '#d68e11',
            display: 'flex',
            justifyContent: 'start',
            borderRadius: '15px',
            paddingLeft: '10px',
          }}
        >
          Poor
        </span>
      );
    }
    if (capitalPollution.airQuality === 5) {
      return (
        <span
          style={{
            width: '20%',
            color: '#fff',
            background: '#d63c11',
            display: 'flex',
            justifyContent: 'start',
            borderRadius: '15px',
            paddingLeft: '10px',
          }}
        >
          V Poor
        </span>
      );
    }
    return 'Air Quality';
  }

  return (
    <div className="pollution-container">
      <h2>Air pollution </h2>
      <ul>
        <li>
          <div>
            <span>Air Quality:</span>
            <span className="percent">{airQuality()}</span>
            <span>
              {capitalPollution.airQuality}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span>Concentration of CO: </span>
            <span>
              {capitalPollution.ConcentrationOfCO}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span> Concentration of NO:</span>
            <span>
              {capitalPollution.ConcentrationOfNO}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span>Concentration of NO2: </span>
            <span>
              {' '}
              {capitalPollution.ConcentrationOfNO2}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span>Concentration of O3: </span>
            <span>
              {capitalPollution.ConcentrationOfO3}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          {' '}
          <div>
            <span>Concentration of SO2: </span>
            <span>
              {capitalPollution.ConcentrationOfSO2}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span> Concentration of PM2_5: </span>
            <span>
              {' '}
              {capitalPollution.ConcentrationOfPM2_5}
            </span>
          </div>
          {' '}
        </li>
        <li>
          {' '}
          <div>
            <span> Concentration of PM10:</span>
            <span>
              {capitalPollution.ConcentrationOfPM10}
              {' '}
            </span>
          </div>
          {' '}
        </li>
        <li>
          <div>
            <span>Concentration of NH3: </span>
            <span>
              {capitalPollution.ConcentrationOfNH3}
              {' '}
            </span>
          </div>
          {' '}
        </li>
      </ul>
    </div>
  );
};

PollutionData.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default PollutionData;
