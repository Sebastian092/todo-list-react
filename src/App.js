import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";

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
                <Route path="/orders/:id">
                        <TaskPage />
                    </Route>
                    <Route path="/orders">
                        <TasksPage />
                    </Route>
                    <Route path="/author">
                        <AuthorPage />
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