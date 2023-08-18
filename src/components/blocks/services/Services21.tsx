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
  // const { data } = useQuery({
  //   queryKey: ["servicesData"],
  //   queryFn: getServicesData,
  // });
  // console.log(data);

  // const requiredServicesData = data?.Services.map((service,i) => {
  //   return {
  //     ...service,icon:serviceList11[i].icon,linkType:serviceList11[i].linkType,iconClassName:serviceList11[i].iconClassName
  //   }
  // })

  return (
    <div className="row gx-md-5 gy-5 mt-n19 mb-14 mb-md-17 ">
      {serviceList11.map(({ id, Icon, ...item }) => (
        <ServiceCard1 {...item} key={id} Icon={Icon} />
      ))}
    </div>
  );
};

export default Services21;
