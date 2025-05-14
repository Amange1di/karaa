import "./homeKgPortal.scss"
import logo from "../../../shared/images/gerb.svg"

const fakePortal = [
    {
        id: 1,
        logo: logo,
        name: "Кыргыз Республикасынын Президенти",
        link: "https://president.kg/kg"
    },
    {
        id: 1,
        logo: logo,
        name: "Мамлекеттик кызмат жана жергиликтүү өз алдынча башкаруу иштери боюнча мамлекеттик агенттик",
        link: "https://mkk.gov.kg/"
    },
    {
        id: 1,
        logo: "https://kenesh.kg/assets/img/logo-000e38362a731a6cb001d02719a6cfe0.png",
        name: "Кыргыз Республикасынын Жогорку Кенеши",
        link: "https://kenesh.kg/ru"
    },
    {
        id: 1,
        logo: "https://portal.tunduk.kg/assets/images/Logo%20.png",
        name: "Электрондук кызмат көрсөтүүлөр мамлекеттик порталы",
        link: "https://portal.tunduk.kg/"
    },
    {
        id: 1,
        logo: "https://data.gov.kg/uploads/admin/2019-09-23-041417.128195ckan-logo.png",
        name: "Кыргыз Республикасынын ачык маалыматтар порталы",
        link: "https://data.gov.kg/ru/"
    },
    {
        id: 1,
        logo: "https://www.gov.kg/assets/images/logo.png",
        name: "Кыргыз Республикасынын Министрлер Кабинети",
        link: "https://www.gov.kg/ru"
    },
   
]

export const HomeKgPortal = () => {
    return (
        <div className="homeKgPortal">
            <div className="container">
                <h1>Кыргыз Республикасынын мамлекеттик порталдары</h1>
                <div className="homeKgPortal_group">
                    {fakePortal.map(portal => (
                        <a href={portal.link} key={portal.id} target="_blank" rel="noopener noreferrer" className="homeKgPortal_group_portal_item">
                            <img src={portal.logo} alt={portal.name} />
                            <p>{portal.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
