import { FC, Fragment } from 'react';
// -------- icons -------- //
import Bulb from 'icons/solid-mono/Bulb';
import Compare from 'icons/solid-mono/Compare';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

const Services22: FC = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center'>
          <h2 className='fs-16 text-uppercase text-muted mb-3'>
            Why Choose{' '}
            <span className='underline-3 style-2 orange'>ryzolve?</span>
          </h2>
          <h3 className='display-3 mb-10 px-xl-10 px-xxl-15'>
            All In One Platform To Help Your Agency Grow
            {/* <span className='underline-3 style-2 yellow'>reasons</span> */}
          </h3>
        </div>
      </div>

      <ul
        role='tablist'
        className='nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column'
      >
        <li className='nav-item' role='presentation'>
          <a
            role='tab'
            href='#tab2-1'
            data-bs-toggle='tab'
            aria-selected='true'
            className='nav-link d-flex flex-row active'
          >
            <div>
              <Bulb />
            </div>
            <div>
              <h4 className='mb-1'>Digital Document Management</h4>
            </div>
          </a>
        </li>

        <li className='nav-item' role='presentation'>
          <a
            role='tab'
            tabIndex={-1}
            href='#tab2-2'
            data-bs-toggle='tab'
            aria-selected='false'
            className='nav-link d-flex flex-row'
          >
            <div>
              <Compare />
            </div>
            <div>
              <h4 className='mb-1'>Compliance Regulation</h4>
            </div>
          </a>
        </li>

        <li className='nav-item' role='presentation'>
          <a
            role='tab'
            tabIndex={-1}
            href='#tab2-3'
            data-bs-toggle='tab'
            aria-selected='false'
            className='nav-link d-flex flex-row'
          >
            <div>
              <DeliveryBox className='icon-svg-sm solid-mono text-green me-4' />
            </div>
            <div>
              <h4 className='mb-1'>Claims & Billing</h4>
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className='tab-content mt-6 mt-lg-8'>
        <div className='tab-pane fade active show' id='tab2-1' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6'>
              <figure className='rounded shadow-lg'>
                <img
                  src='/img/photos/about7.jpg'
                  srcSet='/img/photos/about7@2x.jpg 2x'
                  alt=''
                />
              </figure>
            </div>

            <List
              title='Digital Document Management'
              color='orange'
              description={[
                'Run PAS Position Background Checks For You',
                'Reduces Paperwork',
                'Minimizes Errors',
                'Saves Time',
              ]}
            />
          </div>
        </div>

        <div className='tab-pane fade' id='tab2-2' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6 order-lg-2'>
              <figure className='rounded shadow-lg'>
                <img
                  src='/img/photos/about7.jpg'
                  srcSet='/img/photos/about7@2x.jpg 2x'
                  alt=''
                />
              </figure>
            </div>

            <List
              title='Data Analysis'
              color='violet'
              description={[
                'Runs Government Monthly Compliance/Background Checks',
                'Helps Avoid Fines & Sanctions ',
                'Keeps You Compliant',
              ]}
            />
          </div>
        </div>

        <div className='tab-pane fade' id='tab2-3' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6'>
              <figure className='rounded shadow-lg'>
                <img
                  src='/img/photos/about7.jpg'
                  srcSet='/img/photos/about7@2x.jpg 2x'
                  alt=''
                />
              </figure>
            </div>

            <List
              title='Finalize Product'
              color='green'
              description={[
                'Streamlines Claim Filing Process W/ State & Managed Care Organizations',
                'Improves Scheduling of Provider/Client Payroll Aggregation ',
                'Increases Efficiency of Approvals',
              ]}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type ListProps = {
  color: 'fuchsia' | 'violet' | 'green' | 'orange';
  title: string;
  description?: string[];
};
const List = ({ color, title, description }: ListProps) => {
  return (
    <div className='col-lg-6'>
      <h2 className='mb-3'>{title}</h2>
      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        {description?.map((el) => (
          <li>
            <i className='uil uil-check' /> {el}
          </li>
        ))}
      </ul>

      {/* <NextLink
        title='Learn More'
        href='#'
        className={`btn btn-${color} mt-2`}
      /> */}
    </div>
  );
};

export default Services22;
