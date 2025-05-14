import "./newsDeteil.scss"
import img from "../../../shared/images/hero.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
export const NewsDeteil = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }

    return (

        <div className="newsDeteil">
            <div className="container">
                <Slider {...sliderSettings} className="newsDeteil_slider">
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="newsDeteil_img">
                        <img src={img} alt="" />
                    </div>
                </Slider>

                <div className="newsDeteil_text">
                    <h3>05.05.2025</h3>
                    <h2>В Бишкеке состоялся семинар по вопросам внедрения системы управления проектами</h2>
                    <p>В Бишкеке состоялся семинар по вопросам внедрения системы управления проектами в Кыргызской Республике. В мероприятии приняли участие представители государственных органов, международных организаций и эксперты в области управления проектами.</p>
                    <p>Семинар был организован с целью обмена опытом и лучшими практиками в области управления проектами, а также обсуждения актуальных вопросов и проблем, связанных с внедрением системы управления проектами в Кыргызстане.</p>
                    <p>Участники семинара обсудили ключевые аспекты внедрения системы управления проектами, включая планирование, реализацию и мониторинг проектов, а также вопросы оценки эффективности и устойчивости проектов.</p>
                    <p>В ходе семинара были представлены успешные примеры реализации проектов в различных сферах, таких как образование, здравоохранение, инфраструктура и социальное развитие.</p>
                    <p>Организаторы семинара выразили надежду на дальнейшее сотрудничество между государственными органами и международными организациями в области управления проектами для достижения устойчивого развития Кыргызстана.</p>
                </div>
            </div>

        </div>
    )
}
