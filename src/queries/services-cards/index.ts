import fetchData from "utils/fetchData";

export const getServicesData = async () => {
  const data = await fetchData(
    `
      query{
            claimsAndBilling{
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
  return data.data.claimsAndBilling.data.attributes;
};
