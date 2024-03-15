import { FC } from "react";
import { slideInDownAnimate } from "utils/animation";
import NextLink from "components/reuseable/links/NextLink";
import Typewriter from "typewriter-effect";

const Hero12: FC = () => {
  return (
    <section className="content-wrapper">
      <div className="container pt-10 pb-2 pt-md-5 pb-md-16">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
          <div className="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0">
            <h1
              className="display-1 mb-5 mx-md-n5 mx-lg-0 custom-heading-text"
              style={slideInDownAnimate("600ms")}
            >
              Enhance your agency's
              {/* <span className="text-blue">Efficiency & Compliance</span> */}
              <span className="text-primary">
                <Typewriter
                  options={{
                    loop: true,
                    autoStart: true,
                    strings: ["efficiency", "compliance", "profits"],
                  }}
                />
              </span>
            </h1>

            <p
              className="fs-lg mb-7 custom-description-text"
              style={slideInDownAnimate("900ms")}
            >
              Provider management software to help PAS agencies be more
              efficient
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate("1200ms")}>
                <NextLink
                  href="/calendly"
                  title="Book a demo"
                  className="btn btn-secondary rounded me-2"
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
                src="/img/photos/i6.png"
                srcSet="/img/illustrations/i6@2x.png"
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
