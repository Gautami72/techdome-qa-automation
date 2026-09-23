import { test, expect } from '@playwright/test';

test('Homepage should use secure cookie attributes', async ({ request }) => {
const response = await request.get('https://techdome.io/');

expect(response.ok()).toBeTruthy();

const setCookie = response.headers()['set-cookie'] || '';

if (setCookie) {
expect(setCookie.toLowerCase()).not.toContain('samesite=none');
}
});
