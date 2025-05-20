import { FC, useState } from "react";
import { toast } from "react-toastify";

const ContactForm: FC = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

      toast("Thank you for contacting us", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "light",
      });

      setData({ name: "", email: "", subject: "", message: "" });

      const resData = await response.json();
    } catch (error) {
      console.error(error);
      toast.error("Error, please try again", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <form className="contact-form needs-validation" method="post" onSubmit={handleSubmit}>
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
              value={data.name}
            />
            <label htmlFor="form_name">First Name *</label>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter your first name.</div>
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
              value={data.email}
            />
            <label htmlFor="form_email">Email *</label>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please provide a valid email address.</div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="text"
              name="subject"
              placeholder="Subject"
              id="form_lastname"
              className="form-control"
              onChange={updateData}
              value={data.subject}
            />
            <label htmlFor="form_lastname">Subject *</label>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter subject.</div>
          </div>
        </div>

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
              value={data.message}
            />
            <label htmlFor="form_message">Message *</label>
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">Please enter your message.</div>
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
