import { PlanConsult } from "@/components/planConsult";
import { Seo, SeoType } from "@/data/seo";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

export default function Consult() {
  const location = useLocation();
  const [seo, setSeo] = useState<SeoType>();
  const fullPath = window.location.href;

  useEffect(() => {
    const seoBuild = (loc: string) => {
      const findLocation = Seo.find((s) => s.href === loc);
      if (!findLocation) {
        return (
          <>
            <h1>Não existe página</h1>
          </>
        );
      }

      setSeo(findLocation);
    };

    seoBuild(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name={seo?.metaName} content={seo?.content} />
        <title>{seo?.title}</title>
        <link rel="canonical" href={fullPath} />
      </Helmet>
      <div className="max-w-5xl mx-auto p-6 flex justify-center items-center flex-col ">
        <PlanConsult />
      </div>
    </>
  );
}
