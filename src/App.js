import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import CreateBlog from "./components/CreateBlog";
import WannaCheckFetch from "./components/WannaCheckFetch";
import Product from "./components/product";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          {/*<Route path="/blogs"  component={Blogs}/>*/}
          <Route
            path="/blogs"
            render={(props) => <Blogs name="Ali" {...props} />}
          />
          <Route path="/aboutUs" component={AboutUs} />

          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />

          <Route path="/wannaCheckFetch" component={WannaCheckFetch} />
          <Route path="/create" component={CreateBlog} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
