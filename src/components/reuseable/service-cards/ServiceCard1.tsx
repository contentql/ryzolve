import { FC } from "react";
import IconProps from "types/icon";
import { LinkType } from "types/demo-1";
import NextLink from "../links/NextLink";

// ===============================================================
type ServiceCard1Props = {
  title: string;
  linkUrl: string;
  linkType: LinkType;
  description: string;
  backDescription?: string;
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
    linkUrl,
    linkType,
    cardClassName,
    iconClassName,
    backDescription,
  } = props;

  return (
    // <div className='col-md-8 col-xl-4 card-ryzole-hover '>
    //   <div className={`card shadow-lg ${cardClassName} `}>
    //     <div className='card-body'>
    //       <Icon className={iconClassName} />
    //       <p style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>{title}</p>
    //       <p className='mb-2'>{description}</p>
    //       {/* <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} /> */}
    //     </div>
    //   </div>
    // </div>

    <div className="col-md-8 col-xl-4">
      <div className={`effectcard ${cardClassName} `}>
        <div className="cardcontent card-front">
          <Icon className={iconClassName} />
          <p style={{ fontSize: "1.2rem", fontWeight: "bolder" }}>{title}</p>
          <p className="mb-2">{description}</p>
          {/* <NextLink title="Learn More" href={linkUrl} className={`more hover link-${linkType}`} /> */}
        </div>
        <div className="cardcontent card-back">
          <h5 className="mb-2">{backDescription}</h5>
          <NextLink
            title="Learn More"
            href={linkUrl}
            className={`more hover link-${linkType}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard1;
