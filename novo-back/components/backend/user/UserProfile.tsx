"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button, Input } from "@/components/ui/button";
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
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/usuarios/perfil");

        if (res.status === 404) {
          throw new Error("Perfil no encontrado (Error 404)");
        }

        if (!res.ok) {
          throw new Error("Error al cargar el perfil");
        }

        const data = await res.json();
        setProfile(data);
        setFormData({ nombre: data.nombre || "", email: data.email });
      } catch (error) {
        toast.error("Error al cargar el perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const res = await fetch("/api/usuarios/actualizar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error al actualizar los datos del perfil");
      }

      toast.success("Perfil actualizado exitosamente");
      setIsUpdating(false);
      const data = await res.json();
      setProfile(data);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al actualizar perfil");
    }
  };

  const handleChangePassword = async (newPassword: string) => {
    try {
      const res = await fetch("/api/usuarios/cambiar-contraseña", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });

      if (!res.ok) {
        throw new Error("Error al cambiar la contraseña");
      }

      toast.success("Contraseña cambiada exitosamente");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al cambiar la contraseña");
    }
  };

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

      <Button onClick={() => setIsUpdating(true)} className="mt-4">Actualizar Perfil</Button>
      {isUpdating && (
        <div className="space-y-4 mt-4">
          <Input
            type="text"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            placeholder="Nuevo nombre"
          />
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Nuevo email"
          />
          <Button onClick={handleUpdateProfile}>Actualizar Datos</Button>
        </div>
      )}

      <Button onClick={() => handleChangePassword("newpassword123")} className="mt-4">Cambiar Contraseña</Button>
    </Card>
  );
}
