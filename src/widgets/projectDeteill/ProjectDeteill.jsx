import "./projectDeteill.scss";
import { useEffect, useState } from "react";
import axios from "../../shared/api/Axios";

export const ProjectDeteill = () => {
    const [project, setProject] = useState(null);
    const [currentImg, setCurrentImg] = useState(null);

    useEffect(() => {
        const id = window.location.pathname.split("/").pop();
        axios
            .get(`http://127.0.0.1:8000/projects/projects/${id}`)
            .then((res) => {
                setProject(res.data);
                if (Array.isArray(res.data.imgs) && res.data.imgs.length > 0) {
                    setCurrentImg(res.data.imgs[0]);
                } else if (Array.isArray(res.data.img) && res.data.img.length > 0) {
                    setCurrentImg(res.data.img[0]);
                } else {
                    setCurrentImg(res.data.img || "");
                }
            })
            .catch(() => setProject(null));
    }, []);

    const handleImageClick = (newImg) => {
        setCurrentImg(newImg);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!project)
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
