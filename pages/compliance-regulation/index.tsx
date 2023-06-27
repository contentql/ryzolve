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
      <header className="wrapper bg-gray">
        <RyzolveHeader />
      </header>
      <section className="content-wrapper wrapper">
        <section className="p-12 wrapper bg-gray">
          <Hero10 />
        </section>

        {/* Services Section */}

        <section className="wrapper bg-light ">
          <section className="container pt-2 pb-md-2">
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2 />
        </section>
        <section className="mb-md-12">
          <Testimonial4 />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-12  bg-gray pb-12">
          <About14 />
        </section>
        <section>
          <Services2 isListingTrue={true} />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
