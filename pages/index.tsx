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
        <section className='p-4 p-md-12 wrapper w-100'>
          <Hero2 />
        </section>
      </section>
      <section className='content-wrapper wrapper'>
        <section className='wrapper bg-light '>
          <section className='container pt-16 pt-md-12 pb-md-2'>
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2
            title="Your Agency Shouldn't Have to Waste Time With Outdated Processes"
            description1='Most healthcare providers waste enormous amounts of time and
                staff using manual processes to manage claims, hire staff and
                attempt to meet government regulations. These providers end up
                having staff overwhelmed and frustrated with paperwork that
                keeps piling up, causing delays for patients which ultimately
                affects your bottom line.'
            description2="Your agency shouldn't have to waste time with manual processes.
                We created the Ryzolve software to help agencies like yours
                implement a digital approach that saves time, resources and
                overall improves your company's efficiency."
            image='/img/photos/reducewaste-increase.svg'
          />
        </section>
        <section className='px-md-12 py-md-14 px-4 py-4'>
          {/* <Services12 /> */}
          <Services22 />
        </section>
        <Testimonial4 />
        <section className='px-4 pt-4 pb-4 pb-md-8 px-md-12 pt-md-14'>
          <Process1 />
        </section>
        <section className='mb-12'>
          <Pricing4 />
        </section>
        <section className='px-4 pb-4 px-md-12 bg-light pb-md-14'>
          <About14
            image='/img/illustrations/ryzolve-about.svg'
            title='Ryzolve helps healthcare providers reduce wasted time with their filing & paperwork so they can improve efficiency and stay compliant.'
            description1='We understand how frustrating paperwork, files, and hiring can be with certain processes. Our personal agency struggled with manual processes for years so much that we were losing money. From wasting time hiring, to losing money on denials, we built the Ryzolve software out of this frustration. We believe that your agency shouldn’t have to lose money or suffer from denials and audits. '
            description2='Personal Agency'
            list={[
              '4 Years Of No Penalties',
              'Saved Hundreds Of Hours Hiring Staff',
              'Increased Revenue While Reducing/Eliminating Denials',
            ]}
          />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default ryzolve;
