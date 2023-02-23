import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Weather {
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const initialState: Weather = {
  city: window.localStorage.getItem('city') || '',
  temperature: Number(window.localStorage.getItem('temperature')) || 0,
  humidity: Number(window.localStorage.getItem('humidity')) || 0,
  windSpeed: Number(window.localStorage.getItem('windSpeed')) || 0,
};

export const weatherSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<Weather>) => {
      window.localStorage.setItem('city', action.payload.city);
      state.city = action.payload.city;

      window.localStorage.setItem(
        'temperature',
        action.payload.temperature.toString()
      );
      state.temperature = action.payload.temperature;

      window.localStorage.setItem(
        'humidity',
        action.payload.humidity.toString()
      );
      state.humidity = action.payload.humidity;

      window.localStorage.setItem(
        'windSpeed',
        action.payload.windSpeed.toString()
      );
      state.windSpeed = action.payload.windSpeed;
    },
  },
});

export const { changeCity } = weatherSlice.actions;

export default weatherSlice.reducer;
