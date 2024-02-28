import { FC } from "react";
// -------- data -------- //
import { processList7 } from "data/process";

const Process8: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-8 align-items-center">
      <div className="col-lg-7">
        <figure>
          <img className="w-auto" src="/img/illustrations/i3.png" alt="" />
        </figure>
      </div>

      <div className="col-lg-5 text-dark">
        <h2 className="fs-15 text-uppercase text-line text-primary mb-3">
          Our Philosophy ?
        </h2>

        <div>
          Our goals and services are based on two fundamental philosophical
          principles
          <div style={{ paddingTop: "10px" }}>
            <ul>
              <li>
                The belief in the innate worth of our aged and ‘physically
                challenged’ friends and families.
              </li>
              <li>
                The belief that each individual, regardless of age, race, color,
                creed, sex, national origin or handicap’s is entitled to
                maximize his/her potential as a human being and as a member of
                our society.
              </li>
            </ul>
          </div>
          <div>
            It is our contention that the aging process is a normal state in the
            development of any individual and that chronic disease and
            disability are, to some degree, a result of aging process. We are
            fully dedicated to rehabilitating aged and disabled individuals
            within the confines of their residence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process8;
