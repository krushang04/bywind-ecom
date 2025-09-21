import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Orders from "./pages/Orders";
import Dashboard from "./pages/dashboard/Dashboard";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
