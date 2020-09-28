import React from "react";
import { CopyToClipboard } from "./CopyToClopboard";

export const ExclutionReport = () => {
  const divID = "exclusion";
  const reportName = "Exclusion Report";
  return (
    <>
      <div id={divID}>
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
      <CopyToClipboard divID={divID} reportName={reportName} />
    </>
  );
};

export const OverallSLRReport = () => {
  const divID = "overallSLR";
  const reportName = "Overall SLR Report";
  return (
    <>
      <div id={divID}>
        <table border="1">
          <thead>
            <tr>
              <th>Search Engine</th>
              <th>Search Terms</th>
              <th>Author</th>
              <th>Title</th>
              <th>Source</th>
              <th>Abstract</th>
              <th>Language</th>
              <th>Full Text URL</th>
              <th>Level 1 Status</th>
              <th>Level 2 Status</th>
              <th>Final Status</th>
              <th>SOTA</th>
              <th>
                Device(s) /Brand names in Abstract / Screenshot from Google
                Scholar
              </th>
              <th>Exclusion Reason</th>
              <th>Full Text (A/NA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CopyToClipboard divID={divID} reportName={reportName} />
    </>
  );
};

export const ScoringReport = () => {
  const divID = "scoring";
  const reportName = "Scoring Report";
  return (
    <>
      <div id={divID}>
        <table border="1">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Author</th>
              <th>Devices</th>
              <th>In Vitro or In-Vivo data</th>
              <th>State-of-the-art</th>
              <th>Appropriate Device</th>
              <th>Appropriate Device Application</th>
              <th>Appropriate Patient Group</th>
              <th>Acceptable Report</th>
              <th>Data source type</th>
              <th>Outcome measures</th>
              <th>Follow-up</th>
              <th>Statistical significance</th>
              <th>Valid Conclusions</th>
              <th>Treatment Effect Safety</th>
              <th>Treatment Effect Performance</th>
              <th>Total Score of the Article*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>Duplicate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CopyToClipboard divID={divID} reportName={reportName} />
    </>
  );
};

export const SummaryReport = () => {
  const divID = "Summary";
  const reportName = "Summary Report";
  return (
    <>
      <div id={divID}>
        <table border="1">
          <thead>
            <tr>
              <th>Summary Table</th>
              <th>S. No.</th>
              <th>Author</th>
              <th>Study Type</th>
              <th>Device</th>
              <th>Samples</th>
              <th>Follow-up</th>
              <th>Treatment/ Outcome Measure</th>
              <th>Failure Mode/ Interventions</th>
              <th>Conclusions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CopyToClipboard divID={divID} reportName={reportName} />
    </>
  );
};

export const AppendixReportPubmed = () => {
  const divID = "Appendix";
  const reportName = "Appendix Report - Pubmed";
  return (
    <>
      <div id={divID}>
        <table border="1">
          <thead>
            <tr>
              <th>Search String</th>
              <th>#</th>
              <th>Author(s)</th>
              <th>Title</th>
              <th>Source</th>
              <th>Include Article? Yes / No</th>
              <th>Reason for Exclusion (if applicable)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
              <td>Duplicate</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CopyToClipboard divID={divID} reportName={reportName} />
    </>
  );
};
