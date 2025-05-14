import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './reducers/home/homeSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});

export default store;
