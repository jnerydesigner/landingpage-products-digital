import { BreadCrumbApp } from "./breadCrumbApp";
import { Button } from "./ui/button";

export const PlanLinkedin = () => {
  return (
    <div className="md:max-w-6xl p-4 gap-4 h-[1100px] md:h-auto md:flex md:justify-center md:items-center md:flex-col md:rounded-[8px]">
      <BreadCrumbApp name="Linkedin" page="/linkedin" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 max-h-[80vh] my-auto gap-4 mb-[50px] md:mb-4 md:mt-2.5 md:w-full">
        <a
          href="https://www.linkedin.com/in/jander-nery/"
          target="blank"
          className="flex justify-center items-center"
        >
          <div className="h-full md:w-[300px] bg-white p-20 rounded-xl shadow-md border-2 border-gray-200 overflow-y-auto flex justify-center items-center">
            <img
              src="/linkedin.svg"
              alt="Logo do Linkedin"
              className="transition duration-300 transform hover:scale-140"
            />
          </div>
        </a>

        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            💡 Vamos nos conectar! 🚀
          </h2>

          <div className="space-y-4">
            <div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Sou Jander Nery, desenvolvedor especializado em tecnologias
                    como Node.js, NestJS, TypeScript, Java (Spring Boot) e
                    arquitetura de microsserviços. Minha experiência envolve
                    desde o desenvolvimento de aplicações escaláveis até a
                    implementação de soluções robustas para diferentes
                    necessidades.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    Compartilho conhecimentos e experiências para ajudar outros
                    devs a crescerem na área! Obrigado por fazer parte dessa
                    jornada! 💙
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Obrigado por fazer parte dessa jornada! 💙</span>
                </li>
              </ul>
            </div>

            <Button
              className="w-full cursor-pointer h-12 bg-[#0077B5] hover:bg-[#005eb5] text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-101"
              asChild
            >
              <a href="https://www.linkedin.com/in/jander-nery/" target="blank">
                Linkedin de Jander Nery
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
