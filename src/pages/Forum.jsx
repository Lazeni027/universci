import React from "react";

export default function Forum() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Forum étudiant</h2>
      <form className="mb-6 flex flex-col gap-4">
        <input type="text" placeholder="Titre de la question" className="p-2 border rounded" />
        <textarea placeholder="Décris ton problème ou ta question..." className="p-2 border rounded" rows="4" />
        <select className="p-2 border rounded">
          <option>Catégorie</option>
          <option>Tech & Innovation</option>
          <option>Entrepreneuriat</option>
          <option>Santé</option>
          <option>Art & Culture</option>
          <option>Agriculture & Environnement</option>
        </select>
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Publier</button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">Discussions récentes</h3>
        <ul className="list-disc pl-5">
          <li>Comment se lancer dans une startup tech en étant étudiant ?</li>
          <li>Quels sont les débouchés en agroéconomie à l’INP-HB ?</li>
        </ul>
      </div>
    </div>
  );
}