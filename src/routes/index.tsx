import { RootLayout } from "@/components/rootLayout";
import Consult from "@/pages/consult";
import Home from "@/pages/home";
import Hostinger from "@/pages/hostinger";
import Linkedin from "@/pages/linkedin";
import Pix from "@/pages/pix";
import { Route, Routes } from "react-router";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hostinger" element={<Hostinger />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/consult" element={<Consult />} />
      </Route>
    </Routes>
  );
};
