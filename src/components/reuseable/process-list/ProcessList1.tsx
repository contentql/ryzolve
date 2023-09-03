import { FC, HTMLAttributes } from "react";

// ==============================================================
type ProcessList1Props = {
  no: number;
  name: string;
  description: string;
  shadow?: boolean;
  className: HTMLAttributes<HTMLDivElement>["className"];
};
// ==============================================================

const ProcessList1: FC<ProcessList1Props> = (props) => {
  const { no, name, description, className, shadow } = props;

  return (
    <div className={`card ${className} ${shadow && "shadow-lg"}`}>
      <div className="card-body px-4 py-2 px-md-6 py-md-4">
        <div className="d-flex flex-row">
          <div>
            <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
              <span className="number">{no}</span>
            </span>
          </div>

          <div>
            <h4 className="mb-1">{name}</h4>
            <p className="mb-0">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessList1;
