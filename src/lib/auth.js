const ADMIN_PASSWORD = import.meta.env.ADMIN_PASSWORD || 'admin123';

export function isAuthenticated(request) {
  const cookie = request.headers.get('cookie') || '';
  return cookie.includes('admin_auth=true');
}

export function checkPassword(password) {
  return password === ADMIN_PASSWORD;
}
