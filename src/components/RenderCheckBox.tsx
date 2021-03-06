import { useState, useEffect } from "react";
import { getPrefectures } from "./API";
import ChartContainer from "./ChartContainer";

interface Prefecture {
    prefCode: number;
    prefName: string;
}

const RenderCheckBox = () => {
    const [box, updateBox] = useState([{ prefName: "ι½ιεΊη", prefCode: 0 }]);
    const [chart, updateChart] = useState<any[]>([]);
    const fetchData = async () => {
        const results: any = await getPrefectures();
        const prefectures: Prefecture[] = results.result;
        updateBox(prefectures);
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
                            <label htmlFor={prefId}>
                                <input
                                    type="checkbox"
                                    value={pref.prefCode}
                                    id={prefId}
                                    onClick={() =>
                                        onPrefClick(
                                            pref.prefCode,
                                            pref.prefName
                                        )
                                    }
                                />
                                {pref.prefName}
                            </label>
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
