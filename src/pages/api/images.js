import { getRawImages, updateImages } from '../../lib/content.js';
import { isAuthenticated } from '../../lib/auth.js';

export async function GET({ request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  return new Response(JSON.stringify(getRawImages()), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT({ request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const data = await request.json();
  updateImages(data);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
