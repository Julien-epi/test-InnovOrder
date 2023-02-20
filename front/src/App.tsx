import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProfileAccount from "./components/ProfileAccount";
import SearchProduct from "./components/SearchProduct";

function App() {
  return (
    <div>
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<ProfileAccount />} />
          <Route path="/searchProduct/" element={<SearchProduct />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
