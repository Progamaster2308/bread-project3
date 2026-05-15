import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  // Función para aplicar estilos dinámicos
  const getLinkClass = (path) => {
    const baseClass = "cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all duration-300";
    const activeClass = "bg-[#b572d6] text-white";
    return `${baseClass} ${location.pathname === path ? activeClass : ""}`;
  };

  return (
    <div className="bg-white rounded-md shadow-sm">
      <ul className="flex border p-2 gap-6 text-xl text-[#2E4053] items-center">
        <Link to="/home" className={getLinkClass("/home")}>
          Home
        </Link>
        
        <span className="text-gray-400 font-bold">/</span>

        <Link to="/products" className={getLinkClass("/products")}>
          Products
        </Link>

        <span className="text-gray-400 font-bold">/</span>

        <Link to="/about" className={getLinkClass("/about")}>
          About
        </Link>

        <span className="text-gray-400 font-bold">/</span>

        <Link to="/faq" className={getLinkClass("/faq")}>
          FAQ
        </Link>
      </ul>
    </div>
  );
}