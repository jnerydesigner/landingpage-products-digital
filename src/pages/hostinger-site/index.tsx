import { PlanGrid } from "@/components/planGrid";
import { Helmet } from "react-helmet";

export default function HostingerSite() {
  const fullPath = window.location.href;
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Vamos contratar as VPS da Hostinger"
        />
        <title>Adquira nossos planos com desconto</title>
        <link rel="canonical" href={fullPath} />
      </Helmet>
      <PlanGrid />
    </>
  );
}
