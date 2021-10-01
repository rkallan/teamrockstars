import { Suspense } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import styles from "./resources/styles/error.module.scss";

const SubRoutes = loadable(
    () => import(/* webpackChunkName: "SubRoutes" */ "Routes/SubRoutes"),
    {
        fallback: <div>Loading</div>,
    }
);

const Error = ({ routes }) => {
    return (
        <div className={styles.container}>
            <div className={styles.unit} variant="content">
                <Suspense>
                    <SubRoutes routes={routes} />
                </Suspense>
            </div>
        </div>
    );
};

Error.defaultProps = {
    routes: undefined,
};

Error.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};

export default Error;
