import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ component: Component, ...rest }) => {
    return rest.redirect ? (
        <Redirect to={rest.to} from={rest.path} />
    ) : (
        <Route {...rest} render={props => <Component {...props} />} />
    );
}

export default PublicRoutes