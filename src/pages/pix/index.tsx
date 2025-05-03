import { PlanPix } from "@/components/planPix";
import { Helmet } from "react-helmet-async";

export default function Pix() {
  return (
    <>
      <Helmet>
        <title>Ajude o canal</title>
        <meta
          name="description"
          content="Ajude Nosso canal a crescer, pode doar o quanto quiser"
        />
        <link rel="canonical" href="/pix" />
      </Helmet>
      <div className="max-w-5xl mx-auto p-6 flex justify-center items-center">
        <PlanPix />
      </div>
    </>
  );
}
