import { test, expect } from '@playwright/test';

test('Homepage should return important security headers', async ({ request }) => {
  const response = await request.get('https://techdome.io/');

  expect(response.ok()).toBeTruthy();

  const headers = response.headers();

  console.log('Security headers:');
  console.log('strict-transport-security:', headers['strict-transport-security']);
  console.log('content-security-policy:', headers['content-security-policy']);
  console.log('x-content-type-options:', headers['x-content-type-options']);
  console.log('x-frame-options:', headers['x-frame-options']);

  expect(headers['strict-transport-security']).toBeTruthy();
  expect(headers['x-content-type-options']).toBeTruthy();
});