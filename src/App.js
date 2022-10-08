import "./App.css";
import { useState, useEffect } from "react";

import "./styles.css";
import { BarChartTable } from "./components/BarChart/BarChartTable";
import { DonutChartCountryTable } from "./components/DonutChart/DonutChartCountryTable";

function App() {
  const [slider, setSlider] = useState(0);
  const mouseEvent = () => {
    setSlider(slider + 1);
    if (slider === 2) {
      setSlider(0);
    }
  };
  return (
    <div>
      <DonutChartCountryTable />
    </div>
  );
}

export default App;
