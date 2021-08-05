import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./Redux";
import Theme from "./Theme";
import CircularProgress from "@material-ui/core/CircularProgress";

ReactDOM.render(
    <Provider store={store}>
        <React.Suspense fallback={
            <CircularProgress color="primary"/>
        }>
            <Theme/>
        </React.Suspense>
    </Provider>,
    document.getElementById('root')
);

//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