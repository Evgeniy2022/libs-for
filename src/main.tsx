import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
	<>
    <App />
	 <App />
	 </>
  </React.StrictMode>
);

// (async function (){
	
// 	const { mount} = await import('http://localhost:8080/lib/myApp.js')
// 	mount(document.getElementById('root')!)
// 	console.log('parent')
// })()