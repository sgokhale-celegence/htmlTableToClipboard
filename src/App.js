import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Copy Table Data To Clipboard</h1>
      <h2>Sample Table</h2>
      <TableComponentWithClipButton />
    </div>
  );
}

export const TableComponentWithClipButton = () => {
  const copyTableToClipboard = () => {
    var aux = document.createElement("div");
    aux.setAttribute("contentEditable", true);
    aux.innerHTML = document.getElementById("exclusion").innerHTML;
    aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
    document.body.appendChild(aux);
    aux.focus();
    document.execCommand("copy");
    document.body.removeChild(aux);
  };

  return (
    <>
      <div id="exclusion">
        <table border="1">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Exclusion Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Duplicate</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Not Available</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Less Score</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => copyTableToClipboard()}> Click To Copy </button>
    </>
  );
};
