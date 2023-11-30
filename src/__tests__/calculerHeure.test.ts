import { describe, expect, test } from "vitest";
import { calculerHeure, getValeur } from "../calculerHeure";

describe("calculs", () => {
    // describe("totalByString", () => {
    //     test("resultA", () => {
    //         expect(calculerHeure(1, 1, 1)).toBe("mortin");
    //     })
    //     test("resultB", () => {
    //         expect(calculerHeure(1, 2, 2)).toBe("nuight");
    //     })
    //     test("resultC", () => {
    //         expect(calculerHeure(2, 2, 2)).toBe("nuight");
    //     })
    //     test("resultD", () => {
    //         expect(calculerHeure(2, 2, 1)).toBe("aprenoon");
    //     })
    //     test("resultE", () => {
    //         expect(calculerHeure(2, 1, 1)).toBe("aprenoon"); 
    //     })
    //     test("resultF", () => {
    //         expect(calculerHeure(2, 1, 2)).toBe("soirning");
    //     })
    //     test("resultG", () => {
    //         expect(calculerHeure(1, 2, 1)).toBe("mortin");
    //     })
    // })

    describe("totalByNumber", () => {
        test("result1", () => {
            expect(getValeur(1, 1, 1)).toBe(0);
        })
        test("result2", () => {
            expect(getValeur(1, 1, 2)).toBe(5);
        })
        test("result3", () => {
            expect(getValeur(1, 2, 2)).toBe(6);
        })
        test("result4", () => {
            expect(getValeur(2, 2, 2)).toBe(6);
        })
        test("result5", () => {
            expect(getValeur(2, 2, 1)).toBe(1.5);
        })
        test("result6", () => {
            expect(getValeur(2, 1, 1)).toBe(1.5); 
        })
        test("result7", () => {
            expect(getValeur(2, 1, 2)).toBe(4);
        })
        test("result8", () => {
            expect(getValeur(1, 2, 1)).toBe(0);
        })
    })
});