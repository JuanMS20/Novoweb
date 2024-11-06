import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { generarToken } from '@/lib/auth';

export async function POST(req: Request) {
  try {
    const { email, password, nombre } = await req.json();

    // Validar datos
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const usuarioExistente = await prisma.usuario.findUnique({
      where: { email },
    });

    if (usuarioExistente) {
      return NextResponse.json(
        { error: 'El usuario ya existe' },
        { status: 400 }
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const usuario = await prisma.usuario.create({
      data: {
        email,
        password: hashedPassword,
        nombre,
      },
    });

    // Generar token
    const token = generarToken({
      userId: usuario.id,
      email: usuario.email,
    });

    // Crear respuesta con cookie
    const response = NextResponse.json(
      { 
        mensaje: 'Usuario registrado exitosamente',
        usuario: {
          id: usuario.id,
          email: usuario.email,
          nombre: usuario.nombre,
        }
      },
      { status: 201 }
    );

    // Establecer cookie con el token
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hora
    });

    return response;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return NextResponse.json(
      { error: 'Error al registrar usuario' },
      { status: 500 }
    );
  }
}