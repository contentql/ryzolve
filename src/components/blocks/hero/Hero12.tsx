import { FC } from "react";
import { slideInDownAnimate } from "utils/animation";
import NextLink from "components/reuseable/links/NextLink";
import Typewriter from "typewriter-effect";

const Hero12: FC = () => {
  return (
    <section className="content-wrapper">
      <div className="container pt-10 pb-15 pt-md-5 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1
              className="display-1 mb-5 mx-md-n5 mx-lg-0"
              style={slideInDownAnimate("600ms")}
            >
              Improve Your Agency's
              {/* <span className="text-blue">Efficiency & Compliance</span> */}
              <span className="text-primary">
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: [
                      "Efficiency.",
                      "Compliance.",
                      "Profits.",
                      "Training.",
                    ],
                  }}
                />
              </span>
            </h1>

            <p
              className="fs-lg mb-7 text-dark"
              style={slideInDownAnimate("900ms")}
            >
              Provider Management Software To Help PAS Agencies Be More
              Efficient
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink
                  href="/calendly"
                  title="Book a demo"
                  className="btn btn-primary rounded me-2"
                />
              </span>
              {/* 
              <span style={slideInDownAnimate("1500ms")}>
                <NextLink
                  href="#"
                  title="Learn More"
                  className="btn btn-yellow rounded"
                />
              </span> */}
            </div>
          </div>

          <div className="col-lg-7" style={slideInDownAnimate("0ms")}>
            <figure>
              <img
                className="w-auto"
                src="/img/illustrations/i2.png"
                srcSet="/img/illustrations/i2@2x.png 2x"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero12;
