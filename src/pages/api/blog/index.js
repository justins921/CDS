import { getBlogPosts, saveBlogPost } from '../../../lib/content.js';
import { isAuthenticated } from '../../../lib/auth.js';

export async function GET({ request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  return new Response(JSON.stringify(getBlogPosts()), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST({ request }) {
  if (!isAuthenticated(request)) {
    return new Response('Unauthorized', { status: 401 });
  }
  const data = await request.json();
  const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const post = saveBlogPost(slug, data);
  return new Response(JSON.stringify(post), {
    headers: { 'Content-Type': 'application/json' },
  });
}
