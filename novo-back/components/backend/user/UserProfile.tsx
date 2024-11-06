"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface UserProfile {
  id: string;
  email: string;
  nombre: string | null;
  createdAt: string;
}

export function UserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/usuarios/perfil");
        if (!res.ok) {
          throw new Error("Error al cargar el perfil");
        }
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        toast.error("Error al cargar el perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!profile) {
    return <div>No se pudo cargar el perfil</div>;
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
      <div className="space-y-2">
        <p><strong>Nombre:</strong> {profile.nombre || "No especificado"}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Miembro desde:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
      </div>
    </Card>
  );
}