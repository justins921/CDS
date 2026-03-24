export async function POST() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': 'admin_auth=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0',
    },
  });
}
