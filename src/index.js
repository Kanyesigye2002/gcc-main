import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./Redux";
import Application from "./Application";

ReactDOM.render(
    <Provider store={store}>
        <Application/>
    </Provider>,
    document.getElementById('root')
);

//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