import { describe, expect, test } from "vitest";
import { calculerHeure } from "../calculerHeure";

describe("calculs", () => {
    describe("total", () => {
        test("result", () => {
            expect(calculerHeure(1, 2, 1)).toBe("mortin");
        })
    })
})