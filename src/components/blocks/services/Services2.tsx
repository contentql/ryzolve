import { FC } from "react";
import ListColumn from "components/reuseable/ListColumn";
import Image from "next/image";
// -------- data -------- //
import { aboutList1 } from "data/about";
import NextLink from "components/reuseable/links/NextLink";
import { slideInDownAnimate } from "utils/animation";
import { lineHeightMarkup } from "markups/styleguide/misc";

type Services2Props = {
  tag?: string;
  title: string;
  description1: string;
  description2?: string;
  description3?: string;
  list?: { item: string }[];
  image: string;
  height?: string;
};

const Services2: FC<Services2Props> = ({
  tag = "Our Solutions",
  title,
  description1,
  description3,
  list,
  image,
}) => {
  return (
    <section className="wrapper bg-light py-14" id="solutions">
      <div className="container">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center flex-row-reverse">
          <div className="col-lg-6 order-lg-2 rounded">
            <figure
              style={{
                maxHeight: "70vh",
                overflow: "hidden",
                display: "flex",
                justifyContent: "end",
                height: "70%",
                alignItems: "center",
              }}
              className="rounded"
            >
              <Image
                height={300}
                width={500}
                alt="our solutions"
                src={image}
                // srcSet='/img/illustrations/i8@2x.png 2x'
              />
            </figure>
          </div>

          <div className="col-lg-6">
            <h2 className="fs-16 text-uppercase text-muted mb-3">{tag}</h2>
            <h3 className="display-4 mb-5">{title}</h3>

            <div className="mb-6">
              <p>{description1}</p>
              <h2>{description3}</h2>
            </div>

            {list && (
              <div className="mb-8">
                <ListColumn list={[[...list]]} />
              </div>
            )}

            <span style={slideInDownAnimate("1200ms")}>
              <NextLink
                title="Book a Demo"
                href="/calendly"
                className="btn btn-lg btn-primary rounded-pill me-2 "
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
