import { getHeder } from '../../app/store/reducers/heder/hederThunks';
import { getHome, getPortal, getAds } from '../../app/store/reducers/homePage/homeThunks';
import { getNews } from '../../app/store/reducers/newsPage/newsThunks';
import { getProject } from '../../app/store/reducers/project/projectThunks';
import { getGallerys } from '../../app/store/reducers/gallerys/gallerysThunks';
import { getTitle } from '../../app/store/reducers/title/titleThunks';

export const refreshAllData = (dispatch) => {
    dispatch(getHeder());
    dispatch(getHome());
    dispatch(getPortal());
    dispatch(getAds());
    dispatch(getNews());
    dispatch(getProject());
    dispatch(getGallerys());
    dispatch(getTitle());
};
