import loadable from "@loadable/component";

const Homepage = loadable(() => import(/* webpackChunkName: "Homepage" */ "pages/Homepage"));

const Example = loadable(() => import(/* webpackChunkName: "Example" */ "pages/Example"));

const Error = loadable(() => import(/* webpackChunkName: "Error" */ "pages/Error"));

const Error403 = loadable(() => import(/* webpackChunkName: "Error403" */ "pages/Error/Error403"));

const Error404 = loadable(() => import(/* webpackChunkName: "Error404" */ "pages/Error/Error404"));

const appRoutes = [
    {
        id: 20,
        path: "/",
        component: Homepage,
        exact: true,
    },
    {
        id: 30,
        path: "/example",
        component: Example,
        exact: true,
    },
    {
        id: 40,
        path: "/error",
        component: Error,
        title: "Error",
        routes: [
            {
                id: 10,
                routeId: 40,
                path: "/error/403",
                component: Error403,
                title: "Error403",
                exact: true,
            },
            {
                id: 20,
                routeId: 40,
                path: "/error/404",
                component: Error404,
                title: "Error404",
                exact: true,
            },
            {
                id: 100,
                routeId: 40,
                path: "/error/*",
                redirect: "/error/404",
            },
        ],
    },
    {
        id: 50,
        path: "*",
        redirect: "/error/404",
    },
];

export default appRoutes;
