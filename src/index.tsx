import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App/App";
import reducers from "reducers";
import { todoSaga } from "sagas/todoSaga";

import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(todoSaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
