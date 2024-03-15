import { FC, HTMLAttributes, useEffect, useState } from "react";
import Plyr from "plyr-react";
import { testimonialList2 } from "data/testimonial-list";
import ReactPlayer from "react-player";

// =================================================
type TestimonialCard2Props = {
  name: string;
  review: string;
  designation: string;
  blockClassName?: HTMLAttributes<HTMLQuoteElement>["className"];
  company: string;
  blockDetailsClassName?: HTMLAttributes<HTMLDivElement>["className"];

  // videoUrl: string;
};
// =================================================

const TestimonialCard2 = (props: any) => {
  const {
    name,
    review,
    designation,
    blockClassName,
    company,
    blockDetailsClassName,
    item,
    // videoUrl,
  } = props;

  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const videoUrl =
    testimonialList2[Math.floor(Math.random() * testimonialList2.length)]
      .videoUrl;

  return (
    <div className="custom-testmonial-card">
      <div className="mb-2 mb-md-8 ml-md-4">
        <ReactPlayer
          url={item?.attributes.video_url}
          width={isDesktop ? 650 : 400}
        />
      </div>
      <div className="md-pt-10 pt-4">
        <blockquote className={blockClassName}>
          <p>“{item?.attributes.review}”</p>
          <div className={blockDetailsClassName}>
            <div className="info ps-0">
              <h5 className="mb-1">{item?.attributes.name}</h5>
              <p className="mb-0">
                {item?.attributes.designation}, {item?.attributes.company}
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

// set default props
TestimonialCard2.defaultProps = {
  blockClassName: "icon icon-top fs-lg text-center",
  blockDetailsClassName:
    "blockquote-details justify-content-center text-center",
};

export default TestimonialCard2;
