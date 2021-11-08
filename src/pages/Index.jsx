import React from "react";
import { Link } from "react-router-dom";
import { useDark } from "../context/dark";

const Index = () => {
  const { dark } = useDark();
  return (
    <div className={`${dark ? "bg-gray-500 " : "bg-gray-100 "}`}>
      Hola desde el index
      <div>
        <Link to="/configuracion"> Ir a configuracion</Link>
      </div>
    </div>
  );
};

export default Index;
