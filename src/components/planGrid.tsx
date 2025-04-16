import { HostingerPlans } from "./hostingerPlans.tsx";

export const PlanGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-center items-center flex-row">
        <HostingerPlans />
      </div>
    </div>
  );
};
