import React from "react";

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur UNIVERSCI</h1>
      <p className="text-lg text-gray-700 mb-6">
        La plateforme qui rassemble les étudiants, entrepreneurs et innovateurs ivoiriens ! 🌍✨
        Que tu sois en médecine à Cocody, en agro à Yamoussoukro ou en tech à Grand-Bassam, trouve ici des ressources,
        des projets et une communauté pour t’aider à briller.
      </p>
      <a href="/inscription" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Rejoindre la communauté
      </a>
    </div>
  );
}