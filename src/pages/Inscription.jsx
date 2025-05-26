import React from "react";

export default function Inscription() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Inscription</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nom complet" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <select className="p-2 border rounded">
          <option>Université</option>
          <option>Université FHB</option>
          <option>Université Nangui Abrogoua</option>
          <option>Université Alassane Ouattara</option>
          <option>INP-HB</option>
          <option>Université Grand-Bassam</option>
          <option>ESATIC</option>
          <option>SUP'TI</option>
        </select>
        <select className="p-2 border rounded">
          <option>Filière</option>
          <option>Informatique</option>
          <option>Médecine</option>
          <option>Économie</option>
          <option>Agroforesterie</option>
          <option>Marketing digital</option>
          <option>Data Science</option>
        </select>
        <input type="password" placeholder="Mot de passe" className="p-2 border rounded" />
        <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">S'inscrire</button>
      </form>
    </div>
  );
}