import "./App.css";
import { useState } from "react";
import "@shopify/polaris-viz/build/esm/styles.css";
import { BarChart, PolarisVizProvider } from "@shopify/polaris-viz";

import "./styles.css";
import access from "./components/Tables/access";
import forbidden from "./components/Tables/forbidden";
import error from "./components/Tables/error";

function App() {
  const [slider, setSlider] = useState(0);
  const mouseEvent = () => {
    setSlider(slider + 1);
    if (slider === 2) {
      setSlider(0);
    }
  };
  return (
    <div className="container" style={{ margin: "10px" }}>
      {slider === 0 ? access() : slider === 1 ? forbidden() : error()}
      <button onClick={mouseEvent} title="Switch" className="btn">
        Switch
      </button>
      <div
        style={{
          height: "500px",
        }}
      >
        <BarChart
          data={[
            {
              data: [
                {
                  key: "Monday",
                  value: 3,
                },
                {
                  key: "Tuesday",
                  value: -7,
                },
              ],
              name: "Access",
            },
            {
              data: [
                {
                  key: "Monday",
                  value: 4,
                },
                {
                  key: "Tuesday",
                  value: 0,
                },
              ],
              name: "Forbidden",
            },
            {
              data: [
                {
                  key: "Monday",
                  value: 7,
                },
                {
                  key: "Tuesday",
                  value: 0,
                },
              ],
              name: "Error",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
