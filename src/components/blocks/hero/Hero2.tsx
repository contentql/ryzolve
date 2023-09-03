import { FC, useState, useEffect } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import Carousel from 'components/reuseable/Carousel';

type HomePageHeroProps = {
  title: String;
  subtitle: String;
};

const Hero2: FC<HomePageHeroProps> = ({ title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pauseAllExceptActive = () => {
    const videosArray = document.getElementsByClassName('video-ryzolve');

    for (let index = 0; index < videosArray.length; index++) {
      if (index !== activeIndex) {
        videosArray[index].getElementsByTagName('video')[0]?.pause();
      } else {
        videosArray[index].getElementsByTagName('video')[0]?.play();
      }
    }
  };

  useEffect(() => {
    pauseAllExceptActive();
  }, [activeIndex]);

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
            // width: '100%',
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
            // width: '100%',
            // height: 'auto',
            borderRadius: '10px',
            top: '-1.3rem',
          }}
        >
          {/* <img src="/img/photos/macbook.png" alt="hero" /> */}
          <Carousel
            autoHeight
            spaceBetween={5}
            // navigation={true}
            slidesPerView='auto'
            className='dots-over'
            // slideClassName='bg-overlay bg-overlay-400 rounded'
            slideClassName='rounded'
            // autoplay={true}
            onSlideChange={(e) => {
              setActiveIndex(e.activeIndex);
            }}
          >
            <ReactPlayer
              url={'/videos/intro-compressed.mp4'}
              controls={true}
              playing={true}
              muted={true}
              loop={true}
              className='video-ryzolve'
              // onPlay={() => pauseAllExceptActive()}
            />

            <ReactPlayer
              url={'/videos/testimonial-trm-hospice.mp4'}
              controls={true}
              playing={true}
              muted={false}
              loop={true}
              className='video-ryzolve'
              // onPlay={() => pauseAllExceptActive()}
              // light={
              //   <img
              //     src='https://www.shutterstock.com/shutterstock/photos/338250266/display_1500/stock-vector-sample-red-square-grunge-stamp-on-white-sample-stamp-sample-sample-sign-338250266.jpg'
              //     alt='Thumbnail'
              //   />
              // }
            />
          </Carousel>
        </figure>
      </div>

      <div className='col-lg-5 mt-lg-n10 text-center text-lg-start'>
        <h1 className='display-1 mb-5' style={slideInDownAnimate('600ms')}>
          {title}
        </h1>

        <p
          className='lead fs-25 lh-sm mb-7 px-md-10 px-lg-0'
          style={slideInDownAnimate('900ms')}
        >
          {subtitle}
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
