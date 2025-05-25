import "./aboutContent.scss";
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip
} from 'chart.js';
import { useMemo, useEffect, useRef } from 'react';
import Map2GIS from "../Map2GIS";

ChartJS.register(ArcElement, Tooltip);

const options = {
    responsive: true,
    plugins: {
    }
};
const isValidCoords = (str) => {
    if (typeof str !== 'string') return false;
    // Проверяем: число с плавающей точкой, запятая, пробелы (опционально), и ещё одно число
    const regex = /^\s*-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?\s*$/;
    return regex.test(str);
};

export const AboutContend = ({ title, content, pipls, all_people, all, location }) => {
    const mapKey = useRef(0);
    useEffect(() => {
        mapKey.current += 1;
    }, [location]);

    const chartData = useMemo(() => {
        if (!pipls) return null;
        return {
            labels: pipls.map((item) => item.p),
            datasets: [
                {
                    label: 'Калк саны',
                    data: pipls.map((item) => parseInt(item.n.replace(/\s/g, '')) || 0),
                    backgroundColor: [
                        'rgba(21, 232, 70, 1)',
                        'rgba(160, 14, 7, 1)',
                        'rgba(36, 133, 208, 1)',
                        'rgba(144, 144, 144, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(199, 199, 199, 1)'
                    ],
                }
            ]
        };
    }, [pipls]);

    return (
        <div className="aboutContent">
            <h2>{title}</h2>
            <p>{content}</p>
            {all_people && pipls.length > 0 && (
                <div className="aboutContent_gra">
                    <div className="aboutContent_gra_title">
                        <h4>{all_people}</h4>
                        <h2>{all}</h2>
                        {chartData && (
                            <div className="doughnut">
                                <Doughnut data={chartData} options={options} />
                            </div>
                        )}
                    </div>
                    {pipls.length > 0 && (
                        <div className="aboutContent_doughnut_content_texts">
                            {pipls.map((item, index) => {
                                const total = pipls.reduce((sum, curr) => sum + (parseInt(curr.n.replace(/\s/g, '')) || 0), 0);
                                const count = parseInt(item.n.replace(/\s/g, ''));
                                const percentage = total > 0 ? ((count / total) * 100).toFixed(1) : 0;

                                return (
                                    <div key={index} className="aboutContent_doughnut_content_text">
                                        <div className="aboutContent_doughnut_content_text_block">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div
                                                    style={{
                                                        backgroundColor: chartData.datasets[0].backgroundColor[index],
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                    }}
                                                ></div>
                                                <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                                                    {count.toLocaleString()}
                                                </h2>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                                <span style={{ fontSize: '14px', color: '#666' }}>({percentage}%)</span>
                                                <p style={{ margin: 0, fontSize: '16px', color: '#555' }}>{item.p}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
            {isValidCoords(location) && (
                <div style={{ width: '100%', marginTop: "100px", height: '300px' }}>
                    <Map2GIS key={mapKey.current} mapLink={location} zoom={15} />
                </div>
            )}




        </div>
    );
};
