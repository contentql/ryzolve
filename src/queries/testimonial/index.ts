import fetchData from "utils/fetchData";

export const getTestimonialsData = async () => {
  const data = await fetchData(
    `
      query{
            claimsAndBilling{
            data{
                attributes{
                
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
