import { FC, useState } from "react";
// -------- custom component -------- //
import Switch from "components/reuseable/Switch";
import { PricingCard2 } from "components/reuseable/pricing-cards";
// -------- data-------- //
import { pricingList2 } from "data/pricing";

// =============================================================================
type Pricing2Props = {
  className?: string;
  planData?: {
    id: string;
    monthly_price: number;
    yearly_price: number;
    plan_name: string;
    plan_features: {
      id: string;
      item: string;
    }[];
  }[];
};
// =============================================================================

const Pricing2: FC<Pricing2Props> = ({ className, planData }) => {
  const [activeYearly, setActiveYearly] = useState(false);

  return (
    <div
      className={`pricing-wrapper position-relative ${
        className || "mt-n22 mt-md-n24"
      }`}
    >
      <div
        className="shape bg-dot primary rellax w-16 h-18"
        style={{ top: "2rem", right: "-2.4rem" }}
      />
      <div
        className="shape rounded-circle bg-line red rellax w-18 h-18 d-none d-lg-block"
        style={{ bottom: "0.5rem", left: "-2.5rem" }}
      />

      <div className="pricing-switcher-wrapper switche custom-description-text">
        <p className="mb-0 pe-3">Monthly</p>
        <Switch value={activeYearly} onChange={setActiveYearly} />
        <p className="mb-0 ps-3">Yearly</p>
      </div>

      <div className="row gy-6 mt-3 mt-md-5 justify-content-center">
        {planData?.map((item, i) => (
          <div className={`col-md-6 col-lg-4 ${i === 1 && "popular"}`} key={i}>
            <PricingCard2
              {...item}
              activeYearly={activeYearly}
              Icon={pricingList2[i].Icon}
              roundedButton
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing2;
