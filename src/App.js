import Tasks from "./features/tasks/TasksPage";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";

const App = () => {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/author">About author</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/orders">
                        <Tasks />
                    </Route>
                    <Route path="/author">
                        <Author />
                    </Route>
                    <Route path="/">
                        <Redirect to="/orders" />
                    </Route>
                </Switch>
            </nav>
        </HashRouter>
    );
}

export default App;