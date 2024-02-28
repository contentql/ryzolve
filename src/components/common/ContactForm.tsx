import { FC, useState } from "react";

const ContactForm: FC = () => {
  const [data, setData] = useState<any>({});

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
        fullname: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      setData({});
      // toast.success('Thank you for contacting us', {
      //   position: 'bottom-right',
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // });
      const resData = await response.json();
    } catch (error) {
      // toast.error('error, please try again', {
      //   position: 'bottom-right',
      //   autoClose: 3000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'light',
      // });
      console.error(error);
    }
  };
  return (
    <form
      className="contact-form needs-validation"
      method="post"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="name"
              id="form_name"
              placeholder="Jane"
              className="form-control"
              onChange={updateData}
            />
            <label htmlFor="form_name">First Name *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please enter your first name.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
              onChange={updateData}
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please provide a valid email address.{" "}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="subject"
              placeholder="Doe"
              id="form_lastname"
              className="form-control"
              onChange={updateData}
            />
            <label htmlFor="form_lastname">Subject *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback"> Please enter subject. </div>
          </div>
        </div>

        {/* <div className="col-md-6">
          <div className="form-select-wrapper mb-4">
            <select
              className="form-select"
              id="form-select"
              name="department"
              required
            >
              <option disabled value="">
                Select a department
              </option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Customer Support">Customer Support</option>
            </select>

            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please select a department.{" "}
            </div>
          </div>
        </div> */}

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
              onChange={updateData}
            />

            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback"> Looks good! </div>
            <div className="invalid-feedback">
              {" "}
              Please enter your messsage.{" "}
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <input
            type="submit"
            value="Send message"
            className="btn btn-primary rounded-pill btn-send mb-3"
          />
          <p>
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
