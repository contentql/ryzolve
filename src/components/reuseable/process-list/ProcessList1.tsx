import { FC, HTMLAttributes } from "react";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";

// ==============================================================
type ProcessList1Props = {
  no: number;
  name: string;
  description: string;
  shadow?: boolean;
  index: number;
  className: HTMLAttributes<HTMLDivElement>["className"];
};
// ==============================================================

const ProcessList1: FC<ProcessList1Props> = (props) => {
  const { no, name, description, className, shadow, index } = props;

  const processIcons = ["Bs1CircleFill", "Bs2CircleFill", "Bs3CircleFill"];

  return (
    <div className={`card ${className} ${shadow && "shadow-lg"}`}>
      <div className="card-body px-4 py-2 px-md-6 py-md-4">
        <div className="d-flex flex-row">
          <div className="px-4">
            {/* <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
              <span className="number">{no}</span>
            </span> */}
            {index === 0 && <Bs1CircleFill color="#007aff" size={50} />}
            {index === 1 && <Bs2CircleFill color="#007aff" size={50} />}
            {index === 2 && <Bs3CircleFill color="#007aff" size={50} />}
          </div>

          <div>
            <h4 className="mb-1 custom-card-text">{name}</h4>
            <p className="mb-0 custom-card-description-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessList1;
