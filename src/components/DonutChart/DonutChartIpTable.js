import { useState, useEffect } from "react";
import DonutChart from "react-donut-chart";
import { jsonData } from "../../JsonData/json_data(1)";

export function DonutChartIpTable() {
  const [accessCountryCounter, setAccessCountryCounter] = useState(0);
  const [forbiddenCountryCounter, setforbiddenountryCounter] = useState(0);
  const [errorCountryCounter, setErrorCountryCounter] = useState(0);
  const [counter, setCounter] = useState([
    {
      trCounter: 0,
      ukCounter: 0,
      ip: 0,
      detail: 0,
    },
  ]);
  useEffect(() => {
    accessCount();
    forbiddenCount();
    errorCount();
  }, []);
  const accessCount = () => {
    jsonData &&
      jsonData.ACCESS.map((item) => {
        if (item.from.TR) {
          setCounter(
            [...counter].map((index) => {
              index.trCounter = index.trCounter + 1;
              return index.trCounter;
            })
          );
        } else {
          setCounter(
            [...counter].map((index) => {
              index.ukCounter = index.ukCounter + 1;
              return index.ukCounter;
            })
          );
        }
        return counter;
      });
    counter.map((item) =>
      item.trCounter > item.ukCounter
        ? setAccessCountryCounter(item.trCounter)
        : setAccessCountryCounter(item.ukCounter)
    );
    return accessCountryCounter;
  };
  const forbiddenCount = () => {
    jsonData &&
      jsonData.FORBIDDEN.map((item) => {
        if (item.from.TR) {
          setCounter(
            [...counter].map((index) => {
              index.trCounter = index.trCounter + 1;
              return index.trCounter;
            })
          );
        } else {
          setCounter(
            [...counter].map((index) => {
              index.ukCounter = index.ukCounter + 1;
              return index.ukCounter;
            })
          );
        }
        return counter;
      });
    counter.map((item) =>
      item.trCounter > item.ukCounter
        ? setforbiddenountryCounter(item.trCounter)
        : setforbiddenountryCounter(item.ukCounter)
    );
    return forbiddenCountryCounter;
  };
  const errorCount = () => {
    jsonData &&
      jsonData.ERROR.map((item) => {
        if (item.from.TR) {
          setCounter(
            [...counter].map((index) => {
              index.trCounter = index.trCounter + 1;
              return index.trCounter;
            })
          );
        } else {
          setCounter(
            [...counter].map((index) => {
              index.ukCounter = index.ukCounter + 1;
              return index.ukCounter;
            })
          );
        }
        return counter;
      });
    counter.map((item) =>
      item.trCounter > item.ukCounter
        ? setErrorCountryCounter(item.trCounter)
        : setErrorCountryCounter(item.ukCounter)
    );
    return errorCountryCounter;
  };
  return (
    <div
      className="center"
      style={{
        alignItems: "center",
        flex: 1,
        marginTop: "100px",
      }}
    >
      <DonutChart
        comparisonMetric={{
          accessibilityLabel: "trending down 20%",
          metric: "10%",
          trend: "negative",
        }}
        data={[
          {
            label: "Access",
            value: accessCountryCounter, //calculate the most
          },
          {
            label: "Forbidden",
            value: forbiddenCountryCounter,
          },
          {
            label: "Error",
            value: errorCountryCounter,
          },
        ]}
      />
    </div>
  );
}
