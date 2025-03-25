export const PlanLinkedin = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
        <div className="h-full bg-white p-20 rounded-xl shadow-md border-2 border-gray-200 overflow-y-auto">
          <img src="/linkedin.svg" alt="Logo do Linkedin" />
        </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};
