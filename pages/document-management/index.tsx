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
    queryKey: ["documentManagement"],
    queryFn: () => getPageData("documentManagement"),
  });
  return (
    <div>
      <section className="bg-rezolve">
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
