import React from "react";
import SignupPage from "./components/pages/SignupPage";
import GlobalStyle from './GlobalStyles';
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute"
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage"
import UpdateProfilePage from "./components/pages/UpdateProfilePage";

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path='/' component={DashboardPage} />
        <PrivateRoute path='/update-profile' component={UpdateProfilePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/forgot-password' component={ForgotPasswordPage} />
      </Switch>
    </AuthProvider>
    </Router>
    </>

  );
}

export default App;
