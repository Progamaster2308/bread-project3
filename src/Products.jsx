import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="bg-[#EDBB99] p-4 w-96 h-96 flex flex-col items-center rounded-lg shadow-inner">
      <h1 className="text-2xl font-bold">Products Page</h1>
      <Outlet />
    </div>
  );
}