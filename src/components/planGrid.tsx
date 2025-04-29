import { HostingerPlans } from "./hostingerPlans.tsx";

export const PlanGrid = () => {
  return (
    <div className="w-[400px] md:w-full md:max-w-6xl md:mt-[180px] md:mx-auto md:p-4 bg-amber-100">
      <div className="w-[400px] md:w-full flex justify-center items-center flex-row">
        <HostingerPlans />
      </div>
    </div>
  );
};
