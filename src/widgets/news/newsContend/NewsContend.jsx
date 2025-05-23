import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews } from "../../../app/store/reducers/newsPage/newsThunks";
import { getTitle } from "../../../app/store/reducers/title/titleThunks";
import "./newsContend.scss";
import { NewsBlock } from "../../../features";

export const NewsContend = () => {
    const dispatch = useDispatch();
    const { news,  } = useSelector((state) => state.newsPage);
    const title = useSelector(state => state.title.data || {});

    useEffect(() => {
        dispatch(getNews());
        dispatch(getTitle());
    }, [dispatch]);

    return (
        <div className="newsContend">
            <div className="container">
                <h1 className="newsContend_title">{title?.title_news}</h1>

               

                <div className="newsContend_group">
                    {Array.isArray(news) && news.slice().reverse().map(newsItem => (
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
            </div>
        </div>
    );
};
