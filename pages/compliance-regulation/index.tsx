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

const index = () => {
  const { data } = useQuery({
    queryKey: ["complianceRegulation"],
    queryFn: () => getPageData("complianceRegulation"),
  });
  return (
    <div>
      <section className="bg-gray">
        <header className="wrapper">
          <RyzolveHeader />
        </header>
        <section className="p-4 wrapper">
          <Hero10 title={data?.Hero.title} subtitle={data?.Hero.subtitle} />
        </section>
      </section>
      <section className="content-wrapper wrapper">
        {/* Services Section */}

        <section className="wrapper bg-light ">
          <section className="container pt-16 pt-md-12">
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2
            title={data?.Solutions.title}
            description1={data?.Solutions.description}
            description2="Automate your scheduled and on-demand background checks for all of the following reports: "
            list={data?.Solutions.personalAgency}
            image="/img/photos/compliance-reducewaste.svg"
          />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-4 px-md-12 py-12 bg-gray pb-md-12">
          <About14
            image="/img/photos/compliance-about.svg"
            title={data?.About.title}
            description1={data?.About.description}
          />
        </section>
        <section>
          <Services2
            title="Save time with data verification services"
            description1="Perform automated verification checks for credentials and age. Reduce human error and agency effort while quickly highlighting issues through exception reporting. "
            image="/img/photos/compliance-service.svg"
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
