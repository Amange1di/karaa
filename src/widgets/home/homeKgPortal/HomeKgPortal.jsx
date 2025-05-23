import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPortal } from "../../../app/store/reducers/homePage/homeThunks"
import "./homeKgPortal.scss"

export const HomeKgPortal = () => {
    const dispatch = useDispatch();
    const portals = useSelector(state => state.homePage.portals) || [];
    const title_portal = useSelector(state => state.homePage.home?.title_portal);

    useEffect(() => {
        dispatch(getPortal());
    }, [dispatch]);

    return (
        <div className="homeKgPortal">
            <div className="container">
                <h1>{title_portal}</h1>
                <div className="homeKgPortal_group">
                    {portals.map((portal, idx) => (
                        <a href={portal.link} key={idx} target="_blank" rel="noopener noreferrer" className="homeKgPortal_group_portal_item">
                            <img src={portal.img} alt={portal.name} />
                            <p>{portal.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
