import { Header } from "@/components/header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col md:min-h-screen md:grid md:grid-rows-[100px,1fr,50px] bg-gray-100 mx-0 relative">
      <Header />
      <main className="w-full md:w-full flex justify-center items-center p-2">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
