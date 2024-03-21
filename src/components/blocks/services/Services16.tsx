import { FC } from "react";
import { ServiceCard1 } from "components/reuseable/service-cards";
// -------- data -------- //
import { servicess } from "data/demo-12";

type Services16 = {
  services: any;
};

const Services16: FC<Services16> = ({ services }: any) => {
  const combinedArray = services?.map((service: any, index: number) => {
    const { name, description, link } = service;
    const { Icon, linkType, iconClassName, cardClassName } = servicess[index];

    return {
      name,
      description,
      link,
      Icon,
      linkType,
      iconClassName,
      cardClassName,
    };
  });

  return (
    <div className="row gx-md-5 gy-5 mt-md-n21 mb-14 mb-md-0">
      {combinedArray?.map(({ id, Icon, ...item }: any) => (
        <ServiceCard1 {...item} key={id} Icon={Icon} />
      ))}
    </div>
  );
};

export default Services16;
