import { FC, useState } from "react";
import Email from "icons/lineal/Email";
import SocialLinks from "components/reuseable/SocialLinks";
import { useRouter } from "next/router";
import { getNewsLetter } from "queries/news-letter";
import { useQuery } from "@tanstack/react-query";

const Contact10: FC = () => {
  const router = useRouter();
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   // router.push('https://www.africau.edu/images/default/sample.pdf');
  //   window.location.assign('https://www.africau.edu/images/default/sample.pdf');
  // };

  const [data, setData] = useState<any>({});

  const { data: newsletter } = useQuery({
    queryKey: ["newsletter"],
    queryFn: getNewsLetter,
  });

  const updateData = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    console.log(data);
    e.preventDefault();
    const requestBody = {
      data: {
        email: data.email,
        name: data.name,
      },
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/customers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      setData({});
      const resData = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="wrapper bg-light">
      <div className="container pt-10 pt-md-10">
        <div className="card bg-soft-primary mb-8">
          <div className="card-body p-12">
            <div className="row gx-md-8 gx-xl-12 gy-10">
              <div className="col-lg-6 ">
                <Email />
                <h2 className="display-4 mb-3 pe-lg-10 custom-description-text">
                  {newsletter?.title}
                </h2>
                <p className="pe-lg-12 mb-0 custom-description-text">
                  {newsletter?.description}
                </p>
              </div>

              <div className="col-lg-6 pt-8">
                <form
                  className="contact-form needs-validation"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="messages"></div>
                  <div className="row gx-4">
                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="text"
                          name="name"
                          id="frm_name"
                          placeholder="Jane"
                          className="form-control border-0"
                          data-error="First Name is required."
                          onChange={updateData}
                        />

                        <label htmlFor="frm_name">Name *</label>
                        <div className="invalid-feedback">
                          Please enter your name.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating mb-4">
                        <input
                          required
                          type="email"
                          name="email"
                          id="frm_email"
                          className="form-control border-0"
                          placeholder="jane.doe@example.com"
                          data-error="Valid email is required."
                          onChange={updateData}
                        />

                        <label htmlFor="frm_email">Email *</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please provide a valid email address.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      {/* <input
                        type='submit'
                        value='Download Now'
                        className='btn btn-outline-primary rounded-pill btn-send mb-3'
                      /> */}
                      <a
                        href="https://www.africau.edu/images/default/sample.pdf"
                        target="_blank"
                        type="submit"
                      >
                        <button className="btn btn-outline-secondary rounded-pill btn-send mb-3">
                          Download Now
                        </button>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="d-md-flex align-items-center justify-content-between">
          <p className="mb-2 mb-lg-0">© 2022 ryzolve. All rights reserved.</p>
          <SocialLinks className="nav social social-muted mb-0 text-md-end" />
        </div> */}
      </div>
    </section>
  );
};

export default Contact10;
