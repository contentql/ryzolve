import fetchData from "utils/fetchData";

export const getClaimsAndBillingData = async () => {
  const data = await fetchData(
    `
      query{
            claimsAndBilling{
            data{
                attributes{
                Hero{
                    id
                    title
                    subtitle
                }
                Services{
                    id
                    name
                    description
                    hoverDescription
                }
                Testimonial{
                    id
                    title
                    description
                    testimonialListing{
                    id
                    name
                    review
                    designation
                    company_name
                    rating
                    }
                }
                Solutions{
                    id
                    title
                    description
                    
                }
                About{
                    id
                    title
                    description
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
  console.log(data);
  return data.data.claimsAndBilling.data.attributes;
};
