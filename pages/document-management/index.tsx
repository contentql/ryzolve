import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero10 } from "components/blocks/hero";
import { Services2, Services21 } from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
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
    queryKey: ["documentManagement"],
    queryFn: () => getPageData("documentManagement"),
  });
  return (
    <div>
      {/* <section className="bg-gray"> */}
      {/* <header className="wrapper">
          <RyzolveHeader />
        </header> */}
      <Navbar
        logoAlt="logo-purple"
        navClassName="navbar navbar-expand-lg  navbar-light navbar-bg-light caret-none"
        button={
          <NextLink
            title="Book a Demo"
            href="#"
            className="btn btn-sm btn-primary rounded"
          />
        }
      />
      {/* <section className="p-4 wrapper">
        <Hero10 title={data?.Hero.title} subtitle={data?.Hero.subtitle} />
      </section> */}
      <section className="wrapper">
        <div className="container pt-10 pb-6 pt-md-14 pb-md-4 text-center">
          <div className="row">
            <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto mb-11">
              <h1 className="display-1 mb-3">{data?.Hero.title}</h1>
              <p className="lead px-lg-7 px-xl-7 px-xxl-6">
                {data?.Hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* </section> */}
      <section className="content-wrapper wrapper">
        {/* Services Section */}

        <section className="wrapper bg-gray ">
          {/* <section className="container pt-16 pt-md-12">
            ========== services section ==========
            <Services21 />
          </section> */}
          <section className="wrapper bg-gray">
            <div className="container pt-6 pb-12 pt-md-16 ">
              <Services9 />
            </div>
          </section>
        </section>

        <section>
          <Services2
            title={data?.Solutions.title}
            description1={data?.Solutions.description}
            image="/img/photos/doc-man-reducewaste.svg"
          />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-12 py-12 bg-gray">
          <About14
            image="/img/photos/doc-feature.svg"
            title={data?.About.title}
            description1={data?.About.description}
            list={[
              "Tailored document suites to fit your healthcare structure",
              "Templates for painless authorization, client intake and medication workflows",
              "Flexible digital filing system personalized to your needs",
            ]}
          />
        </section>
        <section className="">
          <Testimonial4 />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
