import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import store from "./store/store.js";
import { Provider } from "react-redux";
const rootel = (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<App />
			</div>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(rootel, document.getElementById("root"));
registerServiceWorker();
