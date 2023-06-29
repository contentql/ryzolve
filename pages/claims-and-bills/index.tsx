import RyzolveHeader from 'components/ryzolve/RyzolveHeader';
import React from 'react';
import { Hero10 } from 'components/blocks/hero';
import { Services2, Services21 } from 'components/blocks/services';
import { Testimonial4 } from 'components/blocks/testimonial';
import { Contact10 } from 'components/blocks/banner/contact';
import { Footer3 } from 'components/blocks/footer';
import { About14 } from 'components/blocks/about';

const index = () => {
  return (
    <div>
      <section className='bg-rezolve'>
        <header className='wrapper'>
          <RyzolveHeader />
        </header>
        <section className='p-4 wrapper'>
          <Hero10
            title='Managing Paper Work Made Easier'
            subtitle='Electronic Document Management Helping you increase Efficiency'
          />
        </section>
      </section>
      <section className='content-wrapper wrapper'>
        {/* Services Section */}

        <section className='wrapper bg-light '>
          <section className='container pt-2 pb-md-2'>
            {/* ========== services section ========== */}
            <Services21 />
          </section>
        </section>

        <section>
          <Services2
            title='Forward thinking claims planning'
            description1='Claim rejections or denials can add additional effort to your claims workflow. 
'
            description2='Add the necessary contraints before submitting claims to increase the chance of quick acceptance and payment. '
          />
        </section>
        <section className=''>
          <Testimonial4 />
        </section>
        {/* <section className='px-12 pt-12'>
          <Process1 />
        </section> */}
        <section className='px-12  bg-gray pb-12'>
          <About14 />
        </section>
        <Contact10 />
        <Footer3 hiddenNewsletter={true} />
      </section>
    </div>
  );
};

export default index;
