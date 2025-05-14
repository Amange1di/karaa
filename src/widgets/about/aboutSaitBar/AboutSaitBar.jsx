import { useEffect, useRef } from "react";
import "./aboutSaitBar.scss";

export const AboutSaitBar = ({ items, onSelect }) => {
    const saitBarRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const adjustHeight = () => {
            if (saitBarRef.current && contentRef.current) {
                const contentHeight = contentRef.current.offsetHeight;
                saitBarRef.current.style.maxHeight = `${contentHeight}px`;
            }
        };

        adjustHeight();
        window.addEventListener("resize", adjustHeight);

        return () => {
            window.removeEventListener("resize", adjustHeight);
        };
    }, []);

    return (
        <div className="aboutSaitBar" ref={saitBarRef}>
            <div className="aboutSaitBar_content" ref={contentRef}>
                <div className="aboutSaitBar_content_nav">
                    {items.map((item) => (
                        <h1
                            key={item.id}
                            onClick={() => {
                                onSelect(item);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            {item.title}
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
};
