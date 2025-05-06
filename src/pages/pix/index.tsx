import { BreadCrumbApp } from "@/components/breadCrumbApp";
import { PlanPix } from "@/components/planPix";
import { Helmet } from "react-helmet-async";

export default function Pix() {
  const fullPath = window.location.href;
  return (
    <>
      <Helmet>
        <title>Ajude o canal</title>
        <meta
          name="description"
          content="Ajude Nosso canal a crescer, pode doar o quanto quiser"
        />
        <link rel="canonical" href={fullPath} />
      </Helmet>
      <main className="max-w-5xl mx-auto p-6 flex justify-center items-center flex-col">
        <BreadCrumbApp name="Ajude o Canal" page="/pix" />
        <PlanPix />
      </main>
    </>
  );
}
