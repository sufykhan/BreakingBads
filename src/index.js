import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
// import {Provider} from "react-redux"
// import {createStore,applyMiddleware} from "redux"
// import thunk from "redux-thunk";
// import reducers from "./reducers/index.js"
import "./index.css"
//import { composeWithDevTools } from "redux-devtools-extension";
// const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(<Router><App/></Router>,document.getElementById("root"))