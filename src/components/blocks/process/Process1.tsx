import { FC } from "react";
import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// -------- data -------- //
import { processList1 } from "data/process";

type HowItWorks = {
  title: string;
  steps: {
    id: string;
    name: string;
    description: string;
  }[];
};

const Process1: FC<HowItWorks> = ({ title, steps }) => {
  return (
    <div>
      <div className="row gx-xl-12 gy-10 mb-2 px-5 align-items-center">
        <div className="col-lg-6 order-lg-2 pt-2">
          {steps?.map((item, index) => {
            return (
              <ProcessList1
                index={index}
                shadow
                no={index + 1}
                key={item.id}
                {...item}
                className={processList1[index].className}
              />
            );
          })}
        </div>

        <div className="col-lg-6">
          <h2 className="fs-16 text-uppercase text-primary  mb-3">
            How it Works
          </h2>
          <h3 className="display-4 mb-5 custom-description-text">{title}</h3>

          <figure
            style={{
              maxHeight: "400px",
              overflow: "hidden",
            }}
            className="rounded"
          >
            <img
              alt="our strategy"
              src="/img/illustrations/ryzolve-about.svg"
              className="img-fluid"
              // srcSet='/img/illustrations/i8@2x.png 2x'
            />
          </figure>
        </div>
      </div>
      <div className="pt-8 d-flex justify-content-center">
        <NextLink
          href="/calendly"
          title="Book a demo"
          className="btn btn-secondary rounded-pill mb-0"
        />
      </div>
    </div>
  );
};

export default Process1;
