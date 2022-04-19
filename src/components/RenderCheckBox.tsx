import { useState, useEffect } from "react";
import { getPrefectures } from "./API";
import ChartContainer from "./ChartContainer";

interface Prefecture {
    prefCode: number;
    prefName: string;
}

const RenderCheckBox = () => {
    const [box, updateBox] = useState([{ prefName: "都道府県", prefCode: 0 }]);
    const [chart, updateChart] = useState([]);
    const fetchData = async () => {
        const results: {} = await getPrefectures();
        const prefectures: Prefecture[] = results.result;
        updateBox(prefectures);
    };

    const onPrefClick = (prefCode) => {
        const head = chart.indexOf(prefCode);
        const newChart = [...chart];
        if (head > -1) {
            newChart.splice(head, 1);
        } else {
            newChart.push(prefCode);
        }
        updateChart(newChart);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="">
            <div className="pref-container">
                {box.map((pref, index) => {
                    const prefId = `pref_${pref.prefCode}`;
                    return (
                        <div className="pref-grid" key={index}>
                            <input
                                type="checkbox"
                                value={pref.prefCode}
                                id={prefId}
                                onClick={() => onPrefClick(pref.prefCode)}
                            />
                            <label htmlFor={prefId}>{pref.prefName}</label>
                        </div>
                    );
                })}
            </div>
            <div className="chart-container">
                {chart.map((code) => {
                    return <ChartContainer prefCode={code} key={code}></ChartContainer>;
                })}
            </div>
        </div>
    );
};

export default RenderCheckBox;
