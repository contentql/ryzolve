import fetchData from "utils/fetchData";
import { serviceList11 } from "data/service";

export const getServicesData = async () => {
  const data = await fetchData(
    `
      query{
        services{
            data{
            attributes{
                Services{
                id
                name
                description
                hoverDescription
                }
            }
            }
        }
    }
  `,
    {
      variables: {},
    }
  );

  const requiredServicesData = data.data.services.data?.map((value: any) => {
    const requiredValue = value?.attributes?.Services.map(
      (service: any, i: number) => {
        return {
          ...service,
          Icon: serviceList11[i].Icon,
          linkType: serviceList11[i].linkType,
          iconClassName: serviceList11[i].iconClassName,
          linkUrl: serviceList11[i].linkUrl,
        };
      }
    );
    return requiredValue;
  });

  return requiredServicesData;
};
