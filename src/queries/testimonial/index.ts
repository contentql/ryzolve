import fetchData from "utils/fetchData";

export const getTestimonialData = async () => {
  const data = await fetchData(
    `
        query  {
            reviews(filters: { source: { eq: "ryzolve" }}){
                data{
                attributes{
                    name
                    review
                    designation
                    company
                    video_url
                    display
                }
            }
        }
    }

    `,
    {
      variables: {},
    }
  );

  return data.data.reviews.data;
};
