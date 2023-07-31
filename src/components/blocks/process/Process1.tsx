import { FC } from "react";
import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// -------- data -------- //
import { processList1 } from "data/process";

const Process1: FC = () => {
  return (
    <div className="row gx-md- gx-xl-12 gy-10 mb-4 mb-md-8 px-5 align-items-center">
      <div className="col-lg-6 order-lg-2">
        {processList1.map((item) => {
          return <ProcessList1 shadow {...item} key={item.no} />;
        })}

        <div className="p-8 d-flex justify-content-center">
          <NextLink
            href="#"
            title="Book a demo"
            className="btn btn-primary rounded-pill mb-0"
          />
        </div>
      </div>

      <div className="col-lg-6">
        <h2 className="fs-16 text-uppercase text-muted mb-3">How it Works</h2>
        <h3 className="display-4 mb-5">
          Managing Claims and Paperwork Should be Easier.
        </h3>

        <figure
          style={{
            maxHeight: "500px",
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
  );
};

export default Process1;
