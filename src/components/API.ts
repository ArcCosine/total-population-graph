//import fetch from "node-fetch";

const entryPoint = "https://opendata.resas-portal.go.jp";

const X_API_KY = "7p5zn1cmMGISoqdFhb6rJC4zIiEWCqSqf5JjzRtu";

export const getPrefectures: {} = async () => {
    const URL = `${entryPoint}/api/v1/prefectures`;
    const results: {} = await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": X_API_KY,
        },
    });
    return results.json();
};

export const getPerYear: {} = async (prefCode) => {
    const  params = {
        prefCode : prefCode,
        cityCode: '-'
    };
    const query = new URLSearchParams(params);
    const URL = `${entryPoint}/api/v1/population/composition/perYear?${query}`;
    const results: {} = await fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": X_API_KY,
        },
    });
    return results.json();
};
