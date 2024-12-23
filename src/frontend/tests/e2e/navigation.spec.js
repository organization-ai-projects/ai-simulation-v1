import { test, expect } from "@playwright/test";

test("navigation to Agents page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("text=Agents");
  await expect(page).toHaveURL("http://localhost:3000/agents");
});
