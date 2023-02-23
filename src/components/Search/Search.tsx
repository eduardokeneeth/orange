import React, { FormEvent, useState } from 'react';
import Select from 'react-select';
import { useAppDispatch } from '../../store/hooks';
import { changeCity } from '../../store/weather/weatherSlice';
import weatherData from '../../utils/weatherData';
import searchIcon from './../../assets/icons/search.svg';

type MyOption = {
  label: string;
  value: string;
};

const options = Object.keys(weatherData).map((city) => {
  return {
    label: city,
    value: city,
  };
});

const Search = () => {
  const dispatch = useAppDispatch();

  const [city, setCity] = useState('');
  const handleChangeCity = (option: MyOption | null) => {
    if (option) {
      setCity(option.value);
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      city,
      ...weatherData[city as keyof typeof weatherData],
    };
    dispatch(changeCity(payload));
  };

  return (
    <div className="mt-4 px-4">
      <form
        className="flex items-center justify-between rounded-xl"
        onSubmit={handleSearch}
      >
        <Select
          className="w-full"
          options={options}
          placeholder="Search city..."
          components={{
            DropdownIndicator: null,
            IndicatorSeparator: null,
          }}
          onChange={handleChangeCity}
        />
        <button className="w-10 rounded-lg bg-orange-500 p-2" title="Search">
          <img src={searchIcon} alt="Search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
