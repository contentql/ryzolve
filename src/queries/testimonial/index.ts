import fetchData from "utils/fetchData";

export const getTestimonialsData = async () => {
  const data = await fetchData(
    `
    query{
      testimonial{
        data{
          attributes{
            testimonial{
              title
              description
              testimonialListing{
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
  return data.data.testimonial.data.attributes;
};
