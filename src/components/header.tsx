import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { ThemeToggle } from "./theme/theme-toggle";
import NavLink from "./nav-link";
import { Separator } from "./ui/separator";
import AccountMenu from "./account-menu";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="w-8 h-8 text-red-700" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className="flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Dashboard
          </NavLink>

          <NavLink to="/orders" className="flex items-center">
            <UtensilsCrossed className="h-4 w-4 mr-1" />
            Pedidos
          </NavLink>
        </nav>

        {/* TIP:`ml-auto` send components inside the do the right  */}
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
