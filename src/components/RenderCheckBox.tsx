import { useState, useEffect } from "react";
import { getPrefectures } from "./API";
import ChartContainer from "./ChartContainer";

interface Prefecture {
    prefCode: number;
    prefName: string;
}

const RenderCheckBox = () => {
    const [box, updateBox] = useState([{ prefName: "都道府県", prefCode: 0 }]);
    const [chart, updateChart] = useState<any[]>([]);
    const fetchData = async () => {
        const prefecturesData = sessionStorage.getItem("prefecturesData");
        if (!prefecturesData) {
            const results: any = await getPrefectures();
            const prefectures: Prefecture[] = results.result;
            updateBox(prefectures);
            sessionStorage.setItem(
                "prefecturesData",
                JSON.stringify(prefectures)
            );
        } else {
            updateBox(JSON.parse(prefecturesData));
        }
    };

    const onPrefClick = (prefCode: number, prefName: string) => {
        const head = chart.findIndex(
            (u: Prefecture) => u.prefCode === prefCode
        );
        const newChart: any[] = [...chart];
        if (head > -1) {
            newChart.splice(head, 1);
        } else {
            newChart.push({ prefCode: prefCode, prefName: prefName });
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
                                onClick={() =>
                                    onPrefClick(pref.prefCode, pref.prefName)
                                }
                            />
                            <label htmlFor={prefId}>{pref.prefName}</label>
                        </div>
                    );
                })}
            </div>
            <div className="chart-container">
                <ChartContainer chart={chart}></ChartContainer>;
            </div>
        </div>
    );
};

export default RenderCheckBox;
