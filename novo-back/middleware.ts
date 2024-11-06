import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verificarToken } from './lib/auth';

// Rutas que requieren autenticación
const rutasProtegidas = ['/api/usuarios/perfil'];

export function middleware(request: NextRequest) {
  // Verificar si la ruta requiere autenticación
  if (rutasProtegidas.some(ruta => request.nextUrl.pathname.startsWith(ruta))) {
    // Obtener token de la cookie
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Verificar token
    const payload = verificarToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Token inválido' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}