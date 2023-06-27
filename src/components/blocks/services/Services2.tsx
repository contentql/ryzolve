import { FC } from "react";
import ListColumn from "components/reuseable/ListColumn";
// -------- data -------- //
import { aboutList1 } from "data/about";

type Services2Props = { isListingTrue?: boolean };

const Services2: FC<Services2Props> = ({ isListingTrue }) => {
  return (
    <section className="wrapper bg-gray py-14">
      <div className="container">
        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-7 order-lg-2">
            <figure>
              <img
                className="w-auto"
                alt="our solutions"
                src="/img/illustrations/i8.png"
                srcSet="/img/illustrations/i8@2x.png 2x"
              />
            </figure>
          </div>

          <div className="col-lg-5">
            <h2 className="fs-16 text-uppercase text-muted mb-3">
              Our Solutions
            </h2>
            <h3 className="display-4 mb-5">
              Your Agency Shouldn't Have to Waste Time With Outdated Processes
            </h3>

            <p className="mb-6">
              Most healthcare providers waste enormous amounts of time and staff
              using manual processes to manage claims, hire staff and attempt to
              meet government regulations. These providers end up having staff
              overwhelmed and frustrated with paperwork that keeps piling up,
              causing delays for patients which ultimately affects your bottom
              line. Your agency shouldn't have to waste time with manual
              processes. We created the Ryzolve software to help agencies like
              yours implement a digital approach that saves time, resources and
              overall improves your company's efficiency.
            </p>

            {!isListingTrue && <ListColumn list={aboutList1} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
