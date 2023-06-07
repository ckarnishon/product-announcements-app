import { Routes, Route } from "react-router-dom";
import Login from '../pages/Auth/Login'
import Singup from "../pages/Auth/Singup";
import Main from "../pages/Main/Main";

export function AppRoutes() {
 

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/" element={<Main/>}/>
      {/* <Route element={<ProtectedRoute isLogin={} />}>
        
          <Route index element={<Main />} />
        </Route>
      </Route> */}

      {/* <Route path="*" element={} /> */}
    </Routes>
  );
}
