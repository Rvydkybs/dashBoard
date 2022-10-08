import { PolarisVizProvider } from "@shopify/polaris-viz";
import "@shopify/polaris-viz/build/esm/styles.css";
import { BarChart } from "@shopify/polaris-viz";

export function BarChartTable() {
  return (
    <div
      className="center"
      style={{
        height: "500px",
        marginTop: "100px",
        alignItems: "center",
        flex: 1,
      }}
    >
      <PolarisVizProvider>
        <BarChart
          data={[
            {
              data: [
                {
                  key: "Access",
                  value: 12,
                },
                {
                  key: "Forbidden",
                  value: 12,
                },
                {
                  key: "Error",
                  value: 20,
                },
              ],
              name: "Country",
            },
            {
              data: [
                {
                  key: "Access",
                  value: 3,
                },
                {
                  key: "Forbidden",
                  value: 8,
                },
                {
                  key: "Error",
                  value: 21,
                },
              ],
              name: "IP",
            },
            {
              data: [
                {
                  key: "Access",
                  value: 12,
                },
                {
                  key: "Forbidden",
                  value: 6,
                },
                {
                  key: "Error",
                  value: 18,
                },
              ],
              name: "Event",
            },
            {
              data: [
                {
                  key: "Access",
                  value: 15,
                },
                {
                  key: "Forbidden",
                  value: 9,
                },
                {
                  key: "Error",
                  value: 3,
                },
              ],
              name: "Total Count",
            },
          ]}
        />
      </PolarisVizProvider>
    </div>
  );
}
