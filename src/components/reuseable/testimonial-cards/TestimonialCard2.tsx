import { FC, HTMLAttributes } from "react";
import Plyr from "plyr-react";
import { testimonialList2 } from "data/testimonial-list";

// =================================================
type TestimonialCard2Props = {
  name: string;
  review: string;
  designation: string;
  blockClassName?: HTMLAttributes<HTMLQuoteElement>["className"];
  company_name: string;
  blockDetailsClassName?: HTMLAttributes<HTMLDivElement>["className"];
  // videoUrl: string;
};
// =================================================

const TestimonialCard2: FC<TestimonialCard2Props> = (props) => {
  const {
    name,
    review,
    designation,
    blockClassName,
    company_name,
    blockDetailsClassName,
    // videoUrl,
  } = props;

  const videoUrl =
    testimonialList2[Math.floor(Math.random() * testimonialList2.length)]
      .videoUrl;

  return (
    <div className="custom-testmonial-card px-4">
      <div className=" mb-8 mb-md-8 ml-4 ml-md-4 position-relative">
        <Plyr
          options={{ loadSprite: true, clickToPlay: true }}
          source={{
            type: "video",
            sources: [
              { src: videoUrl },
              // { src: "https://www.youtube.com/watch?v=aPTv60w1upk" },
            ],
          }}
        />
      </div>
      <div className="pt-10">
        <blockquote className={blockClassName}>
          <p>“{review}”</p>
          <div className={blockDetailsClassName}>
            <div className="info ps-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">
                {designation}, {company_name}
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
