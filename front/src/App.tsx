import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <div className="mt-3">
        <Routes>
          <Route path="/createUser" element={<Register />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
