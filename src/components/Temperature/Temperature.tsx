import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import windIcon from './../../assets/icons/wind.svg';
import humidityIcon from './../../assets/icons/dewpoint.svg';

const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}).format(new Date());

const getTemperature = (temperature: number, unit: string) => {
  if (unit === 'celsius') return temperature;
  return (temperature * 1.8 + 32).toFixed(1);
};

const Temperature = () => {
  const unit = useSelector((state: RootState) => state.configuration.unit);
  const { city, temperature, humidity, windSpeed } = useSelector(
    (state: RootState) => state.weather
  );

  return (
    <>
      {city && (
        <div className="mt-12 px-4 text-center">
          <h2 className="mb-2 text-3xl font-bold">{city}</h2>

          <span className="mx-auto inline-block rounded-2xl bg-orange-500 py-1 px-4 text-white">
            {formattedDate}
          </span>

          <span className="my-8 block text-9xl">
            {getTemperature(temperature, unit)}&deg;
          </span>

          <div className="bg mx-auto flex max-w-lg items-center justify-around rounded-xl bg-orange-400 p-6 text-white">
            <div>
              <img
                src={windIcon}
                className="mx-auto mb-2 w-14"
                alt="Wind Speed"
              />
              <span className="block text-xl font-bold">{windSpeed}km/h</span>
              Wind
            </div>
            <div>
              <img
                src={humidityIcon}
                className="mx-auto mb-2 w-14"
                alt="Humidity"
              />
              <span className="block text-xl font-bold">{humidity * 100}%</span>
              Humidity
            </div>
          </div>
        </div>
      )}

      {!city && (
        <div className="mt-8 px-4">
          <p className="text-md mx-auto w-56 rounded-xl bg-orange-400 p-4 text-center text-orange-800">
            Please search for a city and use the button to see the weather
            conditions.
          </p>
        </div>
      )}
    </>
  );
};

export default Temperature;
