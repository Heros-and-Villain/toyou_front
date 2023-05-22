import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import CardMaker from "../pages/CardMaker";
import Sharing from "../pages/Sharing";
import Templates from "../pages/Templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<CardMaker />} />
        <Route path="/share" element={<Sharing />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
