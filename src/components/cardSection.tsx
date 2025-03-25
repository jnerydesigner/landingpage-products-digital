import { Link } from "react-router";

const CardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Servidor VPS",
      description: "KVM 2",
      img: "/hostinger-logo.svg",
      linkAffiliate: "",
      linkLearnMore: "/hostinger",
    },
    {
      id: 2,
      title: "Quer Ajudar o Canal",
      description: "Se você quiser ajudar o canal, clique em saiba mais.",
      img: "/logo-jander-nery-dev-redondo.svg",
      linkAffiliate: "",
      linkLearnMore: "/pix",
    },
    {
      id: 3,
      title: "Conecte-se em nosso Linkedin",
      description:
        "Conectando-se poderemos aumentar a comunidade de programação",
      img: "/linkedin.svg",
      linkAffiliate: "",
      linkLearnMore: "/linkedin",
    },
    {
      id: 4,
      title: "Mentoria",
      description:
        "Orientação especializada para seu projeto, posso tentar te ajudar.",
      img: "/consult.svg",
      linkAffiliate: "",
      linkLearnMore: "/consult",
    },
  ];

  return (
    <div className="w-full px-[10px]">
      <div className="flex flex-wrap justify-between gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full sm:w-1/2 lg:w-1/4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center space-x-2">
              <div className="h-11 w-11 rounded-full flex items-center justify-center">
                <img src={card.img} alt="logo hostinger" className="h-[100%]" />
              </div>
              <span className="font-semibold text-lg text-gray-800">
                {card.title}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            <Link
              to={card.linkLearnMore}
              className="mt-4 inline-block text-green-600 hover:underline"
            >
              Saiba mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
