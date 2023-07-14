import { Routes, Route } from "react-router-dom";
import { useAuth } from "../redux/Hooks/useAuth";

import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/Auth/Login";
import Singup from "../pages/Auth/Singup";
import Main from "../pages/Main/Main";
import LayoutHeader from "../components/Layout/LayoutHeader";
import Profile from "../pages/Profile/Profile";
import Seller from "../pages/Seller/Seller";
import Article from "../pages/Article/Article";
import MyArticle from "../pages/MyArticle/MyArticle";

export function AppRoutes() {

  const { isAuth } = useAuth();
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/singup" element={<Singup />} />
      <Route path="/" element={<Main />} />
      <Route element={<LayoutHeader />}>
        <Route path="profile" element={<Profile />} />
        <Route path="seller" element={<Seller />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="myarticle/:id" element={<MyArticle />} />
      </Route>
      <Route element={<ProtectedRoute isAllowed={isAuth} />}></Route>
    </Routes>
  );
}
