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
      <h2>Without Toolbar</h2>
        <AppPDFViewer
          showToolbar={false}
          defaultLayoutProps={{
            style: { width: "100%", height: "550px" },
          }}
        />
        <h2>Mobile</h2>
        <AppPDFViewer
          defaultLayoutProps={{
            style: { width: "500px" },
          }}
        />
    </div>
  );
}

export default App;
