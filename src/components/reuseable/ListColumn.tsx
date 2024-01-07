import { FC } from "react";

// ===========================================================
type ListColumnProps = {
  list: { item: string }[][];
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
      {list.map((value, i) => (
        <div key={i}>
          <ul className={`icon-list bullet-bg bullet-soft-${bulletColor} mb-0`}>
            {value.map((item, i) => {
              const liProps = i !== 0 ? { className: "mt-3" } : {};
              return (
                <li
                  key={item.item}
                  {...liProps}
                  className="custom-card-description-text"
                >
                  <i className="uil uil-check" /> {item.item}
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
