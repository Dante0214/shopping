import { Route, Routes } from "react-router";
import "./App.css";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import NavBar from "./components/NavBar";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setLogin] = useState(false);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/detail/:id"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <ProductDetail />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login onLogin={setLogin} />} />
      </Routes>
    </div>
  );
}

export default App;
