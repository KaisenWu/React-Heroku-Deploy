import React from 'react';
import "./../App.css";

export const Report_table = (props) => {
  return (
    <div>
    <p className="table_title">Scan Result</p>
    <table className="table_cont">
        <thead>
          <tr>
            <th className="th_cont">hash_value (MD5 or Sha256)</th>
            <th className="th_cont">Fortinet Detection Name</th>
            <th className="th_cont">Number of Engines Detected</th>
            <th className="th_cont">Scan Date</th>
          </tr>
        </thead>
        <tbody>
          {props.reports.map((report) => (
              <tr>
                <td style={{padding:'10 0'}}>{report.hash}</td>
                <td className="table_text">{report.f_result ? report.f_result:"N/A"}</td>
                <td className="table_text" style={{width:'20%'}}>{report.detection_cnt ? report.detection_cnt:0}</td>
                <td className="table_text">{report.date ? report.date:"N/A"}</td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
  )
}
