import fetchData from "utils/fetchData";

export const getPricingData = async () => {
  const data = await fetchData(
    `
    query{
        pricing{
        data{
            attributes{
            pricing{
                title
                plans{
                id
                monthly_price
                yearly_price
                plan_name
                plan_features{
                    id
                    item
                }
                }
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
  return data.data.pricing.data.attributes;
};
