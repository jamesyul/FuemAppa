import React, { useState } from "react";

const Home = () => {
  // Lista de aplicaciones con imagen, título y descripción
  const [filteredApps, setFilteredApps] = useState([
    {
      image: "./../../../CodeAssembler.png",
      title: "CodeAssembler",
      description: "",
      //description: "Aplicación para gestionar y rastrear sistemas y ensamblajes de piezas.",
    },
    {
      image: "./../../../csv_data_plotter_app_icon.png",
      title: "Nexus CSV data plotter",
      description: "",
      // description: "Aplicación para analizar, visualizar y exportar los datos recopilados por la memoria SD de Nexus",
    },
    {
      image: "./../../../cs.png",
      title: "Workshop CheckIn",
      description: "",
      // description: "Aplicación para analizar, visualizar y exportar los datos recopilados por la memoria SD de Nexus",
    },
  ]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Mostrar las tarjetas si hay datos */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {filteredApps.map((app, index) => (
            <div key={index} className="border p-4 rounded shadow-lg">
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover" />
              <h2 className="text-xl font-bold">{app.title}</h2>
              <p>{app.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results-message">No se encontraron aplicaciones con ese nombre.</p>
      )}
    </div>
  );
};

export default Home;