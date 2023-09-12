import { FC } from "react";
import Image from "next/image";
import humanize from "utils/humanize";

// =================================================
type TestimonialCard3Props = {
  // name: string;
  // image: string;
  // review: string;
  // shadow?: boolean;
  // designation: string;
  // hideRating?: boolean;
  item: {
    name: string;
    review: string;
    designation: string;
    hideRating: boolean;
    shadow: boolean;
    company_name: string;
    rating: string;
  };
  image: string;
};
// =================================================

const TestimonialCard3: FC<TestimonialCard3Props> = ({ item, image }) => {
  const {
    name,
    review,
    designation,
    hideRating,
    shadow,
    company_name,
    rating,
  } = item;

  return (
    <div className={`card ${shadow ? "shadow-lg" : ""}`}>
      <div className="card-body">
        {!hideRating && (
          <span className={`ratings ${humanize(Number(rating))} mb-3`} />
        )}

        <blockquote className="icon mb-0">
          <p>“{review}”</p>

          <div className="blockquote-details">
            <figure className="rounded-circle w-12 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={image}
                alt="team"
                style={{ width: "100%", height: "auto" }}
              />
            </figure>

            <div className="info">
              <h5 className="mb-0">{name}</h5>
              <p className="mb-0">
                {designation},{company_name}
              </p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard3;
