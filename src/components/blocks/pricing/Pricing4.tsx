import { useQuery } from "@tanstack/react-query";
import { getPricingData } from "queries/pricing";
import { FC } from "react";
import Pricing2 from "./Pricing2";

const Pricing4: FC = () => {
  const { data } = useQuery({ queryKey: ["pricing"], queryFn: getPricingData });
  return (
    <div>
      <div className="wrapper bg-soft-primary">
        <div className="container pt-14 pb-18 pt-md-8 pb-md-22 text-center">
          <div className="row">
            <div className="col-lg-10 col-xl-9 col-xxl-8 mx-auto">
              <h3 className="display-4 mb-15 mb-md-6 px-lg-10 custom-description-text">
                {data?.pricing.title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* pricing list section */}
      <div className="wrapper bg-light">
        <div className="container pt-14 pt-md-14 pb-8 pb-md-8">
          <Pricing2 planData={data?.pricing.plans} />
        </div>
      </div>
    </div>
  );
};

export default Pricing4;
