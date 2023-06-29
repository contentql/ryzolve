import RyzolveHeader from 'components/ryzolve/RyzolveHeader';
import React from 'react';
import { Hero2 } from 'components/blocks/hero';
import { processList5 } from 'data/process';
import Image from 'next/image';
import {
  Services12,
  Services2,
  Services21,
  Services22,
} from 'components/blocks/services';
import { Testimonial4 } from 'components/blocks/testimonial';
import { Process1 } from 'components/blocks/process';
import { Pricing4 } from 'components/blocks/pricing';
import { Contact10 } from 'components/blocks/banner/contact';
import { Footer3 } from 'components/blocks/footer';
import { About14 } from 'components/blocks/about';

const ryzolve = () => {
  return (
    <div>
      <section className='bg-rezolve'>
        <header className='wrapper'>
          <RyzolveHeader />
        </header>
        <section className='p-12 wrapper'>
          <Hero2 />
        </section>
      </section>
      <section className='content-wrapper wrapper'>
        <section className='wrapper bg-light '>
          <section className='container pt-12 pb-md-2'>
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2 />
        </section>
        <section className='px-12 py-14'>
          {/* <Services12 /> */}
          <Services22 />
        </section>
        <Testimonial4 />
        <section className='px-4 pt-4 px-md-12 pt-md-14'>
          <Process1 />
        </section>
        <section className='mb-12'>
          <Pricing4 />
        </section>
        <section className='px-12 bg-light pb-14'>
          <About14 />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default ryzolve;
