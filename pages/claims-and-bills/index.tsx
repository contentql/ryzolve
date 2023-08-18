import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero10 } from "components/blocks/hero";
import { Services2, Services21 } from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";
import { useQuery } from "@tanstack/react-query";
import { getClaimsAndBillingData } from "queries/claims-and-bills";

const index = () => {
  const { data } = useQuery({
    queryKey: ["claimsAndBillings"],
    queryFn: getClaimsAndBillingData,
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
          <section className="container pt-2 pb-md-20">
            {/* ========== services section ========== */}
            <Services21 servicesData={data?.Services} />
          </section>
        </section>

        <section>
          <Services2
            title={data?.Solutions.title}
            description1={data?.Solutions.description}
            description2="Add the necessary contraints before submitting claims to increase the chance of quick acceptance and payment. "
            image="/img/photos/claims-service.svg"
          />
        </section>
        <section className="">
          <Testimonial4 testimonialData={data?.Testimonial} />
        </section>
        <section className="px-12 py-12 bg-gray">
          <About14
            image="/img/photos/claims-about.svg"
            title={data?.About.title}
            description1={data?.About.description}
          />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
