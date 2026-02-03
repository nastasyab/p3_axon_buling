import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "./components/Menu/Menu";
import { LandingPage } from "./pages/LandingPage";
import { Technology } from "./pages/Technology";
import { Demo } from "./pages/Demo";

export function ProjectRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Menu />}>
          <Route index element={<LandingPage />} />
          <Route path="technologie" element={<Technology />} />
          <Route path="demo" element={<Demo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
