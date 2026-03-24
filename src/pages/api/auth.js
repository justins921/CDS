import { checkPassword } from '../../lib/auth.js';

export async function POST({ request }) {
  const body = await request.json();
  if (checkPassword(body.password)) {
    return new Response(JSON.stringify({ ok: true }), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': 'admin_auth=true; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400',
      },
    });
  }
  return new Response(JSON.stringify({ ok: false, error: 'Invalid password' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}
