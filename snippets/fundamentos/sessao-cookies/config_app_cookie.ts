// config/app.ts (trecho http.cookie)
export const http = {
  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    partitioned: false, // experimental
    priority: 'medium' as const,
  },
}
