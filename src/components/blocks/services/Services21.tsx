import { FC } from "react";
import { ServiceCard1 } from "components/reuseable/service-cards";
// -------- data -------- //
import { serviceList11 } from "data/service";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getServicesData } from "queries/services-cards";
// type Services21Props = {
//   // id?: string;
//   // name: string;
//   // description: string;
//   // hoverDescription?: string;
//   servicesData: [];
// };

const Services21: FC = () => {
  const { data } = useQuery({
    queryKey: ["servicesData"],
    queryFn: getServicesData,
  });

  // const requiredServicesData = data?.map((value: any) => {
  //   const requiredValue = value?.attributes.Services.map(
  //     (service: any, i: number) => {
  //       return {
  //         ...service,
  //         Icon: serviceList11[i].Icon,
  //         linkType: serviceList11[i].linkType,
  //         iconClassName: serviceList11[i].iconClassName,
  //         linkUrl: serviceList11[i].linkUrl,
  //       };
  //     }
  //   );
  //   return requiredValue;
  // });

  return (
    <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17 w-full flex flex-row justify-content-center align-items-center">
      {data?.flat().map(({ id, Icon, ...item }: any) => (
        <ServiceCard1 {...item} key={id} Icon={Icon} />
      ))}
    </div>
  );
};

export default Services21;
