import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import CreateBlog from "./components/CreateBlog";
import WannaCheckFetch from "./components/WannaCheckFetch";
import Product from "./components/product";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/blogs/:author?" render={(props) => <Blogs name="Ali" {...props} />}/>
          <Route path="/aboutUs" component={AboutUs} />
          <Redirect from="/about" to="/aboutUs"/>

          <Route path="/products/:id" component={Product} />
          <Route path="/products" component={Products} />

          <Route path="/dashboard" component={Products} />
          <Route path="/login" component={Products} />


          <Route path="/wannaCheckFetch" component={WannaCheckFetch} />
          <Route path="/create" component={CreateBlog} />
          <Route exact path="/" component={HomePage} />
          <Route path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
