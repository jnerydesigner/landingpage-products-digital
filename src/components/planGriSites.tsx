import { PopularCard } from "./cardHostinger";

export const PlanGridSites = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
        <div className="h-full">
          <PopularCard />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Detalhes do Plano KVM 2
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Especificações Técnicas
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Processador:</strong> 2 vCPU cores de alta
                    performance (Intel Xeon ou AMD EPYC)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Memória:</strong> 8 GB DDR4 ECC RAM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    <strong>Armazenamento:</strong> 100 GB NVMe SSD
                    (leitura/escrita ultra-rápida)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Recursos Incluídos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Acesso root completo ao servidor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Escolha entre 15+ distribuições Linux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>IPv4 dedicado incluído</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Termos do Plano
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Garantia de uptime 99.9%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Suporte 24/7 via ticket e chat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Faturamento mensal ou anual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
