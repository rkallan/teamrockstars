import PropTypes from "prop-types";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import styles from "./resources/styles/routes.module.scss";

const SubRoutes = ({ routes }) => {
    const location = useLocation();

    return (
        <section className={styles.main} variant="unit">
            <Switch location={location}>
                {routes.map((route) => {
                    const { id, path, exact, authenticated, redirect } = route;

                    if (redirect)
                        return (
                            <Redirect
                                key={id}
                                exact={exact}
                                from={path}
                                to={redirect}
                            />
                        );

                    if (authenticated)
                        return <PrivateRoute key={id} {...route} />;

                    return (
                        <Route
                            key={id}
                            path={path}
                            exact={exact}
                            render={(routeProps) => (
                                <route.component
                                    {...routeProps}
                                    routes={route.routes}
                                />
                            )}
                        />
                    );
                })}
            </Switch>
        </section>
    );
};

SubRoutes.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SubRoutes;
