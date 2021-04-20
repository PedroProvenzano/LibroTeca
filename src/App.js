import React, { useEffect } from "react";
// Actions
import fetchCategories from "./actions/categoriesAction";
import fetchBooks from "./actions/bookAction";
import windowSizeAction from "./actions/windowSizeAction";
// Styled
import GlobalStyle from "./components/GlobalStyle";
// Redux
import { useDispatch } from "react-redux";
// Components
import Nav from "./components/Nav";
// Pages
import Home from "./pages/home";
import Category from "./pages/category";
import Search from "./pages/search";
// Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(windowSizeAction());
    function handleResize() {
      dispatch(windowSizeAction());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div className="App">
      <GlobalStyle />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/category/:category" exact>
          <Category />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <Nav />
    </div>
  );
}

export default App;
