import { FC } from "react";
// -------- custom component -------- //
import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard4 } from "components/reuseable/service-cards";
// -------- data -------- //
import { serviceList7 } from "data/service";
import { getServicesData } from "queries/services-cards";
import { useQuery } from "@tanstack/react-query";

type GridCard = {
  title: string;
  description: string;
};

const Services9: FC = () => {
  const { data } = useQuery({
    queryKey: ["servicesData"],
    queryFn: getServicesData,
  });

  const GridCard: FC<GridCard> = ({ title, description }) => {
    return (
      <div className="ryzolve-custom-services-grid-card">
        <h3 className="custom-description-text">{title}</h3>
        <p className="custom-card-description-text">{description}</p>
      </div>
    );
  };

  const styles = {
    card: {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "20px",
      borderRadius: "8px",
      // marginBottom: "12px",
      display: "grid",

      // gridTemplateRows: "repeat(2, 1fr)",
    },
  };
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-8s mb-lg-22 mb-xl-8 align-items-center">
      <div className="col-lg-7 order-lg-2">
        {/* <div className="flex"> */}
        <div
          // className="col col-md-5 gx-md-2 gy-5"
          // className="col-md-5"
          // style={{ gridTemplateRows: "repeat(2, 1fr)" }}

          className="ryzolve-custom-grid-services"
        >
          {serviceList7.map(({ id, Icon, color, ...item }) => (
            <GridCard
              key={id}
              // Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />}
              {...item}
            />
          ))}
          {/* </div> */}
        </div>
      </div>

      <div className="col-lg-5">
        <h2 className="fs-15 text-uppercase text-primary mb-3">What We Do?</h2>
        <h3 className="display-4 mb-5 custom-description-text">
          The service we offer is specifically designed to meet your needs.
        </h3>
        <p className="custom-card-description-text">
          Our solutions are carefully crafted to cater to your unique needs,
          emphasizing enhanced efficiency, streamlined hiring processes, strict
          government compliance standards, and increased profitability. We are
          committed to delivering a solution that not only meets but exceeds
          your expectations, creating an environment marked by operational
          efficiency, regulatory adherence, and financial growth.
        </p>
        {/* <NextLink
          title="More Details"
          href="#"
          className="btn btn-navy rounded-pill mt-3"
        /> */}
      </div>
    </div>
  );
};

export default Services9;
