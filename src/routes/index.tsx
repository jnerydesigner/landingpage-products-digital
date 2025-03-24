import { RootLayout } from "@/components/rootLayout";
import Home from "@/pages/home";
import Hostinger from "@/pages/hostinger";
import { Route, Routes } from "react-router";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hostinger" element={<Hostinger />} />
      </Route>
    </Routes>
  );
};
