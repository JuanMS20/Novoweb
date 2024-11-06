import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'tu-secreto-seguro';

// Interfaz para el payload del token
export interface TokenPayload {
  userId: string;
  email: string;
}

// Generar token JWT
export const generarToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

// Verificar token JWT
export const verificarToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
};

// Middleware para rutas protegidas
export const obtenerUsuarioAutenticado = async (req: NextRequest) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }

  return verificarToken(token);
};