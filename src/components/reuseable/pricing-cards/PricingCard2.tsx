import { FC } from "react";
import Price from "./Price";
import NextLink from "../links/NextLink";

// ================================================================
type PricingCard2Props = {
  plan_name: string;
  plan_features: {
    id: string;
    item: string;
  }[];
  yearly_price: number;
  monthly_price: number;
  activeYearly: boolean;
  roundedButton?: boolean;
  Icon: (props: any) => JSX.Element;
};
// ================================================================

const PricingCard2: FC<PricingCard2Props> = (props) => {
  const {
    plan_name,
    plan_features,
    yearly_price,
    monthly_price,
    activeYearly,
    roundedButton,
    Icon,
  } = props;

  const yearClasses = activeYearly ? "price-show" : "price-hide price-hidden";
  const monthClasses = !activeYearly ? "price-show" : "price-hide price-hidden";

  return (
    <div className="pricing card shadow-lg custom-description-text">
      <div className="card-body">
        <Icon />

        <h4 className="card-title">{plan_name}</h4>

        <div className="prices">
          <Price duration="mo" value={monthly_price} classes={monthClasses} />
          <Price duration="yr" value={yearly_price} classes={yearClasses} />
        </div>

        <ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8 text-start">
          {plan_features.map((item, i) => (
            <li key={i}>
              <i className="uil uil-check" />
              <span>
                <strong>{item.item.split(" ")[0]}</strong>{" "}
                {item.item.split(" ").slice(1).join(" ")}
              </span>
            </li>
          ))}
        </ul>

        <NextLink
          href="#"
          title="Choose Plan"
          className={`btn btn-primary ${
            roundedButton ? "rounded" : "rounded-pill"
          }`}
        />
      </div>
    </div>
  );
};

export default PricingCard2;
