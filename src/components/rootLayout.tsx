import { Header } from "@/components/header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[100px,1fr,50px] bg-gray-100">
      <Header />
      <main className="w-full flex justify-center items-center p-6">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
