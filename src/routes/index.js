import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "../layouts";

import PublicRoutes from "./public";
import PrivateRoute from "./private";

const Routes = () => {
    return(
        <Router>
            <Layout 
                children={(
                    <Switch>
                        {routes.map((route, index) => {
                            if (route.auth) {
                            return (
                                <PrivateRoute key={index} {...route}/>
                                )
                            }
                            return (
                                <PublicRoutes key={index} {...route} />
                            )  
                        })}
                    </Switch>
                )}
            />
        </Router>
    )
}

export default Routes