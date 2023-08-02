import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero10 } from "components/blocks/hero";
import { Services2, Services21 } from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";

const index = () => {
  return (
    <div>
      <section className="bg-rezolve">
        <header className="wrapper">
          <RyzolveHeader />
        </header>
        <section className="p-4 wrapper">
          <Hero10
            title="Stay Compliant"
            subtitle="Compliance that meets all government requirements, providing automation and peace of mind"
          />
        </section>
      </section>
      <section className="content-wrapper wrapper">
        {/* Services Section */}

        <section className="wrapper bg-light ">
          <section className="container pt-2 pb-md-20">
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2
            title="You Shouldnt need to perform background checks by hand"
            description1="Doing background checks for pre-hire and on a monthly basis for potential employees shouldn’t have to be done by hand. 
"
            description2="Automate your scheduled and on-demand background checks for all of the following reports: "
            list={[
              "OIG U.S.DHHS",
              "TXL OIG HHSC",
              "TX: DADS - EMR",
              "TX DPS CRS",
            ]}
            image="/img/photos/compliance-reducewaste.svg"
          />
        </section>
        <section className="">
          <Testimonial4 />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-4 px-md-12 py-12 bg-gray pb-md-12">
          <About14
            image="/img/photos/compliance-about.svg"
            title="Maintain governmental compliance with regular process evaluation"
            description1="Take advantage of annual evaluations and semi-annual supervisory visits with a compliance expert to ensure your agency maintains an optimal setup."
          />
        </section>
        <section>
          <Services2
            title="Save time with data verification services"
            description1="Perform automated verification checks for credentials and age. Reduce human error and agency effort while quickly highlighting issues through exception reporting. "
            image="/img/photos/compliance-service.svg"
          />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
