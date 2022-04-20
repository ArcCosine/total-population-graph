interface RequestParams {
  [name: string]: string;
}

interface Cache {
  [name: string]: Object;
}

const requestAPI = async (URL: string) => {
  const entryPoint = "https://opendata.resas-portal.go.jp";
  const X_API_KY = "7p5zn1cmMGISoqdFhb6rJC4zIiEWCqSqf5JjzRtu";
  const requestURL = `${entryPoint}${URL}`;
  let APICache: Object = sessionData.getItem("APICache") || {};
  if (typeof APICache[requestURL] !== "undefined") {
    return Promise.resolve(APICache[requestURL]);
  } else {
    const results = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": X_API_KY,
      },
    });
    const json = await results.json();
    APICache[requestURL] = json;

    return json;
  }
};

export const getPrefectures: any = async () => {
  const URL = `/api/v1/prefectures`;
  return await requestAPI(URL);
};

export const getPerYear: any = async (prefCode: number) => {
  const params: RequestParams = {
    prefCode: "" + prefCode,
    cityCode: "-",
  };
  const query = new URLSearchParams(params);
  const URL = `/api/v1/population/composition/perYear?${query}`;
  return await requestAPI(URL);
};
