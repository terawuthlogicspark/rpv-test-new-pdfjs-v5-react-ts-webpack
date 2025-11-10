import React from "react";
import "./App.css";
import { AppPDFViewer } from "./components/AppPDFViewer";
// @ts-ignore
import pdfViewerPackage from "@pdf-viewer/react/package.json";

function App() {
  console.log("pdfViewerPackage", pdfViewerPackage);
  
  const pdfjsVersion = pdfViewerPackage.dependencies?.["pdfjs-dist"] || "N/A";

  return (
    <div className="container">
      <h2>@pdf-viewer/react: {pdfViewerPackage.version}</h2>
      <h2>pdfjs-dist: 5.4.54</h2>
      {/* <br /> */}
      <h2>Default Toolbar</h2>
      <AppPDFViewer />
    </div>
  );
}

export default App;
