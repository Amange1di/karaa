import "./projectDeteill.scss";
import img from "../../shared/images/hero.jpg";
import img2 from "../../shared/images/admin.png";
import img3 from "../../shared/images/logo.png";
import { useState } from "react";
const data = [
    {
        id: 1,
        img: img,
    },
    {
        id: 2,
        img: img2,
    },
    {
        id: 3,
        img: img3,
    },
    {
        id: 4,
        img: img,
    },
    {
        id: 5,
        img: img3,
    },
    {
        id: 6,
        img: img,
    },
    {
        id: 7,
        img: img,
    },
    {
        id: 8,
        img: img3,
    },
];

export const ProjectDeteill = () => {
    const [currentImg, setCurrentImg] = useState(img);

    const handleImageClick = (newImg) => {
        setCurrentImg(newImg);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="projectDeteill">
            <div className="container">
                <div className="projectDeteill_img">
                    <img src={currentImg} alt="" />
                </div>
                <div className="projectDeteill_text">
                    <h2>В Бишкеке состоялся семинар по вопросам внедрения системы управления проектами</h2>
                    <p>В Бишкеке состоялся семинар по вопросам внедрения системы управления проектами в Кыргызской Республике. В мероприятии приняли участие представители государственных органов, международных организаций и эксперты в области управления проектами.</p>
                    <p>Семинар был организован с целью обмена опытом и лучшими практиками в области управления проектами, а также обсуждения актуальных вопросов и проблем, связанных с внедрением системы управления проектами в Кыргызстане.</p>
                    <p>Участники семинара обсудили ключевые аспекты внедрения системы управления проектами, включая планирование, реализацию и мониторинг проектов, а также вопросы оценки эффективности и устойчивости проектов.</p>
                    <p>В ходе семинара были представлены успешные примеры реализации проектов в различных сферах, таких как образование, здравоохранение, инфраструктура и социальное развитие.</p>
                    <p>Организаторы семинара выразили надежду на дальнейшее сотрудничество между государственными органами и международными организациями в области управления проектами для достижения устойчивого развития Кыргызстана.</p>
                </div>
                <div className="projectDeteill_group">
                    {data.map((item) => (
                        <img
                            key={item.id}
                            src={item.img}
                            alt=""
                            onClick={() => handleImageClick(item.img)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
