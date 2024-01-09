import { FC, HTMLAttributes } from "react";
import Plyr from "plyr-react";

// =================================================
type TestimonialCard2Props = {
  name: string;
  review: string;
  designation: string;
  blockClassName?: HTMLAttributes<HTMLQuoteElement>["className"];
  blockDetailsClassName?: HTMLAttributes<HTMLDivElement>["className"];
};
// =================================================

const TestimonialCard2: FC<TestimonialCard2Props> = (props) => {
  const { name, review, designation, blockClassName, blockDetailsClassName } =
    props;

  return (
    <div className="custom-testmonial-card px-4">
      <div className=" mb-8 mb-md-8 ml-4 ml-md-4 position-relative">
        <Plyr
          options={{ loadSprite: true, clickToPlay: true }}
          source={{ type: "video", sources: [{ src: "/media/movie.mp4" }] }}
        />
      </div>
      <div className="pt-10">
        <blockquote className={blockClassName}>
          <p>“{review}”</p>
          <div className={blockDetailsClassName}>
            <div className="info ps-0">
              <h5 className="mb-1">{name}</h5>
              <p className="mb-0">{designation}</p>
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
