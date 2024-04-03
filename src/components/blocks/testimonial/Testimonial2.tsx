import { FC } from "react";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";

import { useQuery } from "@tanstack/react-query";
import { getTestimonialData } from "queries/testimonial";

const Testimonial2: FC = () => {
  const { data } = useQuery({
    queryKey: ["testimonialData"],
    queryFn: getTestimonialData,
  });

  const testimonals = data?.filter(
    (testimonial: any) => testimonial.attributes.display
  );

  return (
    <div className="position-relative mb-10 mb-md-10 md-px-12 px-2">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
          <h2 className="fs-15 text-uppercase text-primary mb-3">
            HAPPY CUSTOMERS
          </h2>
          <h3 className="display-4 mb-6 px-xl-10 custom-description-text px-xxl-15">
            Our clients speak
          </h3>
        </div>
      </div>
      <TestimonialCard4
        // testimonialList={data?.testimonial.testimonialListing}
        testimonialList={testimonals}
      />
    </div>
  );
};

export default Testimonial2;
