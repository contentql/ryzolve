import { FC, Fragment } from 'react';
// -------- icons -------- //
import Rocket from 'icons/lineal/Rocket';
import Shield from 'icons/lineal/Shield';
import Savings from 'icons/lineal/Savings';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';

const Services12: FC = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center'>
          <h2 className='fs-15 text-uppercase text-muted mb-3'>
            Why Choose ryzolve?
          </h2>
          <h3 className='display-4 mb-10 px-xl-10 px-xxl-15'>
            All In One Platform To Help Your Agency Grow
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
              <Rocket className='icon-svg-md text-yellow me-4' />
            </div>
            <div>
              <h4 className='mb-1'>Digital Document Management</h4>
              {/* <p>Duis mollis commodo luctus cursus commodo tortor mauris.</p> */}
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
              <Savings className='icon-svg-md text-green me-4' />
            </div>
            <div>
              <h4 className='mb-1'>Compliance Regulation</h4>
              {/* <p>Vivamus sagittis lacus augue fusce dapibus tellus nibh.</p> */}
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
              <Shield className='icon-svg-md text-red me-4' />
            </div>
            <div>
              <h4 className='mb-1'>Claims & Billing</h4>
              {/* <p>Vestibulum ligula porta felis maecenas faucibus mollis.</p> */}
            </div>
          </a>
        </li>
      </ul>

      {/* ========== tab content ========== */}
      <div className='tab-content mt-6 mt-lg-8 mb-md-9'>
        <div className='tab-pane fade active show' id='tab2-1' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6'>
              <div className='row gx-md-5 gy-5 align-items-center'>
                <div className='col-8'>
                  <img
                    alt=''
                    src='/img/photos/sa13.jpg'
                    srcSet='/img/photos/sa13@2x.jpg'
                    className='img-fluid rounded shadow-lg d-flex ms-auto'
                  />
                </div>
              </div>
            </div>

            <List
              title='Are you risking liability with outdated document management methods?'
              color='yellow'
            />
          </div>
        </div>

        <div className='tab-pane fade' id='tab2-2' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6 order-lg-2'>
              <div className='row gx-md-5 gy-5'>
              <div className='col-8'>
                  <img
                    alt=''
                    src='/img/photos/sa13.jpg'
                    srcSet='/img/photos/sa13@2x.jpg'
                    className='img-fluid rounded shadow-lg d-flex ms-auto'
                  />
                </div>
              </div>
            </div>

            <List
              title='Are you risking liability with outdated'
              color='green'
            />
          </div>
        </div>

        <div className='tab-pane fade' id='tab2-3' role='tabpanel'>
          <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
            <div className='col-lg-6'>
              <div className='row gx-md-5 gy-5'>
                <div className="col-lg-6">
                  <figure className="rounded shadow-lg">
                    <img src="/img/photos/sa13.jpg" srcSet="/img/photos/sa13@2x.jpg 2x" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <List title='Forward thinking claims planning' color='red' />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

type ListProps = { color: 'red' | 'yellow' | 'green'; title: string };
const List = ({ color, title }: ListProps) => {
  return (
    <div className='col-lg-6'>
      <h2 className='mb-3'>{title}</h2>
      <p>
        Claim rejections or denials can add additional effort to your claims
        workflow. Add the necessary contraints before submitting claims to
        increase the chance of quick acceptance and payment.
      </p>

      <ul className={`icon-list bullet-bg bullet-soft-${color}`}>
        <li>
          <i className='uil uil-check' /> Runs PAS Position Background Checks
          For You
        </li>
        <li>
          <i className='uil uil-check' /> Reduces Paperwork
        </li>
        <li>
          <i className='uil uil-check' /> Minimizes Errors
        </li>
        <li>
          <i className='uil uil-check' /> Saves Time
        </li>
      </ul>

      <NextLink
        title='Learn More'
        href='#'
        className={`btn btn-${color} mt-2`}
      />
    </div>
  );
};

export default Services12;
