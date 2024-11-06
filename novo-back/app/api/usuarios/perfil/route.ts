import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { obtenerUsuarioAutenticado } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    // Verificar autenticación
    const usuario = await obtenerUsuarioAutenticado(req);

    if (!usuario) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    // Obtener datos del usuario
    const perfil = await prisma.usuario.findUnique({
      where: { id: usuario.userId },
      select: {
        id: true,
        email: true,
        nombre: true,
        createdAt: true,
      },
    });

    if (!perfil) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(perfil);
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    return NextResponse.json(
      { error: 'Error al obtener perfil' },
      { status: 500 }
    );
  }
}