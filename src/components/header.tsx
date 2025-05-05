import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="w-[400px] md:w-full flex flex-col justify-center items-center bg-gray-50 shadow-md absolute top-0">
      <div className="h-[100px]">
        <Link to="/">
          <img
            src="/logo-jander-nery-dev-redondo.svg"
            alt="logo jander nery dev"
            className="h-full"
          />
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-gray-800">Jander Nery Dev</h1>
      <p className="text-2xl font-bold text-gray-800">Se Liga Dev LTDA</p>
    </header>
  );
};
