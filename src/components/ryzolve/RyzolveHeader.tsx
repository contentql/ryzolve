import React from "react";
import { Navbar } from "components/blocks/navbar";

import NextLink from "components/reuseable/links/NextLink";

const RyzolveHeader = () => {
  return (
    <Navbar
      info={false}
      fancy
      navOtherClass="navbar-other ms-lg-4"
      navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light"
      button={
        <a
          href="/calendly"
          // data-bs-toggle="modal"
          // data-bs-target="#modal-signin"
          className="btn btn-sm btn-primary rounded-pill"
        >
          Book a demo
        </a>
      }
    />
  );
};

export default RyzolveHeader;
