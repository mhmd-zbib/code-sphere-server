import jwt, { JwtPayload } from "jsonwebtoken";

const ACCESS_TOKEN_EXPIRY = "120m";
const REFRESH_TOKEN_EXPIRY = "20d";
export const TOKEN_SECRET: string = process.env.ACCESS_TOKEN!;

interface DecodedToken extends JwtPayload {}

export function generateAccessToken(payload: any): string {
  console.log(ACCESS_TOKEN_EXPIRY);

  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRY });
}

export function generateRefreshToken(
  payload: any,
  expiresIn: string = REFRESH_TOKEN_EXPIRY
): string {
  return jwt.sign(payload, TOKEN_SECRET);
}

export function verifyAccessToken(token: string): DecodedToken | null {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET) as DecodedToken;
    return decoded;
  } catch (err: any) {
    console.error("Access token verification failed:", err.message);
    return null;
  }
}

export function verifyRefreshToken(token: string): DecodedToken | null {
  try {
    const decoded = jwt.verify(token, TOKEN_SECRET) as DecodedToken;
    return decoded;
  } catch (err: any) {
    console.error("Refresh token verification failed:", err.message);
    return null;
  }
}
