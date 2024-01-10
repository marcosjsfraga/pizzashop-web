import { Helmet } from "react-helmet-async";
import MonthRevenueCard from "./components/month-revenue-card";
import MonthOrtersAmountCard from "./components/month-orders-amount-card";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthOrtersAmountCard />
          <MonthRevenueCard />
        </div>
      </div>
    </>
  );
}
