import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero2, Hero12 } from "components/blocks/hero";
import { processList5 } from "data/process";
import Image from "next/image";
import {
  Services12,
  Services2,
  Services21,
  Services22,
  Services16,
} from "components/blocks/services";
import {} from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
import { Process1 } from "components/blocks/process";
import { Pricing4 } from "components/blocks/pricing";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";
import { useQuery } from "@tanstack/react-query";
import { getHomePageData } from "queries/home-page";
import { Navbar } from "components/blocks/navbar";
import NextLink from "components/reuseable/links/NextLink";

// style={{ top: "-1.7rem", left: "-1.5rem" }}

const ryzolve = () => {
  const { data } = useQuery({
    queryKey: ["homepage"],
    queryFn: getHomePageData,
  });

  // console.log(data);

  return (
    <div>
      {/* <section className="bg-rezolve"> */}
      {/* <header className="wrapper"> */}
      {/* <RyzolveHeader /> */}
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
      {/* </header> */}
      <section>
        {/* <Hero2 title={data?.hero.title} subtitle={data?.hero.subtitle} /> */}
        <Hero12 />
        {/* </section> */}
      </section>
      <section className=" bg-light">
        {/* <section className="wrapper bg-light "> */}
        {/* <section className="container pt-16 pt-md-12"> */}
        {/* ========== services section ========== */}
        {/* <Services21 /> */}
        {/* </section> */}
        {/* </section> */}

        <div className="container py-14 pt-md-16">
          <Services16 />
        </div>

        <section>
          <Services2
            title={data?.ourSolutions?.title}
            description1={data?.ourSolutions?.description}
            // description2="Your agency shouldn't have to waste time with manual processes.
            //     We created the Ryzolve software to help agencies like yours
            //     implement a digital approach that saves time, resources and
            //     overall improves your company's efficiency."
            image="/img/photos/reducewaste-increase.svg"
            description3="Personal Agency"
            // list={[
            //   "4 Years Of No Penalties",
            //   "Saved Hundreds Of Hours Hiring Staff",
            //   "Increased Revenue While Reducing/Eliminating Denials",
            // ]}
            list={data?.ourSolutions?.personalAgency}
          />
        </section>
        <section className="px-md-12 py-md-14 px-4 py-4">
          {/* <Services12 /> */}
          {/* edit this */}
          <Services22
            title={data?.ourStrategy.title}
            stepsData={data?.ourStrategy.steps}
          />
        </section>
        <section className="px-4 pt-4 pb-4 pb-md-8 px-md-12 pt-md-14">
          <Process1
            title={data?.howItWorks.title}
            steps={data?.howItWorks.working_steps}
          />
        </section>
        <section className="mb-12">
          <Pricing4 />
        </section>
        <Testimonial4 />
        <section className="px-2 pb-4 px-md-12 bg-light pb-md-14">
          <About14
            image="/img/photos/our-strategy.svg"
            title={data?.aboutUs.title}
            description1={data?.aboutUs.description}
            // description2="Personal Agency"
            // list={[
            //   "4 Years Of No Penalties",
            //   "Saved Hundreds Of Hours Hiring Staff",
            //   "Increased Revenue While Reducing/Eliminating Denials",
            // ]}
          />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default ryzolve;
