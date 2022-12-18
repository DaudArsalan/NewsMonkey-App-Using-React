import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <Router basename="/NewsMonkey-App-Using-React">
        <Navbar />

        <Routes>
          <Route
            exact
            path="/NewsMonkey-App-Using-React"
            element={
              <News
                apiKey={apiKey}
                key="general"
                category="general"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                key="sports"
                category="sports"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                category="science"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                category="business"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                category="technology"
                pageSize={9}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                category="health"
                pageSize={9}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
