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
            title="Ensure outstanding claims are settled efficiently"
            subtitle="Recevie payments directly form your chosen medical insurence partner, without the need to chase"
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
            title="Forward thinking claims planning"
            description1="Claim rejections or denials can add additional effort to your claims workflow. 
"
            description2="Add the necessary contraints before submitting claims to increase the chance of quick acceptance and payment. "
            image="/img/photos/claims-service.svg"
          />
        </section>
        <section className="">
          <Testimonial4 />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className="px-12 py-12 bg-gray">
          <About14
            image="/img/photos/claims-about.svg"
            title="Reduced workload, improved accuracy"
            description1="Our simple claims entry process utilises simple templates to help manage repetitive tasks easily. Automating validation massively reduces the chance of human error and speeds up claims payment. "
          />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
