import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import loadable from "@loadable/component";
import AuthProvider from "features/authentication/AuthProvider";

const Template = loadable(
    () => import(/* webpackChunkName: "Template" */ "Template"),
    {
        fallback: <div>Loading</div>,
    }
);

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Suspense>
                    <Router>
                        <Template />
                    </Router>
                </Suspense>
            </AuthProvider>
        </Router>
    );
};

export default App;
