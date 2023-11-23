import { NextRequest, NextResponse } from 'next/server'
import { getIronSession, createResponse } from 'iron-session'

export const password =
  process.env.SESSION_SECRET ||
  '1047b09e1077ef3d7757c2bbae20630f0218dff8b43c9db56bc669a27efb6d47'

export interface SessionI {
  counter?: number
}

export function getSession(req: NextRequest, res: NextResponse) {
  return getIronSession<SessionI>(req, res, {
    password,
    cookieName: 'printer',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: process.env.COOKIE_AGE
        ? Number(process.env.COOKIE_AGE)
        : undefined
    }
  })
}

export { createResponse }
