import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './reducers/about/aboutSlice';
import adminReducer from './reducers/admin/adminSlice';
import homePageReducer from './reducers/homePage/homeSlice';
import gallerysReducer from './reducers/gallerys/gallerysSlice';
import newsPageReducer from './reducers/newsPage/newsSlice';
import projectReducer from './reducers/project/projectSlice';

import titleReducer from './reducers/title/titleSlice';
import hederReducer from './reducers/heder/hederSlice';
const store = configureStore({
  reducer: {
    about: aboutReducer,
    admin: adminReducer,
    homePage: homePageReducer,
    gallerys: gallerysReducer,
    newsPage: newsPageReducer,
    project: projectReducer,
    title: titleReducer,
    heder:hederReducer,
  },
});

export default store;
