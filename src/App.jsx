import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";

export function App() {
  return (
    <div>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Landing />}>
              <Route path=":Lang" element={<Landing />} />
            </Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}
