import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGallerys } from "../../app/store/reducers/gallerys/gallerysThunks";
import "./gallery.scss";

export const Gallery = () => {
    const dispatch = useDispatch();
    const gallerys = useSelector(state => state.gallerys.gallerys) || [];

    useEffect(() => {
        dispatch(getGallerys());
    }, [dispatch]);

    return (
        <div className="gallery">
            <div className="container">
                <div className="gallery_group">
                    {gallerys.map((item, index) => (
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
