import React, { useState } from "react";
import { Report_table } from "./components/report_table";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Error_reminder } from "./components/error_reminder";
import "./App.css"

function App() {
  const [reports, setReports] = useState(null);
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [processingMsg, setProcessingMsg] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    setErrorMsg(null);
    event.preventDefault();
    if (file) {
      setProcessingMsg("Processing...");
      const formData = new FormData();
      formData.append("file", file);
      fetch("https://flask-server-deploy.herokuapp.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessingMsg(null);
          setReports(data["reports"]);
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
    } else {
      setErrorMsg("Please upload a file");
    }
  };

  // Define the handleClick function.
  const handleClick = (e) => {
    setReports(null);
    setErrorMsg(null);
    e.preventDefault();
    fetch("https://flask-server-deploy.herokuapp.com/upload", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data["reports"] !== null && data["reports"].length !== 0) {
          setReports(data["reports"]);
        } else {
          setErrorMsg("No report is loaded, please upload a file");
        }
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  return (
    <div className="main">
      <Header />
      <form className="col_cont" onSubmit={handleSubmit}>
        <input className="choose_file_cont" type="file" onChange={handleFileChange} />
        <button className="scan_btn" type="submit">Scan it!</button>
      </form>
      <div className="view_cont" >
        <form onClick={handleClick}>
          <button className="view_btn" type="button">View Loaded Report</button>
        </form>
      </div>
      
      {processingMsg && <h1>{processingMsg}</h1>}
      {reports && reports.length !== 0 && <Report_table reports={reports} />}
      {errorMsg && <Error_reminder error={errorMsg} />}
      <Footer />
    </div>
  );
}

export default App;
