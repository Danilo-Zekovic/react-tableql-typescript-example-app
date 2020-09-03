import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import DefaultTable from './components/DefaultTable';
import SortTable from './components/SortTable';
import PaginationTable from './components/PaginationTable';
import CustomStylesTable from './components/CustomStylesTable/CustomStylesTabel';

const App = () => {

  const [tableToShow, setTableToShow] = useState("DefaultTable")


  const getTableComponent = (table: string) => {
    switch (table) {
      case "DefaultTable":
        return <DefaultTable />
      case "SortTable":
        return <SortTable />
      case "PaginationTable":
        return <PaginationTable />
      case "CustomStylesTable":
        return <CustomStylesTable />
      default:
        break;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example app for <code>react-tableql</code> using TypeScript.
        </p>
        <a
          className="App-link"
          href="https://github.com/Danilo-Zekovic/react-tableql"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-TableQL GitHub
        </a>
      </header>
      <button onClick={() => setTableToShow("DefaultTable")}>DefaultTable</button>
      <button onClick={() => setTableToShow("SortTable")}>SortTable</button>
      <button onClick={() => setTableToShow("PaginationTable")}>PaginationTable</button>
      <button onClick={() => setTableToShow("CustomStylesTable")}>CustomStylesTable</button>
      <div>
        <h3>{tableToShow}</h3>
        {getTableComponent(tableToShow)}
      </div>
      <br/>
    </div>
  );
}

export default App;
