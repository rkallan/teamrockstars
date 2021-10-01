import { Suspense } from "react";
import loadable from "@loadable/component";

import styles from "./resources/styles/template.module.scss";

const Routes = loadable(
    () => import(/* webpackChunkName: "Routes" */ "Routes"),
    {
        fallback: <div>Loading</div>,
    }
);

const Header = loadable(
    () => import(/* webpackChunkName: "Header" */ "components/Header"),
    {
        fallback: <div>Loading</div>,
    }
);

const Footer = loadable(
    () => import(/* webpackChunkName: "Footer" */ "components/Footer"),
    {
        fallback: <div>Loading</div>,
    }
);

const Template = () => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <Suspense>
                    <Routes />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Template;
