import React from "react";
import { useDark } from "../context/dark";
import { Link } from "react-router-dom";

const Configuracion = () => {
  const { dark, setDark } = useDark();
  return (
    <div>
      <button
        className="text-white bg-blue-500  "
        onClick={() => setDark(!dark)}
      >
        {dark ? "Desactivar " : "Activar "} modo oscuro
      </button>
      <div>
        <Link to="/">Ir a la pagina de inicio</Link>
      </div>
    </div>
  );
};

export default Configuracion;
