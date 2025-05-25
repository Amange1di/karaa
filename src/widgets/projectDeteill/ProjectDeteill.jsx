import "./projectDeteill.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from "../../app/store/reducers/project/projectThunks";

export const ProjectDeteill = () => {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project.project);
    const loading = useSelector(state => state.project.loading);
    const [currentImg, setCurrentImg] = useState(null);

    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        dispatch(getProjectById(id)).then((action) => {
            const data = action.payload;
            if (data) {
                if (Array.isArray(data.imgs) && data.imgs.length > 0) {
                    setCurrentImg(data.imgs[0]);
                } else if (Array.isArray(data.img) && data.img.length > 0) {
                    setCurrentImg(data.img[0]);
                } else {
                    setCurrentImg(data.img || "");
                }
            }
        });
    }, [dispatch]);

    const handleImageClick = (newImg) => {
        setCurrentImg(newImg);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (loading || !project)
        return (
            <div className="projectDeteill">
                <div className="container">Загрузка...</div>
            </div>
        );

    return (
        <div className="projectDeteill">
            <div className="container">
                <div className="projectDeteill_img">
                    <img src={currentImg} alt={project?.title || ""} />
                </div>
                <div className="projectDeteill_text">
                    <h2>{project?.title}</h2>
                    <p>{project?.description}</p>
                </div>
                <div className="projectDeteill_group">
                    {Array.isArray(project?.imgs) && project.imgs.length > 0
                        ? project.imgs.map((imgUrl, idx) => (
                            <img
                                key={idx}
                                src={imgUrl}
                                alt=""
                                onClick={() => handleImageClick(imgUrl)}
                            />
                        ))
                        : Array.isArray(project?.img) && project.img.map((imgUrl, idx) => (
                            <img
                                key={idx}
                                src={imgUrl}
                                alt=""
                                onClick={() => handleImageClick(imgUrl)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
