import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import ViewCustomers from "./viewCustomers";
import EditCustomer from "./editCustomer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/viewCustomers" element={<ViewCustomers />} />
        <Route path="/editCustomers" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
