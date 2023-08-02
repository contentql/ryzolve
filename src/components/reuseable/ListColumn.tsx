import { FC } from "react";

// ===========================================================
type ListColumnProps = {
  list: string[][];
  rowClass?: string;
  bulletColor?: string;
};
// ===========================================================

const ListColumn: FC<ListColumnProps> = ({
  list,
  rowClass = "",
  bulletColor = "primary",
}) => {
  return (
    <div className={"gy-3 " + rowClass}>
      {list.map((item, i) => (
        <div key={i}>
          <ul className={`icon-list bullet-bg bullet-soft-${bulletColor} mb-0`}>
            {item.map((li, i) => {
              const liProps = i !== 0 ? { className: "mt-3" } : {};
              return (
                <li key={li} {...liProps}>
                  <i className="uil uil-check" /> {li}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListColumn;
