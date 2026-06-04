// Cloudflare Worker: persistent contact-form submission counter.
//
// POST  -> increments the counter and returns the new total  { count: N }
// GET   -> returns the current total without incrementing     { count: N }
//
// The count is stored in a KV namespace (binding: COUNTER), so it survives
// site redeploys, browser changes, and visitors — it lives on your own
// Cloudflare account, not in the page.

const ALLOWED_ORIGINS = new Set([
  'https://hiteshchoudhary.com.au',
  'https://www.hiteshchoudhary.com.au',
  'http://localhost:5173', // Vite dev server
]);

const KEY = 'contact_submissions';

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGINS.has(origin)
        ? origin
        : 'https://hiteshchoudhary.com.au',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors });
    }

    if (request.method === 'GET') {
      const count = parseInt(await env.COUNTER.get(KEY), 10) || 0;
      return Response.json({ count }, { headers: cors });
    }

    if (request.method === 'POST') {
      const count = (parseInt(await env.COUNTER.get(KEY), 10) || 0) + 1;
      await env.COUNTER.put(KEY, String(count));
      return Response.json({ count }, { headers: cors });
    }

    return new Response('Method Not Allowed', { status: 405, headers: cors });
  },
};
