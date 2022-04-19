//import fetch from "node-fetch";

const requestAPI = async (URL:string)=>{
    const entryPoint = "https://opendata.resas-portal.go.jp";
    const X_API_KY = "7p5zn1cmMGISoqdFhb6rJC4zIiEWCqSqf5JjzRtu";
    const results = await fetch(`${entryPoint}${URL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": X_API_KY,
        },
    });
    return await results.json();
};

export const getPrefectures: any = async () => {
    const URL = `/api/v1/prefectures`;
    return await requestAPI(URL);
};

export const getPerYear: any = async (prefCode:number) => {
    const  params = {
        prefCode : ""+prefCode,
        cityCode: '-'
    };
    const query = new URLSearchParams(params);
    const URL = `/api/v1/population/composition/perYear?${query}`;
    return await requestAPI(URL);
};
