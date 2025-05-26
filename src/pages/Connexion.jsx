import React from "react";

export default function Connexion() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Connexion</h2>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Mot de passe" className="p-2 border rounded" />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Se connecter</button>
      </form>
    </div>
  );
}