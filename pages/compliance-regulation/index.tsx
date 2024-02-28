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
import Services9 from "components/blocks/services/Services9";
import NextLink from "components/reuseable/links/NextLink";

const index = () => {
  const { data } = useQuery({
    queryKey: ["complianceRegulation"],
    queryFn: () => getPageData("complianceRegulation"),
  });
  return (
    <div>
      <Navbar
        logoAlt="logo-purple"
        navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
        button={
          <NextLink
            title="Book a Demo"
            href="/calendly"
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
      <section className="wrapper">
        <div className="pt-10 pb-6 pt-md-14 pb-md-4 text-center">
          <div className="row">
            {/* <div className='col-md-8 col-lg-8 col-xl-6 col-xxl-5 mx-auto mb-11'> */}
            <h1 className="display-1 mb-3 custom-page-heading-text">
              {data?.Hero.title}
            </h1>
            <p className="px-lg-7 px-xl-7 px-xxl-6 custom-description-text">
              {data?.Hero.subtitle}
            </p>
            <div style={slideInDownAnimate("600ms")}>
              <NextLink
                title="Explore"
                href="#solutions"
                className="btn btn-lg btn-secondary rounded my-6"
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
          <div className="pt-8 pb-8 pt-md-10 pb-md-10">
            <Services2
              title={data?.Solutions.title}
              description1={data?.Solutions.description}
              description2="Automate your scheduled and on-demand background checks for all of the following reports: "
              list={data?.Solutions.personalAgency}
              image="/img/photos/compliance-reducewaste.svg"
            />
          </div>
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-4 px-md-12 py-8 bg-gray pb-md-8">
          <About14
            image="/img/photos/compliance-about.svg"
            title={data?.About.title}
            description1={data?.About.description}
          />
        </section>
        <section>
          <div className="pt-10 pb-10 pt-md-10 pb-md-10">
            <Services2
              title="Save time with data verification services"
              description1="Perform automated verification checks for credentials and age. Reduce human error and agency effort while quickly highlighting issues through exception reporting. "
              image="/img/photos/compliance-service.svg"
            />
          </div>
        </section>
        <div className="bg-light">
          <Testimonial2 />
        </div>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
