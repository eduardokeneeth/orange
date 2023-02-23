import { configureStore } from '@reduxjs/toolkit';
import configurationReducer from './configuration/configurationSlice';
import weatherReducer from './weather/weatherSlice';

export const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
