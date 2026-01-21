import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

export function ProjectRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
