import img from "../../shared/images/hero.jpg"

import "./gallery.scss"
const face = [
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
    {
        img: img,
        date: "01.02.2023",
    },
];

export const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
                <div className="gallery_group">
                    {face.map((item, index) => (
                        <div key={index} className="gallery_block">
                            <img className="gallery_block_img" src={item.img} alt="Gallery item" />
                            <h4 className="gallery_block_data">{item.date}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
