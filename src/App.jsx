import Products from "./Components/Products";
import Header from "./Components/Header";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart/Cart";
import "./Components/Cart/Cart.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
