import { FC } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Carousel from 'components/reuseable/Carousel';

const Hero2: FC = () => {
  return (
    <div className='row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7  align-items-center'>
      <div
        className='col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2'
        style={zoomInAnimate('0ms')}
      >
        <div
          className='shape bg-dot primary rellax w-17 h-19'
          style={{ top: '-4rem', left: '-2rem' }}
        />
        <div
          className='shape rounded bg-soft-primary rellax d-md-block'
          style={{
            width: '100%',
            height: '0%',
            right: '-0.8rem',
            bottom: '-1.8rem',
          }}
        />

        <figure
          style={{
            // float: 'left',
            display: 'block',
            overflow: 'hidden',
            width: '100%',
            // height: 'auto',
            borderRadius: '10px',
            top: '-1.3rem',
          }}
        >
          {/* <img src="/img/photos/macbook.png" alt="hero" /> */}
          <Carousel
            autoHeight
            spaceBetween={5}
            // navigation={false}
            slidesPerView={1}
            className='dots-over'
            slideClassName='bg-overlay bg-overlay-400 rounded'
          >
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=JxIN5fruFFo'}
              controls={true}
              playing={true}
              muted={true}
              loop={true}
            />
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=hWo11lQmaBo'}
              controls={true}
              playing={true}
              muted={true}
              loop={true}
            />
          </Carousel>
        </figure>
      </div>

      <div className='col-lg-5 mt-lg-n10 text-center text-lg-start'>
        <h1 className='display-1 mb-5' style={slideInDownAnimate('600ms')}>
          Improve Your Agency's Efficiency & Compliance
        </h1>

        <p
          className='lead fs-25 lh-sm mb-7 px-md-10 px-lg-0'
          style={slideInDownAnimate('900ms')}
        >
          Provider Management Software To Help PAS Agencies Be More Efficient{' '}
        </p>

        <div className='d-flex justify-content-center justify-content-lg-start'>
          <span style={slideInDownAnimate('1200ms')}>
            <NextLink
              title='Book a Demo'
              href='/calendly'
              className='btn btn-lg btn-primary rounded-pill me-2'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
