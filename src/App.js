import React from "react";
import {
  ScoringReport,
  ExclutionReport,
  OverallSLRReport,
  SummaryReport,
  AppendixReport_Pubmed
} from "./BasicHTMLTableComponent";
import { AntTableComponent } from "./AntTableComponent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Copy Table Data To Clipboard</h1>
      <h2>Sample HTML Table - Exclusion Report</h2>
      <ExclutionReport />
      <hr />
      <h2>Sample HTML Table - Scoring Report</h2>
      <ScoringReport />
      <hr />
      <h2>Sample HTML Table - Overall SLR Report</h2>
      <OverallSLRReport />
      <hr />
      <h2>Sample HTML Table - Summary  Report</h2>
      <SummaryReport />
      <hr />
      <h2>Sample HTML Table - Appendix Report - Pubmed</h2>
      <AppendixReport_Pubmed />
      <hr />
      <h2>Sample Ant Table</h2>
      <AntTableComponent />
    </div>
  );
}
