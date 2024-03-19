import { FC } from "react";
import { ServiceCard1 } from "components/reuseable/service-cards";
// -------- data -------- //
import { services } from "data/demo-12";

const Services16: FC = () => {
  return (
    <div className="row gx-md-5 gy-5 mt-md-n21 mb-14 mb-md-0">
      {services.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} Icon={Icon} />
      ))}
    </div>
  );
};

export default Services16;
