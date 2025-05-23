import "./homeNews.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../../app/store/reducers/newsPage/newsThunks";
import { NewsBlock } from "../../../features";
import { NavLink } from "react-router-dom";

export const HomeNews = () => {
    const dispatch = useDispatch();
    const { news, loading, error } = useSelector((state) => state.newsPage);
    const home = useSelector(state => state.homePage.home) || {};
    const title_news = home.title_news;
    const btn_news = home.btn_news;

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const lastEightNews = news.slice(-8).reverse();

    return (
        <div className="homeNews">
            <div className="container">
                <h1 className="homeNews_title">{title_news}</h1>

                {loading && <p>Жүктөлүүдө...</p>}
                {error && <p className="error">{error}</p>}

                <div className="homeNews_group">
                    {lastEightNews.map(newsItem => (
                        <NewsBlock
                            key={newsItem.id}
                            img={newsItem.img}
                            data={newsItem.date}
                            title={newsItem.title}
                            description={newsItem.description}
                            id={newsItem.id}
                        />
                    ))}
                </div>
                <NavLink to="/news" className="homeNews_btn">
                    {btn_news}
                </NavLink>
            </div>
        </div>
    );
};
