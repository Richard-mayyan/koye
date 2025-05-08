"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PasswordResetForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Reset password for:", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif mb-1">Content de vous revoir</h1>
          <p className="text-sm text-gray-600">Restaurez votre mot de passe</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full border-gray-200 placeholder:text-gray-400 placeholder:text-xs"
            required
          />
          <br />

          <input
            type="password"
            placeholder="MOT DE PASSE"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full border-gray-200 placeholder:text-gray-400 placeholder:text-xs"
            required
          />

          <Button
            type="submit"
            className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-6"
          >
            RESTAURER LE MOT DE PASSE
          </Button>
        </form>

        <div className="text-center mt-6 border-t pt-6">
          <Link href="/login" className="text-xs text-gray-800 font-medium">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}
