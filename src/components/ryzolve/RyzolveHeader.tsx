import React from "react";
import { Navbar } from "components/blocks/navbar";

import NextLink from "components/reuseable/links/NextLink";

const RyzolveHeader = () => {
  return (
    <div className="custom-description-text">
      <Navbar
        logoAlt="logo-purple"
        navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
        button={
          <NextLink
            title="Book a Demo"
            href="/calendly"
            className="btn btn-sm btn-secondary rounded"
          />
        }
        loginButton={
          <NextLink
            title="Login"
            href="https://ryzolve.com/providerapp"
            className="btn btn-sm btn-outline-secondary rounded"
          />
        }
      />
    </div>
  );
};

export default RyzolveHeader;
