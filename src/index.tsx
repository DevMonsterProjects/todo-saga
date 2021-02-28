import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App/App";
import reducers from "reducers";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
