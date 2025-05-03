import { PlanConsult } from "@/components/planConsult";
import { Helmet } from "react-helmet-async";

export default function Consult() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Página para contratar uma consultoria feita pelo Jander Nery Dev"
        />
        <title>Querendo Contratar uma Mentoria</title>
        <link rel="canonical" href="/consult" />
      </Helmet>
      <div className="max-w-5xl mx-auto p-6 flex justify-center items-center mt-40">
        <PlanConsult />
      </div>
    </>
  );
}
