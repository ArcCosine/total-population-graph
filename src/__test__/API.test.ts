import { describe, test, expect } from "vitest";
import { getPerYear, getPrefectures } from "../components/API";

describe("API test", () => {
    test("prefectures test", async () => {
        const results: {} = await getPrefectures();
        expect(+results.result[0].prefCode).toBe(1);
        expect(results.result[0].prefName).toBe("北海道");
    });

    test("get per year test", async () => {
        const results: {} = await getPerYear(30);
        console.log(results.result.data[0]);
        expect(results.result.data[0].label).toBe("総人口");
    });
});
