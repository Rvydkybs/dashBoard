import { useState, useEffect } from "react";
import DonutChart from "react-donut-chart";
import { jsonData } from "../../JsonData/json_data(1)";

export function DonutChartCountryTable() {
  const [totalCount, setTotalCount] = useState([]);
  const [countryWithLength, setCountryWithLenght] = useState([]);
  const [detailWithLength, setDetailWithLenght] = useState([]);
  const [ipWithLength, setIpWithLenght] = useState([]);

  const setDataFunc = () => {
    if (jsonData) {
      const dataObject = {
        ACCESS: jsonData.ACCESS,
        FORBIDDEN: jsonData.FORBIDDEN,
        ERROR: jsonData.ERROR,
      };

      const tempFromDatas = [
        ...jsonData.ACCESS,
        ...jsonData.FORBIDDEN,
        ...jsonData.ERROR,
      ].map((item) => item.from);

      const detailDatas = [
        ...jsonData.ACCESS,
        ...jsonData.FORBIDDEN,
        ...jsonData.ERROR,
      ].map((item) => item.detail);
      calculateFromKeys(tempFromDatas);

      calculateFromValues(tempFromDatas);

      calculateKeyWithIpAddresses(tempFromDatas);

      calculateFromDetails(detailDatas);
    }
  };

  const calculateKeyWithIpAddresses = (tempFromDatas) => {
    // {TR: ["1123.123","123.asd"], UK:  ["1123.123","123.asd"], CHINA:  ["1123.123","123.asd"]}
  };
  const calculateFromKeys = (tempFromDatas) => {
    let fromKeys = [];
    let totalKeys = [];

    tempFromDatas.map((item) => {
      if (fromKeys.indexOf(Object.keys(item)[0]) == -1) {
        fromKeys.push(Object.keys(item)[0]);
      }

      totalKeys.push(Object.keys(item)[0]);
    });
    let keyWithLengthObjects = {};

    fromKeys.map((item) => {
      keyWithLengthObjects[item] = totalKeys.filter(
        (key) => key == item
      ).length;
    });

    setCountryWithLenght(keyWithLengthObjects);
  };

  const calculateFromValues = (tempFromDatas) => {
    let fromValues = [];
    let totalValues = [];
    var total = 0;

    tempFromDatas.map((item) => {
      if (fromValues.indexOf(Object.values(item)[0]) == -1) {
        fromValues.push(Object.values(item)[0]);
      }

      totalValues.push(Object.values(item)[0]);
    });

    let valueWithLengthObjects = {};

    fromValues.map((item) => {
      valueWithLengthObjects[item] = totalValues.filter(
        (key) => key == item
      ).length;
    });
    Object.keys(ipWithLength).map((item) => {
      //for total ip count
      total += parseInt(ipWithLength[item]);
      return total;
    });
    setTotalCount(total);
    setIpWithLenght(valueWithLengthObjects);
  };

  const calculateFromDetails = (detailDatas) => {
    let detailValues = [];
    let contentValues = [];
    detailDatas.map((item) => {
      if (detailValues.indexOf(Object.values(item)) == -1) {
        detailValues.push(Object.values(item));
      }

      contentValues.push(Object.values(item));
    });

    let detailWithLengthObjects = {};

    detailValues.map((item) => {
      detailWithLengthObjects[item] = contentValues.filter(
        (key) => key == item
      ).length;
    });
    console.log("first", detailWithLengthObjects.length);
    setDetailWithLenght(detailWithLengthObjects);
  };

  useEffect(() => {
    setDataFunc();
  }, []);

  return (
    countryWithLength &&
    ipWithLength && (
      <div
        className="center"
        style={{
          margin: "10px",
          marginLeft: "250px",
          alignItems: "center",
          flex: 1,
          marginTop: "100px",
        }}
      >
        <div style={{ flex: 1 }}>
          <p>
            <b>INCOMING VISITS:</b>
          </p>
          <DonutChart
            comparisonMetric={{
              accessibility: "trending down 20%",
              metric: "10%",
              trend: "negative",
            }}
            data={Object.keys(countryWithLength).map((item) => {
              return { label: item, value: countryWithLength[item] };
            })}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p>
            <b>IP COUNT:</b>
          </p>
          <DonutChart
            comparisonMetric={{
              accessibility: "trending down 20%",
              metric: "10%",
              trend: "negative",
            }}
            data={Object.keys(ipWithLength).map((item) => {
              return { label: item, value: ipWithLength[item] };
            })}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p>
            <b>DETAIL COUNT:</b>
          </p>
          <DonutChart
            comparisonMetric={{
              accessibility: "trending down 20%",
              metric: "10%",
              trend: "negative",
            }}
            data={Object.keys(detailWithLength).map((item) => {
              return { label: item, value: detailWithLength[item] };
            })}
          />
        </div>
        <div
          className="totalCount"
          style={{ justifyContent: "space-between", marginRight: "30px" }}
        >
          <div>Total Number Of Connections: </div>
          <div>{totalCount}</div>
        </div>
      </div>
    )
  );
}
