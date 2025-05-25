import "./ads.scss"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getAds } from "../../app/store/reducers/homePage/homeThunks"
import { useParams } from "react-router-dom"

export const Ads = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ads = useSelector(state => state.homePage.ads) || [];
  const loading = useSelector(state => state.homePage.loading);
  const error = useSelector(state => state.homePage.error);
  const ad = ads.find(a => String(a.id) === String(id));

  useEffect(() => {
    if (!ad) {
      dispatch(getAds());
    }
  }, [dispatch, ad]);

  if (loading || !ad) return <div className="ads"><div className="container">Загрузка...</div></div>;
  if (error) return <div className="ads"><div className="container" style={{ color: 'red' }}>Ошибка: {error}</div></div>;

  return (
    <div className="ads">
      <div className="container">
        <div className="ads_img">
          <img src={Array.isArray(ad.img) ? ad.img[0] : ad.img} alt={ad.title} />
        </div>
        <div className="ads_text">
          <h3>{ad.date}</h3>
          <h2>{ad.title}</h2>
          <p>{ad.description}</p>
        </div>
      </div>
    </div>
  )
}
