import "./ads.scss"
import { useEffect, useState } from "react"
import axios from "../../shared/api/Axios"
export const Ads = () => {
  const [ad, setAd] = useState(null)

  useEffect(() => {
    // Получаем id из URL (например, /ads-detail/:id)
    const id = window.location.pathname.split("/").pop()
    axios.get(`http://127.0.0.1:8000/ads/ads/${id}`)
      .then(res => setAd(res.data))
      .catch(() => setAd(null))
  }, [])

  if (!ad) return <div className="ads"><div className="container">Загрузка...</div></div>

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
