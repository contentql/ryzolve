import { FC } from "react";
import Carousel from "../Carousel";
import TestimonialCard2 from "./TestimonialCard2";
import { testimonialList2 } from "data/testimonial-list";

// ============================================================
type TestimonialCard4Props = {
  className?: string;
  sliderWrapperClassname?: string;
  testimonialList: {
    name: string;
    company_name: string;
    designation: string;
    review: string;
  }[];
};

// ============================================================

const TestimonialCard4: FC<TestimonialCard4Props> = ({
  className = "",
  sliderWrapperClassname = "p-4 p-md-4 pt-lg-10 pb-lg-8",
  testimonialList,
}) => {
  return (
    <div className={`card shadow-lg ${className}`}>
      <div className={sliderWrapperClassname}>
        <Carousel
          // grabCursor
          slidesPerView={1}
          navigation={false}
          className="dots-closer"
        >
          {testimonialList.map((item, i: number) => (
            <div>
              <TestimonialCard2 key={i} {...item} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default TestimonialCard4;
