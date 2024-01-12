import { FC, Key } from "react";
// -------- custom component -------- //
import Carousel from "components/reuseable/Carousel";
import carouselBreakpoints from "utils/carouselBreakpoints";
import { TestimonialCard3 } from "components/reuseable/testimonial-cards";
// -------- data -------- //
import { testimonialList2 } from "data/testimonial-list";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialsData } from "queries/testimonial";

// type TestimonialProps = {
//   testimonialData: {
//     title: string;
//     description: string;
//     testimonialListing: [];
//   };
// };

const Testimonial4: FC = () => {
  const { data } = useQuery({
    queryKey: ["testimonialData"],
    queryFn: getTestimonialsData,
  });
  return (
    <div className="wrapper bg-soft-primary">
      <div className="container py-18 py-md-8">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h2 className="fs-15 text-uppercase text-muted mb-3">
              {data?.testimonial.title}
            </h2>
            <h3 className="display-4 mb-6 px-xl-10 px-xxl-15">
              {data?.testimonial.description}
            </h3>
          </div>
        </div>

        <div className="swiper-container dots-closer mb-6">
          <Carousel
            spaceBetween={0}
            grabCursor
            navigation={false}
            breakpoints={carouselBreakpoints}
          >
            {data?.testimonial.testimonialListing?.map(
              (
                item: {
                  name: string;
                  review: string;
                  designation: string;
                  hideRating: boolean;
                  shadow: boolean;
                  company_name: string;
                  rating: string;
                },
                i: number
              ) => (
                <div className="item-inner" key={i}>
                  <TestimonialCard3
                    item={item}
                    image={testimonialList2[i].image}
                  />
                </div>
              )
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial4;
