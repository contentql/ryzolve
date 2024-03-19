// import { FC } from "react";
// import IconProps from "types/icon";
// import { LinkType } from "types/demo-1";
// import NextLink from "../links/NextLink";

// // ===============================================================
// type ServiceCard1Props = {
//   name: string;
//   linkUrl: string;
//   linkType: LinkType;
//   description: string;
//   hoverDescription?: string;
//   cardClassName?: string;
//   iconClassName?: string;
//   Icon: (props: IconProps) => JSX.Element;
// };
// // ===============================================================

// const ServiceCard1: FC<ServiceCard1Props> = (props) => {
//   const {
//     name,
//     description,
//     Icon,
//     linkUrl,
//     linkType,
//     cardClassName,
//     iconClassName,
//     hoverDescription,
//   } = props;

//   return (
//     // <div className='col-md-8 col-xl-4 card-ryzole-hover '>
//     //   <div className={`card shadow-lg ${cardClassName} `}>
//     //     <div className='card-body'>
//     //       <Icon className={iconClassName} />
//     //       <p style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>{title}</p>
//     //       <p className='mb-2'>{description}</p>
//     //       {/* <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} /> */}
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="col-md-6 col-xl-4">
//       <div
//         className={`effectcard ${cardClassName}`}
//         style={{ minHeight: "35vh" }}
//       >
//         <div className="cardcontent card-front">
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <p
//               style={{
//                 fontSize: "1.2rem",
//                 fontWeight: "bolder",
//               }}
//             >
//               {name}
//             </p>

//             <Icon className={iconClassName} />
//           </div>

//           <p className="mb-2 three-line-truncate pt-5">{description}</p>

//           {/* <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} /> */}
//         </div>
//         <div className="cardcontent card-back">
//           <p
//             style={{
//               fontSize: "1.2rem",
//               fontWeight: "bolder",
//               color: "#0d5992",
//             }}
//           >
//             {name}
//           </p>
//           <h5 className="mb-2 four-line-truncate">{hoverDescription}</h5>
//           <NextLink
//             title="Learn More"
//             href={linkUrl}
//             className={`more hover link-${linkType}`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard1;

import { FC } from "react";
import IconProps from "types/icon";
import { LinkType } from "types/demo-1";
import NextLink from "../links/NextLink";

// ===============================================================
type ServiceCard1Props = {
  title: string;
  link: string;
  linkType: LinkType;
  description: string;
  cardClassName?: string;
  iconClassName?: string;
  Icon: (props: IconProps) => JSX.Element;
};
// ===============================================================

const ServiceCard1: FC<ServiceCard1Props> = (props) => {
  const {
    title,
    description,
    Icon,
    link,
    linkType,
    cardClassName = "",
    iconClassName,
  } = props;

  return (
    <div className="col-md-6 col-xl-3">
      <div className={`card shadow-lg ${cardClassName}`}>
        <div className="card-body">
          <Icon className={iconClassName} />
          <h4 className="custom-card-text">{title}</h4>
          <p className="mb-2 custom-card-description-text ">{description}</p>
          <NextLink
            title="Learn More"
            href={link}
            className={`more hover link-${linkType}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard1;
