import RyzolveHeader from "components/ryzolve/RyzolveHeader";
import React from "react";
import { Hero2 } from "components/blocks/hero";
import { processList5 } from "data/process";
import Image from "next/image";
import {
  Services12,
  Services2,
  Services21,
  Services22,
} from "components/blocks/services";
import { Testimonial4 } from "components/blocks/testimonial";
import { Process1 } from "components/blocks/process";
import { Pricing4 } from "components/blocks/pricing";
import { Contact10 } from "components/blocks/banner/contact";
import { Footer3 } from "components/blocks/footer";
import { About14 } from "components/blocks/about";

const ryzolve = () => {
  return (
    <div>
      <header className="wrapper bg-gray">
        <RyzolveHeader />
      </header>
      <section className="content-wrapper wrapper">
        <section className="p-12 wrapper bg-gray">
          <Hero2 />
        </section>

        {/* Services Section */}

        <section className="wrapper bg-light ">
          <section className="container pt-12 pb-md-2">
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2 />
        </section>
        <section className="px-12 py-14">
          {/* <Services12 /> */}
          <Services22 />
        </section>
        {/* <BlogCard2
          link="#"
          category="TEAMWORK"
          title="Amet Dolor Bibendum Parturient Cursus"
          description="Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur."
          cardTop={
            <figure className="card-img-top overlay overlay-1 hover-scale">
              <a className="link-dark" href="#">
                <Image
                  width={960}
                  height={600}
                  src="/img/photos/b1.jpg"
                  alt="blog"
                  style={{ width: "100%", height: "auto" }}
                />
                <span className="bg" />
              </a>

              <figcaption>
                <h5 className="from-top mb-0">Read More</h5>
              </figcaption>
            </figure>
          }
        /> */}
        {/* <Services14 /> */}
        <Testimonial4 />
        <section className="px-12 pt-14">
          <Process1 />
        </section>
        <section className="mb-12">
          <Pricing4 />
        </section>
        <section className="px-12  bg-gray pb-12">
          <About14 />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default ryzolve;
