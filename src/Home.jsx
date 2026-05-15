import Breadcrumb from "./Breadcrumb";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[100dvh] bg-gray-200">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl text-[#2E4053] mt-20 font-bold">
          My Breadcrumb Component 🍞
        </h1>
        <Breadcrumb />
        {/* Aquí se renderizan Homepage, Products, About o FAQ */}
        <div className="mt-4 p-6 bg-white rounded-lg shadow-md w-1/2 text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}