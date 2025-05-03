import { PlanGrid } from "@/components/planGrid";
import { Helmet } from "react-helmet";

export default function HostingerSite() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Vamos contratar as VPS da Hostinger"
        />
        <title>Adquira nossos planos com desconto</title>
        <link rel="canonical" href="/hostinger" />
      </Helmet>
      <div className="w-[400px] md:w-full md:max-w-5xl flex justify-center items-center">
        <PlanGrid />
      </div>
    </>
  );
}
