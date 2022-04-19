import { useEffect, useState } from "react";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";
import { getPerYear } from "./API";

const ChartContainer = ({ prefCode }) => {
    const [chart, updateChart] = useState("");
    const fetchData = async () => {
        const results: {} = await getPerYear(prefCode);
        const totalPersons = results.result.data[0].data;
        const data = totalPersons.map((tp) => {
            return {
                name: tp.year,
                uv: tp.value,
            };
        });
        updateChart(
            <div>
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 20, right: 20, bottom:20, left: 20 }}
                >
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        );
    };
    useEffect(() => {
        fetchData();
    }, []);
    return <div>{chart}</div>;
};

export default ChartContainer;
