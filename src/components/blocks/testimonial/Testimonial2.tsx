import { FC } from "react";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";

import { useQuery } from "@tanstack/react-query";
import { getTestimonialsData } from "queries/testimonial";

const Testimonial2: FC = () => {
  const { data } = useQuery({
    queryKey: ["testimonialData"],
    queryFn: getTestimonialsData,
  });
  return (
    <div className="position-relative mb-10 mb-md-10 px-12">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-primary mb-3">
            {data?.testimonial.title}
          </h2>
          <h3 className="display-4 mb-6 px-xl-10 custom-description-text px-xxl-15">
            {data?.testimonial.description}
          </h3>
        </div>
      </div>
      <TestimonialCard4 />
    </div>
  );
};

export default Testimonial2;
