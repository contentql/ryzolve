import fetchData from "utils/fetchData";

export const getPricingData = async () => {
  const data = await fetchData(
    `
query {
	pricing2{
    data{
      attributes{
        title
        enable_pricing
        content
        note
        plans{
          monthly_price
          yearly_price
          plan_name
          suggested_for
          support
          plan_features{
            id
            item
          }
          custom_pricing
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
  return data;
};
