import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { getPerYear } from "./API";

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface TpMap {
  [key: string]: any;
}

const ChartContainer = ({ chart }: any) => {
  const [chartObj, updateChartObj] = useState<any>("");
  const fetchData = async () => {
    const lines: string[] = [];
    const workMap: TpMap = {};
    let totalPersonsData: any = sessionStorage.getItem("totalPersonsData");
    if (!totalPersonsData) {
      totalPersonsData = {};
    } else {
      totalPersonsData = JSON.parse(totalPersonsData);
    }

    await Promise.all(
      chart.map(async (pref: Prefecture) => {
        const prefKey = pref.prefName;
        lines.push(prefKey);
        let totalPersons;
        if (typeof totalPersonsData[prefKey] === "undefined") {
          const results: any = await getPerYear(pref.prefCode);
          totalPersons = results.result.data[0].data;
          totalPersonsData[prefKey] = totalPersons;
        } else {
          totalPersons = totalPersonsData[prefKey];
        }

        totalPersons.map((tp: { year: number; value: number }) => {
          const year: string = "" + tp.year;
          if (typeof workMap[year] === "undefined") {
            workMap[year] = {};
            workMap[year]["name"] = year;
          }
          workMap[year][prefKey] = "" + tp.value;
        });
        return Promise.resolve();
      })
    );

    sessionStorage.setItem(
      "totalPersonsData",
      JSON.stringify(totalPersonsData)
    );

    const data = [];
    for (let workKey in workMap) {
      data.push(workMap[workKey]);
    }
    updateChartObj(
      <div className="chart-wrapper">
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 80, right: 80, bottom: 20, left: 20 }}
          >
            {lines.map((line, index) => {
              const h = index * (360 / 12);
              const strokeColor = `hsl(${h},80%,60%)`;
              return (
                <Line
                  type="monotone"
                  dataKey={line}
                  key={index}
                  stroke={strokeColor}
                />
              );
            })}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="name"
              label={{
                value: "年度",
                position: "right",
                offset: 30,
              }}
            />
            <YAxis
              label={{
                value: "人口数",
                position: "top",
                offset: 10,
              }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  useEffect(() => {
    fetchData();
  }, [chart]);
  return <div>{chartObj}</div>;
};

export default ChartContainer;
