import "./homeNews.scss"
import news from "../../../shared/images/hero.jpg"
import { NewsBlock } from "../../../features"
import { NavLink } from "react-router-dom" // Исправлено имя компонента

const faceNews = [

    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },
    {
        id: 1,
        title: "title",
        description: "description description",
        img: news,
        data: "05.05.2025"
    },

]

export const HomeNews = () => {
    return (
        <div className="homeNews">
            <div className="container">

                <h1 className="homeNews_title">Акыркы жаңылыктар            </h1>
                <div className="homeNews_group">
                    {faceNews.map(newsItem => (
                        <NewsBlock
                            key={newsItem.id}
                            img={newsItem.img}
                            data={newsItem.data}
                            title={newsItem.title}
                            description={newsItem.description}
                        />
                    ))}
                </div>
                <NavLink to="/news" className="homeNews_btn">Бардык жаңылыктар</NavLink>
            </div>
        </div>
    )
}
