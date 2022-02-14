import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header&Sidebar";
import SignIn from "./Components/SignIn.js";
import { createContext, useState } from "react";
import Dashboard from "./Components/Dashboard";
import NewsDetails from "./Components/NewsDetails";
import Footer from "./Components/Footer";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <Route path="/newsDetails/:newsId">
            <NewsDetails/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
