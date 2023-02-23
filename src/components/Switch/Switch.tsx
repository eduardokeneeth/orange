import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import { changeUnit } from '../../store/configuration/configurationSlice';

const Switch = () => {
  const dispatch = useAppDispatch();
  const unit = useSelector((state: RootState) => state.configuration.unit);

  return (
    <div>
      <form>
        <label
          className={`cursor-pointer ${
            unit === 'celsius'
              ? 'cursor-default font-bold opacity-100'
              : 'opacity-50'
          }`}
        >
          <input
            className="hidden"
            type="radio"
            value="celsius"
            checked={unit === 'celsius'}
            onChange={({ target }) => dispatch(changeUnit(target.value))}
          />
          C&deg;
        </label>
        {' | '}
        <label
          className={`cursor-pointer ${
            unit === 'fahrenheit'
              ? 'cursor-default font-bold opacity-100'
              : 'opacity-50'
          }`}
        >
          <input
            className="hidden"
            type="radio"
            value="fahrenheit"
            checked={unit === 'fahrenheit'}
            onChange={({ target }) => dispatch(changeUnit(target.value))}
          />
          F&deg;
        </label>
      </form>
    </div>
  );
};

export default Switch;
