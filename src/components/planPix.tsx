import { BreadCrumbApp } from "./breadCrumbApp";

export const PlanPix = () => {
  return (
    <div>
      <BreadCrumbApp name="Ajude o Canal" page="/pix" />
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
          <div className="bg-white h-full p-2 rounded-xl shadow-md border-gray-200 ">
            <img src="/pix.svg" alt="" />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 Invista no Futuro do Conhecimento! 🚀
            </h2>

            <div className="space-y-4">
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Nosso canal ainda está crescendo e, com sua ajuda, podemos
                      ir ainda mais longe! Cada contribuição via Pix nos permite
                      criar mais conteúdo, compartilhar dicas valiosas e,
                      futuramente, lançar cursos e mentorias exclusivas para
                      quem quer dominar a programação.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      Se você acredita no poder do conhecimento e quer apoiar
                      esse projeto, faça um Pix de qualquer valor!
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>📌 Chave Pix: QR Code ao lado</span>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>
                      💻 Irei postar, mais e mais, conteúdos, novas abordagens e
                      um espaço cada vez mais completo para quem quer evoluir na
                      programação!
                    </span>
                  </li>
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
    </div>
  );
};
