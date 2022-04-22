interface RequestParams {
    [key: string]: string;
}

interface Cache {
    [name: string]: object;
}

const requestAPI = async (URL: string) => {
    const entryPoint = "https://opendata.resas-portal.go.jp";
    const X_API_KY = "7p5zn1cmMGISoqdFhb6rJC4zIiEWCqSqf5JjzRtu";
    const requestURL = `${entryPoint}${URL}`;

    // セッションストレージを利用し、RESAS APIへのアクセスを最小限にする
    const sd: any = window.sessionStorage.getItem("APICache");
    const APICache: Cache = sd ? JSON.parse(sd) : {};

    if (typeof APICache[requestURL] !== "undefined") {
        // セッションストレージにデータがあった場合はそのまま返す
        return Promise.resolve(APICache[requestURL]);
    } else {
        // ない場合は、RESAS APIからデータ習得する
        try {
            const results = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-KEY": X_API_KY,
                },
            });
            const json = await results.json();
            APICache[requestURL] = json;
            window.sessionStorage.setItem("APICache", JSON.stringify(APICache));
            return json;
        } catch (e) {
            // 何らかのエラー
            console.log(e);
            return Promise.resolve([]);
        }
    }
};

// 都道府県一覧取得
export const getPrefectures: any = async () => {
    const URL = "/api/v1/prefectures";
    return await requestAPI(URL);
};

// 人口構成取得
export const getPerYear: any = async (prefCode: number) => {
    const params: RequestParams = {
        prefCode: "" + prefCode,
        cityCode: "-",
    };
    const query: string = new URLSearchParams(params).toString();
    const URL = `/api/v1/population/composition/perYear?${query}`;
    return await requestAPI(URL);
};
