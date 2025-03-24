import { Link } from "react-router";
import { Button } from "./ui/button";

export const PopularCard = () => {
  return (
    <div className="max-w-md w-full md:w-96 mx-1 h-[100%] bg-white rounded-xl shadow-md overflow-hidden relative border-2 border-blue-500">
      {/* Cabeçalho */}
      <div className="bg-blue-600 p-4">
        <div className="uppercase tracking-wide text-sm text-white font-semibold">
          MOST POPULAR
        </div>
      </div>

      {/* Corpo do card */}
      <div className="p-6">
        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">KVM 2</h2>

        {/* Preço original e desconto */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 line-through">US$ 17.99</span>
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
            SAVE 61%
          </span>
        </div>

        {/* Preço promocional */}
        <p className="text-3xl font-bold text-gray-900 mb-2">
          US$ 6.99 <span className="text-lg font-normal">/mo</span>
        </p>
        <p className="text-gray-600 mb-6">For 24-month term</p>

        <div className="border-t border-gray-200 my-4"></div>

        {/* Lista de benefícios */}
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">2 vCPU cores</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">8 GB RAM</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">100 GB NVMe disk space</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">8 TB bandwidth</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">Data centers worldwide</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✅</span>
            <span className="text-gray-700">Linux operating systems</span>
          </li>
        </ul>
      </div>

      <div className="px-6 pb-6">
        <Button
          className="w-full cursor-pointer h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
          asChild
        >
          <Link
            to="https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=9VCJANDERF92&referral_id=0195c82b-b927-70c0-8369-3b0e3cd2f916"
            target="blank"
          >
            Select Plan
          </Link>
        </Button>
      </div>
    </div>
  );
};
