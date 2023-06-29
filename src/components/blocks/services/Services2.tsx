import { FC } from 'react';
import ListColumn from 'components/reuseable/ListColumn';
// -------- data -------- //
import { aboutList1 } from 'data/about';
import NextLink from 'components/reuseable/links/NextLink';
import { slideInDownAnimate } from 'utils/animation';

type Services2Props = {
  tag?: string;
  title: string;
  description1: string;
  description2?: string;
  list?: string[];
};

const Services2: FC<Services2Props> = ({
  tag = 'Our Solutions',
  title,
  description1,
  description2,
  list,
}) => {
  return (
    <section className='wrapper bg-soft-primary py-14'>
      <div className='container'>
        <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
          <div className='col-lg-7 order-lg-2'>
            <figure>
              <img
                className='w-auto'
                alt='our solutions'
                src='/img/illustrations/i8.png'
                srcSet='/img/illustrations/i8@2x.png 2x'
              />
            </figure>
          </div>

          <div className='col-lg-5'>
            <h2 className='fs-16 text-uppercase text-muted mb-3'>{tag}</h2>
            <h3 className='display-4 mb-5'>{title}</h3>

            <div className='mb-6'>
              <p>{description1}</p>
              <p>{description2}</p>
            </div>

            {list && (
              <div className='mb-8'>
                <ListColumn list={[[...list]]} />
              </div>
            )}

            <span style={slideInDownAnimate('1200ms')}>
              <NextLink
                title='Book a Demo'
                href='#'
                className='btn btn-lg btn-primary rounded-pill me-2 '
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
