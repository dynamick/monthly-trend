import "./App.css";
import MonthlyTrend from "./components/MonthlyTrend/MonthlyTrend.tsx";
import { useState } from "react";

function App() {
  const [months, setMonths] = useState<number[]>([]);
  return (
    <div>
      <h1>Monthly Trend</h1>
      <p>
        The monthly trend component is used to quickly view the annual amounts
        of certain documents (invoices, purchases, estimates, ...) and to select
        one or more months to filter a list underlying.
      </p>
      <MonthlyTrend onSelectionChange={setMonths} />
      <h2>Selected Months</h2>
      <p>
        {months.length === 0 ? "No month selected" : ""}
        {months.map((month) => month + 1).join(", ")}
      </p>
    </div>
  );
}

export default App;
