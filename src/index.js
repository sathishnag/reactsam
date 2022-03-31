import React from "react";
import ReactDOM from "react-dom";
import EditableTable from "./EditableTable";
import fieldsArr from "./fields";
import "./styles.css";

const defaultData = [
  {
    name: "Yash",
    age: "23",
    relationShip: "haqSeSingle"
  }
];
function App() {
  const getData = row => {
    console.log(row, "rows data");
  };

  return (
    <div className="App">
      <h1>Editable Table</h1>
      <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={fieldsArr}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
