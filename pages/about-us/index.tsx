import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer3 } from 'components/blocks/footer';
import { Process8 } from 'components/blocks/process';
import NextLink from 'components/reuseable/links/NextLink';
import AccordionList from 'components/common/AccordionList';
// -------- icons component -------- //
import BarChart from 'icons/lineal/BarChart';
import SettingsThree from 'icons/lineal/SettingsThree';
// -------- data -------- //
import Browser from 'icons/lineal/Browser';
import ChatTwo from 'icons/lineal/ChatTwo';
import Gift from 'icons/lineal/Gift';
import IdCard from 'icons/lineal/IdCard';
import { getHomePageData } from 'queries/home-page';
import { useQuery } from '@tanstack/react-query';
import { getFooterData } from 'queries/footer';
import { getAboutUsData } from 'queries/aboutUs';
const serviceList2 = [
  {
    id: 1,
    title: 'Improve Efficiency',
    Icon: <Browser />,
    description: `Document Management that suites to fit your healthcare structure to increase Efficiency.`,
  },
  {
    id: 2,
    title: 'Stay Compliant',
    Icon: <ChatTwo className='icon-svg-md text-green mb-3' />,
    description: `Compliance that meets all government requirements, providing automation and peace of mind.`,
  },
  {
    id: 3,
    title: 'Increase Profits',
    Icon: <Gift />,
    description: `Receive payments directly from your chosen medical insurance partner, without the need to chase.`,
  },
  {
    id: 4,
    Icon: <IdCard />,
    title: 'Training',
    description: `We facilitate the licensing and training processes for home care, provide certificates.`,
  },
];

const AboutTwo: NextPage = () => {
  const { data } = useQuery({
    queryKey: ['homepage'],
    queryFn: getHomePageData,
  });

  const { data: footer } = useQuery({
    queryKey: ['footerData'],
    queryFn: getFooterData,
  });

  const { data: aboutUs } = useQuery({
    queryKey: ['aboutUs'],
    queryFn: getAboutUsData,
  });

  const combinedArray = data?.services?.map((service: any, index: number) => {
    const { name, description, link } = service;
    const { Icon } = serviceList2[index];

    return {
      name,
      description,
      link,
      Icon,
    };
  });

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className='wrapper bg-soft-primary'>
        <Navbar
          logoAlt='logo-purple'
          navClassName='navbar navbar-expand-lg center-nav transparent navbar-light'
          button={
            <NextLink
              title='Book a Demo'
              href='/calendly'
              className='btn btn-sm btn-secondary rounded'
            />
          }
          loginButton={
            <NextLink
              title='Login'
              href='https://ryzolve.com/providerapp'
              className='btn btn-sm btn-outline-secondary rounded'
            />
          }
        />
      </header>

      <main className='content-wrapper'>
        {/* ========== page title section ========== */}
        <section className='wrapper bg-soft-primary'>
          <div className='container pt-10 pb-20 pt-md-14 pb-md-23 text-center'>
            <div className='row'>
              <div className='col-xl-5 mx-auto mb-6'>
                <h1 className='display-1 mb-3'>About Us</h1>
              </div>
            </div>
          </div>
        </section>

        {/* ========== services section ========== */}
        <section className='wrapper bg-light'>
          <div className='container pb-14 pb-md-16'>
            <div className='row text-center mb-12 mb-md-15'>
              <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22'>
                <figure>
                  <img
                    alt=''
                    className='w-auto'
                    src='/img/illustrations/i8.png'
                    srcSet='/img/illustrations/i8@2x.png 2x'
                  />
                </figure>
              </div>
            </div>

            <div className='row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center bg-gray py-14 text-center'>
              <div className='' style={{ width: 800, marginLeft: 300 }}>
                <h3 className='mb-5 display-5'>{aboutUs?.title}</h3>

                <p>{aboutUs?.description}</p>
              </div>
            </div>

            <div className='row gx-lg-8 gx-xl-12 gy-6 gy-md-0 pt-14 text-center'>
              {combinedArray?.map(({ id, Icon, name, description }: any) => (
                <div className='col-md-6 col-lg-3' key={id}>
                  {Icon}
                  <h4>{name}</h4>
                  <p className='mb-2'>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='wrapper bg-gray'>
          <div className='container py-14 py-md-14'>
            {/* ========== how it work section ========== */}

            <Process8 data={aboutUs} />
          </div>
        </section>

        {/* ========== contact section ========== */}
        <section className='wrapper bg-light'>
          <div className='container py-14 py-md-16'>
            <div className='row gx-lg-8 gx-xl-12 gy-10 align-items-center'>
              <div className='col-lg-7'>
                <figure>
                  <img
                    alt=''
                    className='w-auto'
                    src='/img/illustrations/i5.png'
                  />
                </figure>
              </div>

              <div className='col-lg-5'>
                <h3 className='display-4 mb-7'>
                  Got any questions? Don't hesitate to get in touch.
                </h3>
                <div className='d-flex flex-row'>
                  <div>
                    <div className='icon text-primary fs-28 me-4 mt-n1'>
                      <i className='uil uil-location-pin-alt' />
                    </div>
                  </div>
                  <div>
                    <h5 className='mb-1'>Address</h5>
                    <address>{footer?.ContactUs?.address}</address>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                  <div>
                    <div className='icon text-primary fs-28 me-4 mt-n1'>
                      <i className='uil uil-phone-volume' />
                    </div>
                  </div>
                  <div>
                    <h5 className='mb-1'>Phone</h5>
                    <p>{footer?.ContactUs?.phone}</p>
                  </div>
                </div>
                <div className='d-flex flex-row'>
                  <div>
                    <div className='icon text-primary fs-28 me-4 mt-n1'>
                      <i className='uil uil-envelope' />
                    </div>
                  </div>
                  <div>
                    <h5 className='mb-1'>E-mail</h5>
                    <p className='mb-0'>
                      <a href='mailto:sandbox@email.com' className='link-body'>
                        {footer?.ContactUs?.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer3 hiddenNewsletter={true} />
    </Fragment>
  );
};

export default AboutTwo;
