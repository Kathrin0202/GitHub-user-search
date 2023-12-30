import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { NotFound } from "./pages/notFound";
import { UserPage } from "./pages/user";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/users/:login" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default AppRoutes;