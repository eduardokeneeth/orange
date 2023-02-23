import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConfigurationState {
  unit: string;
}

const initialState: ConfigurationState = {
  unit: window.localStorage.getItem('unit') || 'celsius',
};

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {
    changeUnit: (state, action: PayloadAction<string>) => {
      window.localStorage.setItem('unit', action.payload);
      state.unit = action.payload;
    },
  },
});

export const { changeUnit } = configurationSlice.actions;

export default configurationSlice.reducer;
