import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  return (
    <div className="bg-white shadow-sm rounded-md">
      <ul className="flex border p-2 gap-4 text-xl text-[#2E4053] items-center">
        {/* LINK: HOME */}
        <Link
          to={"home"}
          className={`cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all ${
            location.pathname === "/home" ? "bg-[#b572d6] text-white" : ""
          }`}
        >
          Home
        </Link>

        {/* REVELACIÓN PROGRESIVA: PRODUCTS */}
        {location.pathname.includes("/products") && (
          <>
            <span className="text-gray-400 font-bold text-xl"> / </span>
            <Link
              to={"products"}
              className={`hover:text-black cursor-pointer hover:bg-[#E8DAEF] p-4 rounded-md transition-all ${
                location.pathname === "/products" ? "bg-[#b572d6] text-white" : "bg-[#E8DAEF] text-black"
              }`}
            >
              Products
            </Link>
          </>
        )}

        {/* REVELACIÓN PROGRESIVA: SINGLE PRODUCT */}
        {location.pathname.includes("/products/") && (
          <>
            <span className="text-gray-400 font-bold text-xl"> / </span>
            <Link
              to={location.pathname}
              className="bg-[#b572d6] text-white cursor-pointer p-4 rounded-md transition-all"
            >
              Single Product
            </Link>
          </>
        )}

        {/* RUTAS BÁSICAS (Para demostración de ubicación) */}
        {location.pathname === "/about" && (
          <>
            <span className="text-gray-400 font-bold text-xl"> / </span>
            <li className="bg-[#b572d6] text-white p-4 rounded-md">About</li>
          </>
        )}
        
        {location.pathname === "/faq" && (
          <>
            <span className="text-gray-400 font-bold text-xl"> / </span>
            <li className="bg-[#b572d6] text-white p-4 rounded-md">FAQ</li>
          </>
        )}
      </ul>
    </div>
  );
}