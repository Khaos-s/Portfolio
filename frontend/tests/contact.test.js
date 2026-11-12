/* global process */
import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/contact.js';

const valid = { name: 'Visitor', email: 'visitor@example.com', subject: 'Interface design', message: 'A project inquiry.' };
async function request(body, method = 'POST', headers = {}) {
  const response = { status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
  await handler({ method, headers, body }, response);
  return response;
}

test('contact validation, provider failures, and delivery payload', async () => {
  const previous = { ...process.env };
  const originalFetch = globalThis.fetch;
  let deliveries = 0;
  try {
    process.env.SITE_URL = 'https://portfolio.example';
    process.env.RESEND_API_KEY = 'test-key';
    process.env.CONTACT_TO_EMAIL = 'owner@example.com';
    process.env.CONTACT_FROM_EMAIL = 'Portfolio <hello@example.com>';
    globalThis.fetch = async (_url, options) => {
      deliveries++;
      const payload = JSON.parse(options.body);
      assert.equal(payload.reply_to, valid.email);
      assert.equal(payload.text, 'From: Visitor\nEmail: visitor@example.com\n\nA project inquiry.');
      assert.ok(options.signal instanceof AbortSignal);
      return { ok: true };
    };
    assert.equal((await request(valid, 'GET')).code, 405);
    assert.equal((await request(valid, 'POST', { origin: 'https://other.example' })).code, 403);
    for (const email of ['@', 'a@', 'a@@b.com', 'a b@example.com', 'a@example']) {
      assert.equal((await request({ ...valid, email })).code, 400, email);
    }
    assert.equal((await request(undefined)).code, 400);
    assert.equal((await request({ ...valid, name: ' '.repeat(4) })).code, 400);
    assert.equal((await request({ ...valid, message: 'a'.repeat(5001) })).code, 400);
    assert.deepEqual((await request({ ...valid, website: 'spam' })).body, { ok: true });
    assert.equal(deliveries, 0);
    assert.equal((await request(valid)).code, 200);
    assert.equal(deliveries, 1);
    globalThis.fetch = async () => ({ ok: false });
    assert.equal((await request(valid)).code, 502);
    globalThis.fetch = async () => { throw new DOMException('Timed out', 'TimeoutError'); };
    assert.equal((await request(valid)).code, 502);
    delete process.env.RESEND_API_KEY;
    assert.equal((await request(valid)).code, 503);
  } finally {
    globalThis.fetch = originalFetch;
    for (const key of ['SITE_URL', 'RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL']) {
      if (previous[key] === undefined) delete process.env[key]; else process.env[key] = previous[key];
    }
  }
});
