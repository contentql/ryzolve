import { FC } from 'react';
import { Banner4 } from '../banner';
import ListColumn from 'components/reuseable/ListColumn';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- data -------- //
import { aboutList1 } from 'data/about';
import NextLink from 'components/reuseable/links/NextLink';
import { slideInDownAnimate } from 'utils/animation';

const About14: FC = () => {
  // used for video light box
  useLightBox();

  return (
    <div className='row gy-10 gy-sm-13 gx-lg-3 align-items-center'>
      {/* <div className='col-md-8 col-lg-6 position-relative'>
        <figure className='rounded shadow-lg'>
          <img
            src='/img/photos/about7.jpg'
            srcSet='/img/photos/about7@2x.jpg 2x'
            alt=''
          />
        </figure>
      </div> */}

      <div className='col-lg-7 offset-lg-1'>
        <h2 className='fs-15 text-uppercase text-muted mb-3'>Who Are We?</h2>
        <h3 className='display-4 mb-6'>
          Ryzolve helps healthcare providers reduce wasted time with their
          filing & paperwork so they can improve efficiency and stay compliant.
        </h3>

        <p className='mb-6'>
          We understand how frustrating paperwork, files, and hiring can be with
          certain processes. Our personal agency struggled with manual processes
          for years so much that we were losing money. From wasting time hiring,
          to losing money on denials, we built the Ryzolve software out of this
          frustration. We believe that your agency shouldn’t have to lose money
          or suffer from denials and audits. 
        </p>
        <NextLink
          title='Book a Demo'
          href='#'
          className='btn btn-lg btn-primary rounded-pill me-2'
        />
        <div className='pt-4'>
          <ListColumn rowClass='gx-xl-8' list={aboutList1} />
        </div>
      </div>
    </div>
  );
};

export default About14;
