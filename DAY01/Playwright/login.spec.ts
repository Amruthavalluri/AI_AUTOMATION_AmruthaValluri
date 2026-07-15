import { test, expect } from '@playwright/test';

test('Verify successful login', async ({ page }) => {
  // Navigate to the Login page
  await page.goto('https://example.com/login');

  // Verify the Login button is visible
  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();

  // Enter login credentials
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('Password123');

  // Click the Login button
  await loginButton.click();

  // Verify user is redirected to the Dashboard
  await expect(page).toHaveURL(/.*dashboard/i);

  // Verify Dashboard heading is displayed
  await expect(
    page.getByRole('heading', { name: /dashboard/i })
  ).toBeVisible();
});