import "./newsContend.scss"
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

export const NewsContend = () => {
    return (
        <div className="newsContend">
            <div className="container">

                <h1 className="newsContend_title"> жаңылыктар</h1>
                <div className="newsContend_group">
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
            </div>
        </div>
    )
}
