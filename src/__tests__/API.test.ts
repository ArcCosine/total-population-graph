import { describe, test, expect, beforeEach, afterAll, vi } from "vitest";
import { getPerYear, getPrefectures } from "../components/API";

//const unmockedFetch = global.fetch;

/*const localStorageMock = (() => {
    let store = {};

    return {
        getItem(key) {
            return store[key] || null;
        },
        setItem(key, value) {
            store[key] = value.toString();
        },
        removeItem(key) {
            delete store[key];
        },
        clear() {
            store = {};
        },
    };
})();

Object.defineProperty(window, "sessionStorage", {
    value: localStorageMock,
});
*/

describe("API test", () => {
    //beforeEach(() => {
    //    window.sessionStorage.clear();
    //    vi.restoreAllMocks();
    //    global.fetch = () => {
    //        return Promise.resolve({
    //            json: () => Promise.resolve([]),
    //        });
    //    };
    //});

    //afterAll(() => {
    //    global.fetch = unmockedFetch;
    //});
    test("prefectures test", async () => {
        const results: any = await getPrefectures();
        expect(+results.result[0].prefCode).toBe(1);
        expect(results.result[0].prefName).toBe("北海道");
    });

    test("get per year test", async () => {
        const results: any = await getPerYear(30);
        // console.log(results.result.data[0]);
        expect(results.result.data[0].label).toBe("総人口");
    });
});
