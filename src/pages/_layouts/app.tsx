import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min- / /h-screen flex-col antialiased">
      <Header />

      {/* TIP:`flex-1` makes the div fill screen height less the header height */}
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        {/* Outlet component specify page content place  */}
        <Outlet />
      </div>
    </div>
  );
}
