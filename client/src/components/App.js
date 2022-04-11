import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Survey from "./Survey";
import { fetchUser } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/surveys" element={<Dashboard />} />
            <Route path="/surveys/new" element={<Survey />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null)(App);
