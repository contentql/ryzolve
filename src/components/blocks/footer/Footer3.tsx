import { FC } from "react";
// import Link from "types/link";
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// -------- data -------- //
import { helps, learnMore } from "data/footer";
import { getFooterData } from "queries/footer";
import { useQuery } from "@tanstack/react-query";
import Social from "../navbar/partials/Social";

// =================================================
type Footer3Props = { hiddenNewsletter?: boolean };
// =================================================

type Link = { id: number; name: string; link: string };

const Footer3: FC<Footer3Props> = ({ hiddenNewsletter }) => {
  const year = new Date();
  const { data } = useQuery({
    queryKey: ["footerData"],
    queryFn: getFooterData,
  });

  // common links section
  const widget = (list: Link[], title: string) => {
    return (
      <div className="widget">
        <h4 className="widget-title mb-3 custom-description-text">{title}</h4>
        <ul className="list-unstyled text-reset mb-0">
          {list?.map(({ link, name, id }) => (
            <li className="custom-card-description-text" key={id}>
              <NextLink href={link} title={name} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <footer className="bg-gradient-reverse-primary">
      <div className="container pt-13 pt-md-12 pb-7">
        {!hiddenNewsletter && (
          <div
            className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mb-13"
            style={{ backgroundImage: "url(/img/photos/bg2.jpg)" }}
          >
            <div className="card-body p-9 p-xl-11">
              <div className="row align-items-center gy-6">
                <div className="col-lg-7">
                  <h3 className="display-5 text-white">
                    Subscribe to our newsletter
                  </h3>
                  <p className="lead pe-lg-12 mb-0 text-white">
                    Subscribe to our newsletter to get our news &amp; deals
                    delivered to you. Dont worry, we hate spam and we respect
                    your privacy.
                  </p>
                </div>

                <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="newsletter-wrapper">
                    <div id="mc_embed_signup2">
                      <form
                        action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                        method="post"
                        id="mc-embedded-subscribe-form2"
                        name="mc-embedded-subscribe-form"
                        className="validate dark-fields"
                        target="_blank"
                      >
                        <div id="mc_embed_signup_scroll2">
                          <div className="mc-field-group input-group form-floating">
                            <input
                              type="email"
                              name="EMAIL"
                              id="mce-EMAIL2"
                              placeholder="Email Address"
                              className="required email form-control"
                            />
                            <label
                              htmlFor="mce-EMAIL2"
                              className="position-absolute"
                            >
                              Email Address
                            </label>
                            <input
                              type="submit"
                              name="subscribe"
                              id="mc-embedded-subscribe2"
                              className="btn btn-primary"
                            />
                          </div>

                          <div id="mce-responses2" className="clear">
                            <div
                              className="response"
                              id="mce-error-response2"
                              style={{ display: "none" }}
                            />
                            <div
                              className="response"
                              id="mce-success-response2"
                              style={{ display: "none" }}
                            />
                          </div>

                          <div
                            style={{ position: "absolute", left: -5000 }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                              tabIndex={-1}
                            />
                          </div>

                          <div className="clear" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row gy-6 gy-lg-0">
          <div className="col-lg-4">
            <div className="widget ">
              <h2 className="mb-3 custom-description-text">
                Join the Community
              </h2>
              <p className="mb-5 custom-card-description-text">
                {data?.JoinTheCommunity}
              </p>
            </div>
          </div>

          <div className="col-md-4 col-lg-2 offset-lg-2">
            {widget(data?.NeedHelp?.help, "Need Help?")}
          </div>

          <div className="col-md-4 col-lg-2">
            {widget(data?.LearnMore?.help, "Learn More")}
          </div>

          <div className="col-md-4 col-lg-2">
            <div className="widget">
              <h4 className="custom-description-text  mb-3">Get in Touch</h4>
              <div className="custom-card-description-text">
                <address>{data?.ContactUs?.address}</address>
                <a
                  href="mailto:first.last@email.com"
                  className="link-body custom-card-description-text"
                >
                  {data?.ContactUs?.email}
                </a>
                <br /> {data?.ContactUs?.phone}
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-13 mt-md-15 mb-7" />

        <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">
            © {year.getFullYear()} ryzolve. All rights reserved.
          </p>
          <SocialLinks className="nav social  text-md-end" />
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
