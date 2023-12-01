import { test, expect } from '@playwright/test';

test('input value lune à 2', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('#lune_id').fill('2');
    
    await expect(page.locator("#lune_id")).toHaveValue('2');
});

test('input value terre à 2', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('#terre_id').fill('2');
    
    await expect(page.locator("#terre-id")).toHaveText(['1', '2']);
});

test('input value soleil à 1', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('#soleil_id').fill('1');
    
    await expect(page.locator("#soleil-id")).toHaveText("1 | 2");
});

test('input value soleil à 5', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('input[name="soleil"]').click();
    await page.locator('#soleil_id').fill('5');
    
    await expect(page.locator("#soleil-id")).toHaveText("1 | 2");
});

test('input value soleil à <string>', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.locator('input[name="soleil"]').click();
    await page.locator('#soleil_id').fill('sdiqsjdqourqeuiorqidkqsm');
    
    await expect(page.locator("#soleil-id")).toHaveText("1 | 2");
});

