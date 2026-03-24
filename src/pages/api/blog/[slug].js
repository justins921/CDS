import { getBlogPost, saveBlogPost, deleteBlogPost } from '../../../lib/content.js';
import { isAuthenticated } from '../../../lib/auth.js';

export async function GET({ params, request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const post = getBlogPost(params.slug);
  if (!post) {
    return new Response('Not found', { status: 404 });
  }
  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT({ params, request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const data = await request.json();
  const post = saveBlogPost(params.slug, data);
  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE({ params, request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const deleted = deleteBlogPost(params.slug);
  return new Response(JSON.stringify({ ok: deleted }), {
    status: deleted ? 200 : 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
