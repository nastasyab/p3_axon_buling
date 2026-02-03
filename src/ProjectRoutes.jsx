import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { VibrationButton } from "./components/VibrationButton/VibrationButton";

export function ProjectRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vibration" element={<VibrationButton />} />

          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
