import { betterAuth } from 'better-auth'
import { pool } from '@/lib/db'

const normalizeOrigin = (value?: string) => {
  if (!value) return undefined

  const trimmed = value.trim().replace(/\/+$/, '')
  if (!trimmed) return undefined

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
  }

  if (
    trimmed.includes('localhost') ||
    trimmed.startsWith('127.0.0.1') ||
    trimmed.startsWith('[::1]') ||
    trimmed.startsWith('::1')
  ) {
    return `http://${trimmed}`
  }

  return `https://${trimmed}`
}

const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://[::1]:3000',
  normalizeOrigin(process.env.BETTER_AUTH_URL),
  normalizeOrigin(process.env.VERCEL_URL),
  normalizeOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL),
  process.env.V0_RUNTIME_URL,
  process.env.V0_DEV_APP_URL,
  process.env.V0_BUILD_URL,
  process.env.V0_SANDBOX_URL,
].filter((value): value is string => Boolean(value))

export const auth = betterAuth({
  database: pool,
  baseURL:
    normalizeOrigin(process.env.BETTER_AUTH_URL) ??
    normalizeOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    normalizeOrigin(process.env.VERCEL_URL) ??
    process.env.V0_RUNTIME_URL ??
    'http://localhost:3000',
  emailAndPassword: { enabled: true, autoSignIn: true },
  trustedOrigins: allowedOrigins,
  session: { expiresIn: 60 * 60 * 24 * 7, updateAge: 60 * 60 * 24 },
  ...(process.env.NODE_ENV === 'development'
    ? {
        advanced: { defaultCookieAttributes: { sameSite: 'lax' as const, secure: false } },
      }
    : {
        advanced: { defaultCookieAttributes: { sameSite: 'none' as const, secure: true } },
      }),
})
