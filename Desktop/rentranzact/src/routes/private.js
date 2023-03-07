import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
    component: Component,
    module: Module,
    isAuthenticated,
    ...rest
}) => {

    //Checking permission to access some routes
    function checkPermission() {}

    return rest.redirect ? (
        <Redirect to={rest.to} from={rest.path} />
    ) : (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Module {...props}>
                        {checkPermission() ? (
                            <Component {...props} />
                        ) : (
                            <div>
                                {/* <Alert /> */}
                            </div>
                        )}
                    </Module>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};


export default PrivateRoute;
