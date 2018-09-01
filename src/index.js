import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Hello from "./cpts/hello";
import store from "./store/store.js";
import { Provider } from "react-redux";
const rootel = (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
				{/* <Route path="/hello" component={Hello} /> */}
				<div>
					<p>
						<Link to="/hello">111</Link>
					</p>
				</div>
				<Hello />
			</div>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(rootel, document.getElementById("root"));
registerServiceWorker();
