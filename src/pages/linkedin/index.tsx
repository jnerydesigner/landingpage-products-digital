import { PlanLinkedin } from "@/components/planLinkedin.";
import { Helmet } from "react-helmet-async";

export default function Linkedin() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Siga nosso Linkedin, para não perder novidades"
        />
        <title>Não deixe de seguir nosso Linkedin</title>
        <link rel="canonical" href="/linkedin" />
      </Helmet>
      <div className="md:max-w-5xl md:mx-auto p-6 flex justify-center items-center md:flex-row">
        <PlanLinkedin />
      </div>
    </>
  );
}
