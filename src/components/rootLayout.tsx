import { Header } from "@/components/header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col md:grid md:grid-rows-[100px,1fr,50px] mx-0 relative p-2">
      <Header />
      <main className="w-full h-auto md:w-full flex justify-center items-center p-2 py-4 flex-grow bg-gray-100 shadow rounded-2xl mt-[170px] md:mt-0">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
