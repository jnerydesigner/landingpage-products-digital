import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="w-[400px] md:w-full flex flex-col justify-center items-center bg-gray-50 shadow-md absolute top-0">
      <div className="h-[100px]">
        <Link to="/">
          <img
            src="/logo-jander-nery-dev-redondo.svg"
            alt="logo jander nery dev"
            title="Logo Jander Nery Dev"
            className="h-full"
            width="500px"
            height="500px"
            loading="eager"
          />
        </Link>
      </div>
      <span className="text-2xl font-bold text-gray-800">Jander Nery Dev</span>
      <p className="text-2xl font-bold text-gray-800">Se Liga Dev LTDA</p>
    </header>
  );
};
