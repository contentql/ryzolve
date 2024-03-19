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
import { Testimonial4, Testimonial2 } from "components/blocks/testimonial";
import { Process1, Process3 } from "components/blocks/process";
import { Pricing4 } from "components/blocks/pricing";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";
import { useQuery } from "@tanstack/react-query";
import { getHomePageData } from "queries/home-page";
import { Navbar } from "components/blocks/navbar";
import NextLink from "components/reuseable/links/NextLink";

const ryzolve = () => {
  const { data } = useQuery({
    queryKey: ["homepage"],
    queryFn: getHomePageData,
  });

  return (
    <main className="content-wrapper">
      <div className="custom-description-text">
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
      </div>
      {/* </header> */}
      <section>
        {/* <Hero2 title={data?.hero.title} subtitle={data?.hero.subtitle} /> */}
        <Hero12 />
        {/* </section> */}
      </section>
      <section>
        {/* <section className="wrapper bg-light "> */}
        {/* <section className="container pt-16 pt-md-12"> */}
        {/* ========== services section ========== */}
        {/* <Services21 /> */}
        {/* </section> */}
        {/* </section> */}

        <div className="container pt-4 pb-6 pt-md-16 ">
          <Services16 />
        </div>

        <section className="pb-8 pb-md-8 bg-gray">
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

        {/* <div className="container py-14 pt-md-16">
          <Process3 />
        </div> */}

        <div className="container py-8 pt-md-8">
          {/* <section className="px-md-12 py-md-14 px-4 py-4"> */}
          {/* <Services12 /> */}
          {/* edit this */}
          <Services22
            title={data?.ourStrategy.title}
            stepsData={data?.ourStrategy.steps}
          />
          {/* </section> */}
        </div>

        <div className="bg-gray">
          <div className="container py-8 pt-md-8">
            {/* <section className="px-2 px-md-12 pt-md-12 pb-md-10 "> */}
            <Process1
              title={data?.howItWorks.title}
              steps={data?.howItWorks.working_steps}
            />
            {/* </section> */}
          </div>
        </div>

        <section>
          <Pricing4 />
        </section>

        <div className="bg-light">
          <div className="container py-8 pt-md-8">
            <Testimonial2 />
          </div>
        </div>

        {/* <div className="">
          <div className="container py-6 pt-md-4">
            <section className="px-2 pb-4 px-md-12 bg-light pt-md-12">
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
          </div>
        </div> */}

        <Contact10 />

        <Footer3 hiddenNewsletter={true} />
      </section>
    </main>
  );
};

export default ryzolve;
