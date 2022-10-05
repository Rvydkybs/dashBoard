import * as ReactBootStrap from "react-bootstrap";
import { jsonData } from "../../JsonData/json_data(1)";
import "../../styles.css";
function forbidden() {
  return (
    <div className="container" style={{ margin: "10px" }}>
      <ReactBootStrap.Table
        cellPadding="10"
        className="table"
        striped
        bordered
        hove
      >
        <thead>
          <tr>
            <th className="th">Status</th>
            <th className="th">Source</th>
            <th className="th">From</th>
            <th className="th">Detail </th>
          </tr>
        </thead>
        <tbody>
          {jsonData.FORBIDDEN.map((item) => (
            <tr key={item.source} className="tr">
              <td className="tdStatus">
                <div className="tablediv">{item.status}</div>
              </td>
              <td className="td">
                {item.source.index || item.source.generic || item.source.login}
              </td>
              <td className="td">
                {item.from.TR ? item.from.TR : item.from.UK}
              </td>
              <td className="td">{item.detail}</td>
            </tr>
          ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default forbidden;
