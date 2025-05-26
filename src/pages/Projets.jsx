import React from "react";

export default function Projets() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projets collaboratifs</h2>
      <form className="mb-6 flex flex-col gap-4">
        <input type="text" placeholder="Nom du projet" className="p-2 border rounded" />
        <textarea placeholder="Décris ton projet..." className="p-2 border rounded" rows="4" />
        <select className="p-2 border rounded">
          <option>Thème</option>
          <option>Mémoire</option>
          <option>Startup</option>
          <option>Révision en groupe</option>
          <option>Code collaboratif</option>
        </select>
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Publier le projet</button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">Projets disponibles</h3>
        <ul className="list-disc pl-5">
          <li>Création d'une appli de tutorat entre étudiants</li>
          <li>Recherche de binômes pour un mémoire en sociologie</li>
        </ul>
      </div>
    </div>
  );
}