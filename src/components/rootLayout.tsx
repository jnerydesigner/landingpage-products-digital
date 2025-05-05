import { Header } from "@/components/header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full top-[180px] mx-auto h-auto md:w-[900px] flex justify-center items-center p-2 py-4 flex-grow shadow rounded-2xl mt-50">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
