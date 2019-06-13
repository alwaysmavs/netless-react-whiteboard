import * as React from "react";
import * as ReactDOM from "react-dom";

import "white-web-sdk/style/index.css";

import {AppRoutes} from "./pages/AppRoutes";

ReactDOM.render(
    <AppRoutes/>,
    document.getElementById("app-root"),
);
