import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero10 } from "components/blocks/hero";
import { slideInDownAnimate } from "utils/animation";
import { Services2, Services21 } from "components/blocks/services";
import { Testimonial4, Testimonial2 } from "components/blocks/testimonial";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";
import { useQuery } from "@tanstack/react-query";
import { getPageData } from "queries/getPageData";
import { Navbar } from "components/blocks/navbar";
import NextLink from "components/reuseable/links/NextLink";
import Services9 from "components/blocks/services/Services9";

const index = () => {
  const { data } = useQuery({
    queryKey: ["claimsAndBillings"],
    queryFn: () => getPageData("claimsAndBilling"),
  });
  return (
    <div>
      <Navbar
        logoAlt="logo-purple"
        navClassName="navbar navbar-expand-lg  navbar-light navbar-bg-light caret-none"
        button={
          <NextLink
            title="Book a Demo"
            href="#"
            className="btn btn-sm btn-secondary rounded"
          />
        }
        loginButton={
          <NextLink
            title="Login"
            href="https://ryzolve.com/providerapp"
            className="btn btn-sm btn-outline-secondary rounded"
          />
        }
      />
      {/* <section className="p-4 wrapper">
        <Hero10 title={data?.Hero.title} subtitle={data?.Hero.subtitle} />
      </section> */}

      <section className="content-wrapper">
        <div className="pt-10 pb-6 pt-md-14 pb-md-4 text-center">
          <div className="row mb-11">
            {/* <div className="col-md-10 col-lg-8 col-xl-6 col-xxl-5 mx-auto mb-11"> */}
            <h1 className="display-1 mb-3 custom-page-heading-text mx-auto">
              {data?.Hero.title}
            </h1>
            <p className="px-lg-7 px-xl-7 px-xxl-6 custom-description-text">
              {data?.Hero.subtitle}
            </p>
            <div style={slideInDownAnimate("600ms")}>
              <NextLink
                title="Explore"
                href="#solutions"
                className="btn btn-lg btn-secondary rounded mt-6"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      <section className="content-wrapper wrapper">
        {/* Services Section */}

        {/* <section className="wrapper bg-light "> */}
        {/* <section className="container pt-16 pt-md-12"> */}
        {/* ========== services section ========== */}
        {/* <Services21 /> */}
        {/* </section> */}
        <section className="wrapper bg-gray">
          <div className="container pt-8 pb-4 pt-md-8 ">
            <Services9 />
          </div>
        </section>
        {/* </section> */}

        <section>
          <div className="pt-10 pb-10 pt-md-12 pb-md-12">
            <Services2
              title={data?.Solutions.title}
              description1={data?.Solutions.description}
              description2="Add the necessary contraints before submitting claims to increase the chance of quick acceptance and payment. "
              image="/img/photos/claims-service.svg"
            />
          </div>
        </section>
        <div className="px-4 px-md-12 py-8 bg-gray pb-md-8 bg-gray">
          {/* <div className="pt-8 pb-8 pt-md-8 pb-md-8"> */}
          <About14
            image="/img/photos/claims-about.svg"
            title={data?.About.title}
            description1={data?.About.description}
          />
          {/* </div> */}
        </div>
        <div className="bg-light pt-8">
          <Testimonial2 />
        </div>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
