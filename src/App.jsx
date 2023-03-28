import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { NoPage } from "./components/NoPage";

export function App() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/Fvcundo/" element={<Landing />}>
              <Route path="/Fvcundo/:Lang" element={<Landing />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}
